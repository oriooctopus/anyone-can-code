import { makeVar } from '@apollo/client';
import { sublessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';

export const lessonCompletionDataVar = makeVar<sublessonCompletionDataType>([]);
