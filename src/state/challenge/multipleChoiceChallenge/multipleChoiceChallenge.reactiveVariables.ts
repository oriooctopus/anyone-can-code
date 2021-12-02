import { makeVar } from '@apollo/client';

export const multipleChoiceOptionSelectionsVar = makeVar<
  Record<number, boolean>
>({});
