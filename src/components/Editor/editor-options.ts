import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const options: monaco.editor.IStandaloneEditorConstructionOptions = {
  fontSize: 18,
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
  hover: {
    enabled: false,
  },
  dragAndDrop: true,
  lightbulb: {
    enabled: false,
  },
  quickSuggestions: false,
};

export default options;
