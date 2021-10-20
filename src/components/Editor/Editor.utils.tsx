import { Monaco } from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import AllHallowsEveTheme from 'monaco-themes/themes/All Hallows Eve.json';

export const DEFAULT_MONACO_EDITOR_THEME = 'all-hallows-eve';

// THIS SHOULD CHANGE BASED ON WHAT IT IS. SO A HARD CHALLENGE HAS SOMETHING, A LESSON HAS SOMETHING ELSE, ETC
// THERE SHOULD ALSO BE ONE FOR GOOGLE CHALLENGES
export const DEFAULT_EDITOR_STARTING_CODE = `/* we highly recommend that when you see code examples in the lesson, you type them out
  * again here. This will significantly help you remember what the lesson is teaching,
  * because instead of just looking at examples, you are writing code yourself.
  */
`;

export const defineDefaultMonacoTheme = ({ editor }: Monaco) => {
  editor.defineTheme(
    DEFAULT_MONACO_EDITOR_THEME,
    AllHallowsEveTheme as monaco.editor.IStandaloneThemeData,
  );
};
