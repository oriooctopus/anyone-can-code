import { makeVar } from '@apollo/client';

export const codeEditorValueVar = makeVar('the initial code');
export const testResultsVar = makeVar([]);
// TODO: store these in local storage. Possibly via apollo cache persist
export const currentChallengeIndexVar = makeVar(0);
export const currentSublessonIndexVar = makeVar(0);
