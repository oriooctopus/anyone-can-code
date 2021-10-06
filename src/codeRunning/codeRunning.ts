import pMap from 'p-map';
import { runTestEvaluator } from 'src/workers/test-evaluator';
import { CodeChallengeTests } from 'components/Challenges/CodeChallenge/CodeChallenge.types';

type TTestResult = {
  pass: boolean;
  internalTest: string;
  label: string;
  error?: string;
  stack?: string;
};

const executeTests = async (
  code: string,
  tests: CodeChallengeTests,
): Promise<Array<TTestResult>> => {
  return pMap(tests, async (test) => {
    const { label, internalTest } = test;
    const newTest = { pass: true, label, internalTest } as TTestResult;

    const { pass, error } = await runTestEvaluator({
      internalTest,
      code,
    });

    if (!pass) {
      const { message, stack } = error;

      newTest.pass = false;
      newTest.error = message + '\n' + stack;
      newTest.stack = stack;
    }

    return newTest;
  });
};

export async function runTests(code: string, tests: CodeChallengeTests) {
  const results = await executeTests(code, tests);

  results.map(({ error, pass }, index) =>
    console.log(index, (error || '').substring(0, 20), pass),
  );

  return results;
}
