export interface ILearningStepCompletionData {
  code?: string;
  completed?: boolean;
  startingCode?: string;
}

export interface ISublessonCompletionData {
  introduction: ILearningStepCompletionData;
  steps: Array<ILearningStepCompletionData>;
}

export type lessonCompletionDataType = Array<ISublessonCompletionData>;
