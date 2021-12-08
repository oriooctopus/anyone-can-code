import { makeVar } from '@apollo/client';
import { TTestResult } from 'src/codeRunning/codeRunning.types';

export const testResultsVar = makeVar<Array<TTestResult>>([]);
