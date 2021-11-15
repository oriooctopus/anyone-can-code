import { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import AllHallowsEveTheme from 'monaco-themes/themes/All Hallows Eve.json';
import { CodeChallengeDataFragment } from 'src/generated/graphql';
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
