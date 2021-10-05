import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { Monaco } from '@monaco-editor/react';
import AllHallowsEveTheme from 'monaco-themes/themes/All Hallows Eve.json';

export const DEFAULT_MONACO_EDITOR_THEME = 'all-hallows-eve';

export const DEFAULT_EDITOR_STARTING_CODE =
  '// use this editor to test code live in the browser';

export const defineDefaultMonacoTheme = ({ editor }: Monaco) => {
  editor.defineTheme(
    DEFAULT_MONACO_EDITOR_THEME,
    AllHallowsEveTheme as monaco.editor.IStandaloneThemeData,
  );
};
