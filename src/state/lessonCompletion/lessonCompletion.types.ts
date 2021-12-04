export interface IChallengeCompletionData {
  code?: string;
  completed?: boolean;
}

export interface ISublessonCompletionData {
  introductionCompleted?: boolean;
  challenges: Array<IChallengeCompletionData>;
}

export type lessonCompletionDataType = Array<ISublessonCompletionData>;
