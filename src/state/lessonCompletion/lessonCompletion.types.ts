export interface ISublessonCompletionData {
  code?: string;
  completed?: boolean;
}

export type sublessonCompletionDataType = Array<
  Array<ISublessonCompletionData>
>;
