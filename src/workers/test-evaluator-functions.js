// import '@babel/polyfill';
// import assert from "power-assert";
import curriculumHelpers, {
  removeJSComments,
} from '../utils/curriculum-helpers';
import { format as __format } from '../utils/format';

const __utils = ((self) => {
  const MAX_LOGS_SIZE = 64 * 1024;

  let logs = [];
  function flushLogs() {
    if (logs.length) {
      self.postMessage({
        type: 'LOG',
        data: logs.join('\n'),
      });
      logs = [];
    }
  }

  const oldLog = self.console.log.bind(self.console);
  function proxyLog(...args) {
    logs.push(args.map((arg) => __format(arg)).join(' '));
    if (logs.join('\n').length > MAX_LOGS_SIZE) {
      flushLogs();
    }
    return oldLog(...args);
  }

  // unless data.type is truthy, this sends data out to the testRunner
  function postResult(data) {
    flushLogs();
    self.postMessage(data);
  }

  function log(...msgs) {
    if (msgs && msgs[0] /* && !(msgs[0] instanceof chai.AssertionError) */) {
      // discards the stack trace via toString as it only useful to debug the
      // site, not a specific challenge.
      console.log(...msgs.map((msg) => String(msg)));
    }
  }

  const toggleProxyLogger = (on) => {
    self.console.log = on ? proxyLog : oldLog;
  };

  return {
    postResult,
    log,
    toggleProxyLogger,
    flushLogs,
  };
})();

const _helpers = {
  removeWhitespace: (string, i = 0, res = '') => {
    if (i >= string.length) return res;
    else if (string[i] == ' ')
      return _helpers.removeWhitespace(string, i + 1, res);
    else return _helpers.removeWhitespace(string, i + 1, (res += string[i]));
  },
};

/* Run the test if there is one.  If not just evaluate the user code */
export const onmessage = async (e) => {
  /* eslint-disable no-unused-vars */
  let code = (e.data?.code?.contents || '').slice();
  code = e.data?.removeComments ? removeJSComments(code) : code;
  let editableContents = (e.data?.code?.editableContents || '').slice();
  editableContents = e.data?.removeComments
    ? removeJSComments(editableContents)
    : editableContents;

  // Build errors should be reported, but only once:
  __utils.toggleProxyLogger(e.data.firstTest);
  /* eslint-enable no-unused-vars */
  try {
    let testResult;
    let __userCodeWasExecuted = false;
    /* eslint-disable no-eval */
    try {
      // Logging is proxyed after the build to catch console.log messages
      // generated during testing.
      testResult = eval(`
        __utils.flushLogs();
        __userCodeWasExecuted = true;
        __utils.toggleProxyLogger(true);
        ${e.data.code.contents};
        var _codeString = \`${e.data.code.contents}}\`;
        var result = eval(\`${e.data.internalTest}\`) // evaluates the user's code
        console.log('the code string', _codeString);
        if (!result) {
          throw new Error('did not pass')
        }
      `);
    } catch (err) {
      __utils.postResult({
        pass: false,
        err,
      });
      return;
    }
    /* eslint-enable no-eval */
    if (typeof testResult === 'function') {
      await testResult((fileName) => String(e.data.sources[fileName]));
    }

    __utils.postResult({
      pass: true,
      test: 456,
    });
  } catch (err) {
    console.log('maybe it happens here');
    // Errors from testing go to the browser console only.
    __utils.toggleProxyLogger(false);
    // Report execution errors in case user code has errors that are only
    // uncovered during testing.
    __utils.log(err);
    // postResult flushes the logs and must be called after logging is finished.
    __utils.postResult({
      err: {
        message: err.message,
        pass: false,
        stack: err.stack,
      },
    });
  }
};
