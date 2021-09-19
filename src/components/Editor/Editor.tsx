import { useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import editorTheme from './all-hallows-eve-theme.json';
import editorOptions from './editor-options';
import { codeEditorValueVar } from 'src/cache';
import { useReactiveVar } from '@apollo/client';
import { CodeChallengeDataFragment } from 'src/generated/graphql';

type EditorProps = {
  challenge: CodeChallengeDataFragment;
  onMount: () => void;
};

const THEME_NAME = 'all-hallow-eve';

function handleEditorWillMount(monaco) {
  monaco.editor.defineTheme(THEME_NAME, editorTheme);
}

export const Editor: React.FC<EditorProps> = ({ challenge, onMount }) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);

  useEffect(() => {
    codeEditorValueVar(challenge.startingCode);
  }, [challenge.id]);

  return (
    <MonacoEditor
      beforeMount={handleEditorWillMount}
      /*
       * This might be vulnerable to a race condition. This really should run after codeEditorValue is updated
       * in useEffect, but for some reason that updated doesn't return a promise, but at the same time doesn't
       * immedietely propagate its changes
       */
      onMount={onMount}
      language="javascript"
      theme={THEME_NAME}
      value={codeEditorValue}
      options={editorOptions}
      onChange={codeEditorValueVar}
      height={'80vh'}
    />
  );
};
