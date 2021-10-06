import { Button, ButtonProps } from '@chakra-ui/button';
import { testResultsVar } from 'src/cache';

export const ChallengeButton = (props: ButtonProps) => (
  <Button
    px="35px"
    py="25px"
    mt="auto"
    mb="30px"
    colorScheme="green"
    {...props}
  />
);

export const resetChallengeTestResults = () => {
  testResultsVar([]);
};

// export const useMultipleChoice = () => {
//   const [optionSelectionMap, setOptionSelectionMap] = useState([]);
//   const [hasJustAttempted, setHasJustAttempted] = useState(false);

//   const toggleOption = (index: number) => {
//     optionSelectionMap[index] = !!optionSelectionMap[index];
//     setOptionSelectionMap(optionSelectionMap);
//   };

//   const onSubmit = (onSuccess: () => void) => {
//     if ()
//   };

//   return {
//     optionSelectionMap,
//     toggleOption,
//   };
// };
