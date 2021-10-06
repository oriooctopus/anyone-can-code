import {
  evaluateWithContext,
  getCode,
  getEvaluationContext,
} from 'src/workers/utils';

type runTestEvaluatorProps = {
  code: string;
  internalTest: string;
  removeComments?: boolean;
};

export const runTestEvaluator = async ({
  code,
  internalTest,
  removeComments = true,
}: runTestEvaluatorProps) => {
  // TODO: abstract this to a util
  if (typeof self === 'undefined') {
    return;
  }

  let userPassed = true;
  let evaluationError;
  const formattedCode = getCode(code, removeComments);

  try {
    const context = getEvaluationContext(formattedCode);

    const result = evaluateWithContext(
      `${formattedCode};
      ${internalTest};`,
      context,
    );
    if (!result) {
      throw new Error('did not pass');
    }
  } catch (err) {
    console.log('catching the err', err);
    userPassed = false;
    evaluationError = err;
  }

  return {
    error: evaluationError,
    test: internalTest,
    pass: userPassed,
  };
};

if (typeof self !== 'undefined') {
  self.postMessage({ type: 'contentLoaded' });
}
