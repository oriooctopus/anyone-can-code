import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import editorOptions from './editor-options';
import { codeEditorValueVar, currentLogVar } from 'src/cache';
import { useReactiveVar } from '@apollo/client';
import { ChallengeFragment } from 'src/generated/graphql';
import { useDebounced } from 'src/utils/hooks/useDebounced';
import { getConsoleLogsFromCodeEvaluation } from 'src/workers/utils';
import {
  DEFAULT_MONACO_EDITOR_THEME,
  defineDefaultMonacoTheme,
} from 'components/Editor/Editor.utils';
import '@fontsource/roboto-mono';

type EditorProps = {
  challenge: ChallengeFragment | undefined;
  onMount: () => void;
};

export const Editor: React.FC<EditorProps> = ({ challenge }) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const currentLog = useReactiveVar(currentLogVar);

  useDebounced(
    () => {
      const newLog = getConsoleLogsFromCodeEvaluation(codeEditorValue);
      currentLogVar(newLog);
    },
    [codeEditorValue],
    200,
  );

  useEffect(() => {
    // if it's multiple choice make it something like '// you can use the editor to play around or test out '
    const startingCode = challenge?.startingCode;
    codeEditorValueVar(startingCode);
  }, [challenge?.id]);

  return (
    <Box d="flex" flexDirection="column" h="100%">
      <MonacoEditor
        beforeMount={defineDefaultMonacoTheme}
        language="javascript"
        theme={DEFAULT_MONACO_EDITOR_THEME}
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
        mr="5px"
        padding="10px"
        fontFamily="Roboto Mono"
      >
        {currentLog.map((log) => (
          <span style={{ display: 'block' }}>{log}</span>
        ))}
      </Box>
    </Box>
  );
};
