export interface ILearningStepCompletionData {
  code?: string;
  completed?: boolean;
  startingCode?: string;
}

export interface ISublessonCompletionData {
  introduction: ILearningStepCompletionData;
  challenges: Array<ILearningStepCompletionData>;
}

export type lessonCompletionDataType = Array<ISublessonCompletionData>;
