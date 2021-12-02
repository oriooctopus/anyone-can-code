import { makeVar } from '@apollo/client';

export const currentLogVar = makeVar<Array<string>>([]);
