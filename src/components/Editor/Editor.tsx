import { useReactiveVar } from '@apollo/client';
import { Box } from '@chakra-ui/react';
import '@fontsource/roboto-mono';
import MonacoEditor from '@monaco-editor/react';
import { useEffect } from 'react';
import { codeEditorValueVar, currentLogVar, testResultsVar } from 'src/cache';
import { useDebounced } from 'src/utils/hooks/useDebounced';
import { getConsoleLogsFromCodeEvaluation } from 'src/workers/utils';
import {
  DEFAULT_EDITOR_STARTING_CODE,
  DEFAULT_MONACO_EDITOR_THEME,
  defineDefaultMonacoTheme,
} from 'components/Editor/Editor.utils';
import editorOptions from 'components/Editor/editor-options';
import { ChallengeFragment } from 'src/types/generalTypes';
import { isCodeChallenge } from 'components/Challenges/Challenge.utils';

type EditorProps = {
  challenge: ChallengeFragment | undefined;
  onMount: () => void;
};

export const Editor: React.FC<EditorProps> = ({ challenge }) => {
  const codeEditorValue = useReactiveVar(codeEditorValueVar);
  const currentLog = useReactiveVar(currentLogVar);

  const onChangeEditorValue = (newValue: string | undefined) => {
    testResultsVar([]);
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

  useEffect(() => {
    const startingValue =
      challenge && isCodeChallenge(challenge) && challenge?.startingCode;
    codeEditorValueVar(startingValue || DEFAULT_EDITOR_STARTING_CODE);
  }, [challenge?.id]);

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
        borderTopRadius="10px"
        h="100px"
        mt="auto"
        mr="5px"
        padding="10px"
        fontFamily="Roboto Mono"
      >
        {currentLog.map(log => (
          <span style={{ display: 'block' }}>{log}</span>
        ))}
      </Box>
    </Box>
  );
};
