import { buildJSChallenge } from "./build";
import createWorker from "./worker-executor";

function getJSTestRunner(testString) {
  const code = {
    contents: testString,
    editableContents: testString,
  };

  const testWorker = createWorker("test-evaluator", {
    terminateWorker: true,
  });

  return (testString, testTimeout, firstTest = true) => {
    return testWorker
      .execute({ testString, code, firstTest }, 5000)
      .on("LOG", (...args) => console.log("yo", args)).done;
  };
}

async function executeTests(testRunner, tests, testTimeout = 5000) {
  console.log("the tests yooooo");
  const testResults = [];
  for (let i = 0; i < tests.length; i++) {
    const { text, testString } = tests[i];
    const newTest = { text, testString };
    // only the last test outputs console.logs to avoid log duplication.
    const firstTest = i === 1;
    try {
      const result = await testRunner.call(
        null,
        testString,
        testTimeout,
        firstTest
      );
      const { pass, err } = result;
      if (pass) {
        newTest.pass = true;
      } else {
        throw err;
      }
    } catch (err) {
      newTest.message = text;
      if (err === "timeout") {
        newTest.err = "Test timed out";
        newTest.message = `${newTest.message} (${newTest.err})`;
      } else {
        const { message, stack } = err;
        newTest.err = message + "\n" + stack;
        newTest.stack = stack;
      }
      // yield put(updateConsole(newTest.message));
    } finally {
      testResults.push(newTest);
    }
  }
  return testResults;
}

export async function buildChallenge(challengeData, options) {
  return buildJSChallenge(challengeData, options);
}

export async function runTests(testString, tests) {
  // buildChallenge(challengeData, {
  //   preview: true,
  //   protect: false, // this could be changed later
  // });

  const testRunner = getJSTestRunner(testString);

  const results = await executeTests(testRunner, tests);

  console.log("the results", results);
}
