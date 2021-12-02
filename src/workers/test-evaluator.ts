import {
  evaluateWithContext,
  getCode,
  getEvaluationContext,
  overrideConsoleLog,
  restoreConsoleLog,
} from 'src/workers/utils';

type runTestEvaluatorProps = {
  code: string;
  internalTest: string;
  removeComments?: boolean;
};

export const runTestEvaluator = async ({
  code,
  internalTest,
  removeComments,
}: runTestEvaluatorProps) => {
  // TODO: abstract this to a util
  if (typeof self === 'undefined') {
    return;
  }

  let userPassed = true;
  let evaluationError;
  const formattedCode = getCode(code, removeComments);

  const logs = [] as Array<unknown>;

  overrideConsoleLog((args) => {
    logs.push(args);
    // @ts-expect-error will fix later
    console.standardLog('args', ...args);
  });

  try {
    // @ts-expect-error will fix later
    const context = getEvaluationContext(formattedCode, logs);
    const result = evaluateWithContext(
      `${formattedCode};
      ${internalTest};`,
      context,
    );
    if (!result) {
      throw new Error('did not pass');
    }
  } catch (err) {
    userPassed = false;
    evaluationError = err;
  }

  restoreConsoleLog();

  return {
    error: evaluationError,
    test: internalTest,
    pass: userPassed,
  };
};

if (typeof self !== 'undefined') {
  // @ts-expect-error will fix later
  self.postMessage({ type: 'contentLoaded' });
}
