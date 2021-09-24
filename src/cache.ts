import { makeVar } from '@apollo/client';

export enum ChallengeAttemptStatusEnum {
  notAttempted = 'notAttempted',
  passed = 'passed',
  failed = 'failed',
}

export const codeEditorValueVar = makeVar('the initial code');
export const testResultsVar = makeVar([]);
// TODO: store these in local storage. Possibly via apollo cache persist
export const currentChallengeIndexVar = makeVar(-1);
export const currentSublessonIndexVar = makeVar(0);
export const multipleChoiceOptionSelectionsVar = makeVar({});
export const challengeAttemptStatusVar = makeVar<ChallengeAttemptStatusEnum>(
  ChallengeAttemptStatusEnum.notAttempted,
);
