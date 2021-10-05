import { Monaco } from '@monaco-editor/react';
import AllHallowsEveTheme from 'monaco-themes/themes/All Hallows Eve.json';

export const DEFAULT_MONACO_EDITOR_THEME = 'all-hallows-eve';

export const defineDefaultMonacoTheme = (monaco: Monaco) => {
  monaco.editor.defineTheme(
    DEFAULT_MONACO_EDITOR_THEME,
    /*
     * TODO: open an issue to figure out how to do the following:
     * Because the theme comes from a json file, the type needs
     * to be asserted when imported, but I'm not sure how to
     * import/access the relevant type
     */
    // @ts-ignore
    AllHallowsEveTheme,
  );
};
