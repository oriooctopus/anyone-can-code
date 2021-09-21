import { buildJSChallenge } from './build';
import createWorker from './worker-executor';
import { runTestEvaluator } from 'src/workers/test-evaluator';

function getJSTestRunner(internalTest) {
  const code = {
    contents: internalTest,
    editableContents: internalTest,
  };

  const isProduction = false;

  if (isProduction) {
    const testWorker = createWorker('test-evaluator', {
      terminateWorker: true,
    });
    return (internalTest, testTimeout, firstTest = true) => {
      return testWorker
        .execute({ internalTest, code, firstTest }, 5000)
        .on('LOG', (...args) => console.log('yo', args)).done;
    };
  }

  return (internalTest, testTimeout, firstTest = true) => {
    return runTestEvaluator({
      data: {
        internalTest,
        code,
        firstTest,
      },
    });
  };
}

async function executeTests(testRunner, tests, testTimeout = 5000) {
  const testResults = [];
  for (let i = 0; i < tests.length; i++) {
    const { label, internalTest } = tests[i];
    const newTest = { label, internalTest };
    // only the last test outputs console.logs to avoid log duplication.
    const firstTest = i === 1;
    try {
      const result = await testRunner.call(
        null,
        internalTest,
        testTimeout,
        firstTest,
      );
      const { pass, err } = result;
      if (pass) {
        newTest.pass = true;
      } else {
        throw err;
      }
    } catch (err) {
      newTest.pass = false;
      newTest.message = label;
      if (err === 'timeout') {
        newTest.err = 'Test timed out';
        newTest.message = `${newTest.message} (${newTest.err})`;
      } else {
        const { message, stack } = err;
        newTest.err = message + '\n' + stack;
        newTest.stack = stack;
      }
    } finally {
      testResults.push(newTest);
    }
  }
  return testResults;
}

export async function buildChallenge(challengeData, options) {
  return buildJSChallenge(challengeData, options);
}

export async function runTests(internalTest, tests) {
  const testRunner = getJSTestRunner(internalTest);
  const results = await executeTests(testRunner, tests);

  console.log('the results', results);
  console.log('easier to read results');
  results.map(({ err, pass }, index) =>
    console.log(index, (err || '').substring(0, 20), pass),
  );
  return results;
}
