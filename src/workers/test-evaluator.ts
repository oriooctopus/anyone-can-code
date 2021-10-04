import { format as __format } from '../utils/format';
import {
  evaluateWithContext,
  getCode,
  getEvaluationContext,
} from 'src/workers/utils';

/* Run the test if there is one.  If not just evaluate the user code */
export const runTestEvaluator = async (e, resolve) => {
  if (typeof self === 'undefined') {
    return;
  }

  const code = getCode(e.data?.code?.contents, e.data?.removeComments);

  try {
    const context = getEvaluationContext(code);

    const result = evaluateWithContext(
      `${code};
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
    // fix this
    test: 456,
  };
};

if (typeof self !== 'undefined') {
  self.postMessage({ type: 'contentLoaded' });
}
