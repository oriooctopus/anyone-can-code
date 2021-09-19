import { ChallengeProps } from 'components/Challenges/Challenge.types';
import { CodeChallenge } from 'components/Challenges/CodeChallenge';

export const Challenge = ({ challenge }: ChallengeProps) => {
  if (challenge.__typename === 'CodeChallenge') {
    return <CodeChallenge challenge={challenge} />;
  } else {
    throw new Error('Other types not built yet');
  }
};
