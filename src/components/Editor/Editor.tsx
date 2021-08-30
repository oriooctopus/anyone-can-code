import MonacoEditor from '@monaco-editor/react';
import editorTheme from './all-hallows-eve-theme.json';
import editorOptions from './editor-options';

const THEME_NAME = 'all-hallow-eve';

function handleEditorWillMount(monaco) {
  monaco.editor.defineTheme(THEME_NAME, editorTheme);
}

export const Editor = ({ code, setCode }) => {
  return (
    <MonacoEditor
      // automaticLayout
      beforeMount={handleEditorWillMount}
      language="javascript"
      theme={THEME_NAME}
      value={code}
      options={editorOptions}
      onChange={setCode}
    />
  );
};
