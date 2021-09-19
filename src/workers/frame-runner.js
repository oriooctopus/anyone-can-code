function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

document.__initTestFrame = initTestFrame;

async function initTestFrame(e = { code: {} }) {
  const code = (e.code.contents || '').slice();

  if (!e.getUserInput) {
    e.getUserInput = () => code;
  }

  // Hardcode Deep Freeze dependency
  const DeepFreeze = (o) => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (
        o.hasOwnProperty(prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        DeepFreeze(o[prop]);
      }
    });
    return o;
  };
  document.__runTest = async function runTests(internalTest) {
    // uncomment the following line to inspect
    // the frame-runner as it runs tests
    // make sure the dev tools console is open
    // debugger;
    try {
      // eval test string to actual JavaScript
      // This return can be a function
      // i.e. function() { assert(true, 'happy coding'); }
      const testPromise = new Promise((resolve, reject) =>
        // To avoid race conditions, we have to run the test in a final
        // document ready:
        docReady(() => {
          try {
            // eslint-disable-next-line no-eval
            const test = eval(internalTest);
            resolve(test);
          } catch (err) {
            reject(err);
          }
        }),
      );
      const test = await testPromise;
      if (typeof test === 'function') {
        await test(e.getUserInput);
      }
      return { pass: true, test: 123 };
    } catch (err) {
      if (true /* !(err instanceof chai.AssertionError) */) {
        console.error(err);
      }
      // to provide useful debugging information when debugging the tests, we
      // have to extract the message and stack before returning
      console.log('here???');
      return {
        err: { message: err.message, stack: err.stack },
      };
    }
  };
}
