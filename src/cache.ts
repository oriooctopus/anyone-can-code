import { makeVar } from '@apollo/client';

export enum ChallengeAttemptStatusEnum {
  notAttempted = 'notAttempted',
  passed = 'passed',
  failed = 'failed',
}

export enum SublessonTextLengthPreferenceEnum {
  short = 'short',
  medium = 'medium',
  long = 'long',
}

export enum SublessonChallengeFrequencyEnum {
  low = 'low',
  medium = 'medium',
  high = 'high',
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
export const sublessonTextLengthPreferenceVar = makeVar(SublessonTextLengthPreferenceEnum.medium);
export const sublessonChallengeFrequencyVar = makeVar(
  SublessonChallengeFrequencyEnum.medium,
);
