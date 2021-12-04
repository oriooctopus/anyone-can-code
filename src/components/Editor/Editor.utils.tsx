import { useReactiveVar } from '@apollo/client';
import { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import AllHallowsEveTheme from 'monaco-themes/themes/All Hallows Eve.json';
import { currentChallengeIndexVar } from 'src/state/challenge/challenge.reactiveVariables';
import { updateChallengeCompletionData } from 'src/state/lessonCompletion/lessonCompletion';
import { lessonCompletionDataVar } from 'src/state/lessonCompletion/lessonCompletion.reactiveVariables';
import { currentSublessonIndexVar } from 'src/state/sublesson/sublesson.reactiveVariables';

export const DEFAULT_MONACO_EDITOR_THEME = 'all-hallows-eve';

export const defineDefaultMonacoTheme = ({ editor }: Monaco) => {
  editor.defineTheme(
    DEFAULT_MONACO_EDITOR_THEME,
    AllHallowsEveTheme as monaco.editor.IStandaloneThemeData,
  );
};

export const useGetCurrentEditorValue = () => {
  const lessonCompletionData = useReactiveVar(lessonCompletionDataVar);
  const currentSublessonIndex = useReactiveVar(currentSublessonIndexVar);
  const currentChallengeIndex = useReactiveVar(currentChallengeIndexVar);

  return lessonCompletionData?.[currentSublessonIndex]?.challenges?.[
    currentChallengeIndex
  ];
};
