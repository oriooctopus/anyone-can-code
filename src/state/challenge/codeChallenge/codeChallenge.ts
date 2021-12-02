import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';

export const resetTestResults = () => {
  testResultsVar([]);
};
