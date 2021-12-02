import { makeVar } from '@apollo/client';

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
// TODO: store these in local storage. Possibly via apollo cache persist

export const sublessonTextLengthPreferenceVar = makeVar(
  SublessonTextLengthPreferenceEnum.medium,
);
export const sublessonChallengeFrequencyVar = makeVar(
  SublessonChallengeFrequencyEnum.medium,
);
export const contentPanelScrollToTopFunctionVar = makeVar(() => {});
