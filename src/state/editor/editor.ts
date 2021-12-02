import { CodeChallengeDataFragment } from 'src/generated/graphql';
import { testResultsVar } from 'src/state/challenge/codeChallenge/codeChallenge.reactiveVariables';
import { updateChallengeCompletionData } from 'src/state/lessonCompletion/lessonCompletion';
import { getSublessonStartingCode } from 'src/state/sublesson/sublesson.utils';
import { getCodeChallengeStartingCode } from 'components/Challenges/CodeChallenge/CodeChallenge.utils';

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
  updateChallengeCompletionData({
    code: {
      $set: code,
    },
  });
};
