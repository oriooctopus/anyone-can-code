import { makeVar } from '@apollo/client';
import { sublessonChallengeStartingIndex } from 'src/App.constants';
import { TTestResult } from 'src/codeRunning/codeRunning.types';

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

interface sublessonCompletionData {
  code: string;
  completed: boolean;
}

export const lessonCompletionDataVar = makeVar<
  Array<Array<sublessonCompletionData>>
>([]);
export const codeEditorValueVar = makeVar('the initial code');
export const testResultsVar = makeVar<Array<TTestResult>>([]);
// TODO: store these in local storage. Possibly via apollo cache persist
export const currentChallengeIndexVar = makeVar(
  sublessonChallengeStartingIndex,
);
export const currentSublessonIndexVar = makeVar(0);
export const multipleChoiceOptionSelectionsVar = makeVar<
  Record<number, boolean>
>({});
export const currentLogVar = makeVar<Array<string>>([]);
export const challengeAttemptStatusVar = makeVar<ChallengeAttemptStatusEnum>(
  ChallengeAttemptStatusEnum.notAttempted,
);
export const sublessonTextLengthPreferenceVar = makeVar(
  SublessonTextLengthPreferenceEnum.medium,
);
export const sublessonChallengeFrequencyVar = makeVar(
  SublessonChallengeFrequencyEnum.medium,
);
export const contentPanelScrollToTopFunctionVar = makeVar(() => {});
