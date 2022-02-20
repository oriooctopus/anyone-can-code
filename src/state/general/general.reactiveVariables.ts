import {
  SublessonTextLengthPreferenceEnum,
  SublessonStepFrequencyEnum,
  AuthModalStateEnum,
} from './general.types';
import { makeVar } from '@apollo/client';

// TODO: store these in local storage. Possibly via apollo cache persist

export const sublessonTextLengthPreferenceVar = makeVar(
  SublessonTextLengthPreferenceEnum.medium,
);
export const sublessonStepFrequencyVar = makeVar(
  SublessonStepFrequencyEnum.medium,
);
export const contentPanelScrollToTopFunctionVar = makeVar(() => {});
export const authModalStateVar = makeVar(AuthModalStateEnum.NOT_OPEN);
