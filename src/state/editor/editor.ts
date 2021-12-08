import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { getCodeChallengeStartingCode } from 'src/state/challenge/codeChallenge/codeChallenge';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { updateLearningStepCompletionData } from 'src/state/lessonCompletion/lessonCompletion';
import { getSublessonStartingCode } from 'src/state/sublesson/sublesson.utils';

interface IResetCodeProps {
  challenge?: CodeChallengeDataFragment;
}

// TODO: expand this to support sublesson starting code as well
export const resetCode = ({ challenge }: IResetCodeProps) => {
  const newValue = challenge
    ? getCodeChallengeStartingCode(challenge)
    : getSublessonStartingCode();

  setCurrentEditorValue(newValue);
  testResultsVar([]);
};

export const setCurrentEditorValue = (code: string) => {
  updateLearningStepCompletionData({
    code: {
      $set: code,
    },
  });
};
