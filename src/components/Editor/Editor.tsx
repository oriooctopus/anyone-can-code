import MonacoEditor from '@monaco-editor/react';
import { GetServerSideProps, NextPage } from 'next';
import { useSetEditorCodeMutation } from 'src/generated/graphql';
import {
  PageGetEditorDataComp,
  ssrGetEditorData,
  useGetEditorData,
} from 'src/generated/page';
import { withApollo } from 'src/lib/withApollo';
import editorTheme from './all-hallows-eve-theme.json';
import editorOptions from './editor-options';
import { codeEditorValueVar } from 'src/cache';
import { useReactiveVar } from '@apollo/client';

const THEME_NAME = 'all-hallow-eve';

function handleEditorWillMount(monaco) {
  monaco.editor.defineTheme(THEME_NAME, editorTheme);
}

const Editor: PageGetEditorDataComp = () => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);

  return (
    <MonacoEditor
      beforeMount={handleEditorWillMount}
      language="javascript"
      theme={THEME_NAME}
      value={codeEditorValue}
      options={editorOptions}
      onChange={codeEditorValueVar}
      height={'80vh'}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrGetEditorData.getServerPage({}, ctx);
};

export default withApollo(ssrGetEditorData.withPage(() => ({}))(Editor));
