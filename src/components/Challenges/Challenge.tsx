import { useEffect } from 'react';
import { ChallengeFragment } from 'src/types/generalTypes';
import { CodeChallenge } from 'components/Challenges/CodeChallenge/CodeChallenge';
import { MultipleChoiceChallengeActions } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallenge';

export type ChallengeProps = {
  challenge: ChallengeFragment;
  onClickNext: () => void;
};

export const Challenge = ({ challenge, onClickNext }: ChallengeProps) => {
  if (challenge.__typename === 'CodeChallenge') {
    return <CodeChallenge challenge={challenge} onClickNext={onClickNext} />;
  } else if (challenge.__typename === 'MultipleChoiceChallenge') {
    return (
      <MultipleChoiceChallengeActions
        challenge={challenge}
        onClickNext={onClickNext}
      />
    );
  } else {
    throw new Error('Other types not built yet');
  }
};
