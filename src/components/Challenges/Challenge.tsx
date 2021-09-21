// import { ChallengeProps } from 'components/Challenges/Challenge.types';
import { CodeChallenge } from 'components/Challenges/CodeChallenge';
import { ChallengeFragment } from 'src/types/generalTypes';

export type ChallengeProps = {
  challenge: ChallengeFragment;
  onClickNext: () => void;
};

export const Challenge = ({ challenge, onClickNext }: ChallengeProps) => {
  if (challenge.__typename === 'CodeChallenge') {
    return <CodeChallenge challenge={challenge} onClickNext={onClickNext} />;
  } else {
    throw new Error('Other types not built yet');
  }
};
