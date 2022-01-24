import { ChallengeFragment } from 'src/types/generalTypes';
import { RecursiveNormalize } from 'src/utils/general';
import { CodeChallenge } from 'components/Challenges/CodeChallenge/CodeChallenge';
import { MultipleChoiceChallenge } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallenge';

export type ChallengeProps = {
  challenge: RecursiveNormalize<ChallengeFragment>;
  nextButtonText: string;
  onClickNext: () => void;
};

export const Challenge = ({
  challenge,
  nextButtonText,
  onClickNext,
}: ChallengeProps) => {
  debugger;
  return (
    <MultipleChoiceChallenge
      challenge={challenge}
      nextButtonText={nextButtonText}
      onClickNext={onClickNext}
    />
  );
  if (challenge.__typename === 'CodeChallengeEntity') {
    return (
      <CodeChallenge
        challenge={challenge}
        nextButtonText={nextButtonText}
        onClickNext={onClickNext}
      />
    );
  } else if (challenge.__typename === 'MultipleChoiceChallengeEntity') {
    return (
      <MultipleChoiceChallenge
        challenge={challenge}
        nextButtonText={nextButtonText}
        onClickNext={onClickNext}
      />
    );
  } else {
    throw new Error('Other types not built yet');
  }
};
