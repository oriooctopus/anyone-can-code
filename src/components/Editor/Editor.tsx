import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import editorTheme from './all-hallows-eve-theme.json';
import editorOptions from './editor-options';
import { codeEditorValueVar, currentLogVar } from 'src/cache';
import { useReactiveVar } from '@apollo/client';
import { ChallengeFragment } from 'src/generated/graphql';
import { useDebounced } from 'src/utils/hooks/useDebounced';
import { getConsoleLogsFromCodeEvaluation } from 'src/workers/utils';

type EditorProps = {
  challenge: ChallengeFragment | undefined;
  onMount: () => void;
};

const THEME_NAME = 'all-hallow-eve';

function handleEditorWillMount(monaco) {
  monaco.editor.defineTheme(THEME_NAME, editorTheme);
}

export const Editor: React.FC<EditorProps> = ({ challenge, onMount }) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const currentLog = useReactiveVar(currentLogVar);
  console.log('🚀 --------------------------');
  console.log('🚀 ~ currentLog', currentLog);

  useDebounced(
    () => {
      const newLog = getConsoleLogsFromCodeEvaluation(codeEditorValue);
      currentLogVar(newLog);
    },
    [codeEditorValue],
    200,
  );

  // const onChangeCodeEditorValue = (val: string) => {
  //   codeEditorValueVar(val);
  // }

  useEffect(() => {
    // if it's multiple choice make it something like '// you can use the editor to play around or test out '
    const startingCode = challenge?.startingCode;
    codeEditorValueVar(startingCode);
  }, [challenge?.id]);

  return (
    <Box d="flex" flexDirection="column" h="100%">
      <MonacoEditor
        beforeMount={handleEditorWillMount}
        /*
         * This might be vulnerable to a race condition. This really should run after codeEditorValue is updated
         * in useEffect, but for some reason that updated doesn't return a promise, but at the same time doesn't
         * immedietely propagate its changes
         *
         * TODO: investigate further/ask around on what the proper implementation should be
         */
        // onMount={onMount}
        language="javascript"
        theme={THEME_NAME}
        value={codeEditorValue}
        options={editorOptions}
        onChange={(val) => codeEditorValueVar(val)}
        height={'70vh'}
      />
      <Box
        bgColor="white"
        color="black"
        borderTopRadius="10px"
        h="100px"
        mt="auto"
        padding="10px"
      >
        {currentLog.map((log) => (
          <span style={{ display: 'block' }}>{log}</span>
        ))}
      </Box>
    </Box>
  );
};
