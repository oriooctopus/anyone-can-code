import { StepFragment } from 'src/types/generalTypes';
import { FlattenStrapi } from 'src/utils/normalizeStrapi';
import { CodeChallenge } from 'components/Challenges/CodeChallenge/CodeChallenge';
import { MultipleChoiceChallenge } from 'components/Challenges/MultipleChoiceChallenge/MultipleChoiceChallenge';
import { Playground } from 'components/Playground/Playground';

type StepProps = {
  step: FlattenStrapi<StepFragment>;
  nextButtonText: string;
  onClickNext: () => void;
};

export const Step = ({ step, nextButtonText, onClickNext }: StepProps) => {
  const props = {
    nextButtonText,
    onClickNext,
  };

  if (step.__typename === 'CodeChallenge') {
    return <CodeChallenge challenge={step} {...props} />;
  } else if (step.__typename === 'Playground') {
    return <Playground step={step} {...props} />;
  } else if (step.__typename === 'MultipleChoiceChallenge') {
    return <MultipleChoiceChallenge challenge={step} {...props} />;
  } else {
    throw new Error('Other types not built yet');
  }
};
