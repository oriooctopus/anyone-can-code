import React, { useEffect, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import AllHallowsEve from 'monaco-themes/themes/All Hallows Eve.json';
import defineTheme from '../theme/define-theme';
import editorTheme from '../theme/editor-theme.json';

function handleEditorWillMount(monaco) {
  console.log('does this happen');
  monaco.editor.defineTheme('all-hallows-eve', editorTheme);
  // defineTheme(monaco, "All Hallows Eve");
}

// import defineTheme from './defineTheme';

const editorOptions = {
  fontSize: '18px',
  scrollBeyondLastLine: false,
  selectionHighlight: false,
  overviewRulerBorder: false,
  hideCursorInOverviewRuler: true,
  renderIndentGuides: false,
  minimap: {
    enabled: false,
  },
  selectOnLineNumbers: true,
  wordWrap: 'on',
  scrollbar: {
    horizontal: 'hidden',
    vertical: 'visible',
    verticalHasArrows: false,
    useShadows: false,
    verticalScrollbarSize: 5,
  },
  parameterHints: {
    enabled: false,
  },
  tabSize: 2,
  hover: false,
  dragAndDrop: true,
  lightbulb: {
    enabled: false,
  },
  quickSuggestions: false,
};

const Editor = ({ code, setCode }) => {
  return (
    <MonacoEditor
      automaticLayout
      beforeMount={handleEditorWillMount}
      language="javascript"
      theme="all-hallows-eve"
      value={code}
      options={editorOptions}
      onChange={setCode}
    />
  );
};

export default Editor;
