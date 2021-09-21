import { format as __format } from '../utils/format';
import curriculumHelpers, {
  removeJSComments,
} from '../utils/curriculum-helpers';

const getUtils = () => {
  // TODO: clean up this check
  if (typeof self === 'undefined') {
    return;
  }

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
};

const _codeEvaluationHelpers = {
  removeWhitespace: (string, i = 0, res = '') => {
    if (i >= string.length) return res;
    else if (string[i] == ' ')
      return _codeEvaluationHelpers.removeWhitespace(string, i + 1, res);
    else
      return _codeEvaluationHelpers.removeWhitespace(
        string,
        i + 1,
        (res += string[i]),
      );
  },
};

function evaluateWithContext(code, context = {}) {
  // Call is used to define where "this" within the evaluated code should reference.
  // eval does not accept the likes of eval.call(...) or eval.apply(...) and cannot
  // be an arrow function
  return function evaluateEval() {
    // Create an context definition list e.g. "arg1 = this.arg1, arg2 = this.arg2"
    const contextStr = Object.keys(context)
      .map((key) => `${key} = this.${key}`)
      .join(',');
    const contextDef = contextStr ? `let ${contextStr};` : '';
    debugger;

    const evalString = `${contextDef}${code}`;

    const result = eval(evalString);
    return result;
  }.call(context);
}

const getCode = (code = '', removeComments: boolean) =>
  removeComments ? removeJSComments(code) : code;

/* Run the test if there is one.  If not just evaluate the user code */
export const runTestEvaluator = async (e, resolve) => {
  if (typeof self === 'undefined') {
    return;
  }

  /* eslint-disable no-unused-vars */
  const code = getCode(e.data?.code?.contents, e.data?.removeComments);

  /* eslint-enable no-unused-vars */
  /* eslint-disable no-eval */
  try {
    // Logging is proxyed after the build to catch console.log messages
    // generated during testing.
    debugger;
    const context = {
      _codeEvaluationHelpers,
      _codeString: `${code}`,
    };
    const result = evaluateWithContext(
      `${code};
      console.log('type of myAge', typeof myAge);
      ${e.data.internalTest};`,
      context,
    ); // evaluates the user's code
    if (!result) {
      throw new Error('did not pass');
    }
  } catch (err) {
    console.log('catching the err', err);
    return {
      pass: false,
      err,
    };
  }
  console.log('success we passsed!');

  return {
    pass: true,
    test: 456,
  };
};

if (typeof self !== 'undefined') {
  self.postMessage({ type: 'contentLoaded' });
}
