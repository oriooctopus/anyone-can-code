import { makeVar } from '@apollo/client';
import { lessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';

export const lessonCompletionDataVar = makeVar<lessonCompletionDataType>([]);
