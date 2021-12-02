import { makeVar } from '@apollo/client';
import { TTestResult } from 'src/codeRunning/codeRunning.types';
import { sublessonCompletionDataType } from 'src/state/lessonCompletion/lessonCompletion.types';

export const testResultsVar = makeVar<Array<TTestResult>>([]);
