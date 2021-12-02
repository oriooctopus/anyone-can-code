import { useReactiveVar } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import '@fontsource/roboto-mono';
import MonacoEditor from '@monaco-editor/react';
import { resetTestResults } from 'src/state/challenge/codeChallenge/codeChallenge';
import { currentLogVar } from 'src/state/editor/editor.reactiveVariables';
import { codeEditorValueVar } from 'src/state/general';
import { useDebounced } from 'src/utils/hooks/useDebounced';
import { getConsoleLogsFromCodeEvaluation } from 'src/workers/utils';
import {
  DEFAULT_MONACO_EDITOR_THEME,
  defineDefaultMonacoTheme,
} from 'components/Editor/Editor.utils';
import editorOptions from 'components/Editor/editor-options';

export const Editor = () => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const currentLog = useReactiveVar(currentLogVar);

  const onChangeEditorValue = (newValue: string | undefined) => {
    resetTestResults();
    codeEditorValueVar(newValue);
  };

  useDebounced(
    () => {
      const newLog = getConsoleLogsFromCodeEvaluation(codeEditorValue);
      currentLogVar(newLog);
    },
    [codeEditorValue],
    400,
  );

  return (
    <Box d="flex" flexDirection="column" h="100%">
      <MonacoEditor
        beforeMount={defineDefaultMonacoTheme}
        language="javascript"
        theme={DEFAULT_MONACO_EDITOR_THEME}
        value={codeEditorValue}
        options={editorOptions}
        onChange={onChangeEditorValue}
        height={'70vh'}
      />
      <Box
        bgColor="white"
        color="black"
        borderRadius="10px"
        h="100px"
        mt="auto"
        mr="5px"
        padding="10px"
        fontFamily="Roboto Mono"
      >
        {currentLog.map((log, index) => (
          <span style={{ display: 'block' }} key={log + index}>
            {log}
          </span>
        ))}
      </Box>
    </Box>
  );
};
