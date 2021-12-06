export interface IChallengeCompletionData {
  code?: string;
  completed?: boolean;
  startingCode: string;
}

export interface ISublessonCompletionData {
  introductionCompleted?: boolean;
  challenges: Array<IChallengeCompletionData>;
}

export type lessonCompletionDataType = Array<ISublessonCompletionData>;
