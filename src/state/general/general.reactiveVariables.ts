import {
  SublessonTextLengthPreferenceEnum,
  SublessonChallengeFrequencyEnum,
  AuthModalStateEnum,
} from './general.types';
import { makeVar } from '@apollo/client';

// TODO: store these in local storage. Possibly via apollo cache persist

export const sublessonTextLengthPreferenceVar = makeVar(
  SublessonTextLengthPreferenceEnum.medium,
);
export const sublessonChallengeFrequencyVar = makeVar(
  SublessonChallengeFrequencyEnum.medium,
);
export const contentPanelScrollToTopFunctionVar = makeVar(() => null);
export const authModalStateVar = makeVar(AuthModalStateEnum.NOT_OPEN);
