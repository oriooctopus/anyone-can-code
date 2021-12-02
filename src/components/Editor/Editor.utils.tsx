import { useReactiveVar } from '@apollo/client';
import { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import AllHallowsEveTheme from 'monaco-themes/themes/All Hallows Eve.json';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';
import { ChallengeFragment } from 'src/types/generalTypes';

export const DEFAULT_MONACO_EDITOR_THEME = 'all-hallows-eve';

// THIS SHOULD CHANGE BASED ON WHAT IT IS. SO A HARD CHALLENGE HAS SOMETHING, A LESSON HAS SOMETHING ELSE, ETC
// THERE SHOULD ALSO BE ONE FOR GOOGLE CHALLENGES
type TGetDefaultEditorStartingCode = {
  challengeType: ChallengeFragment['__typename'];
  challengeDifficulty: 'easy' | 'medium' | 'hard';
};

export const defineDefaultMonacoTheme = ({ editor }: Monaco) => {
  editor.defineTheme(
    DEFAULT_MONACO_EDITOR_THEME,
    AllHallowsEveTheme as monaco.editor.IStandaloneThemeData,
  );
};

export const useCurrentEditorValue = () => {
  const lessonCompletionData = useReactiveVar(lessonCompletionDataVar);
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);

  return lessonCompletionData?.[currentSublessonIndex]?.[currentChallengeIndex];
};
