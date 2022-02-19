import { SettingOutlined } from '@ant-design/icons';
import { useReactiveVar } from '@apollo/client';
import {
  useDisclosure,
  Box,
  BoxProps,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import {
  sublessonStepFrequencyVar,
  sublessonTextLengthPreferenceVar,
} from 'src/state/general/general.reactiveVariables';
import { LessonSettingsButtonGroup } from 'components/LessonSettings/LessonSettings.styles';
import {
  lessonSettingsSaveOptions,
  sublessonStepFrequencyOptions,
  sublessonTextLengthPreferenceOptions,
  LessonSettingsSaveOptionsEnum,
} from 'components/LessonSettings/LessonSettings.utils';

type props = BoxProps;

// TODO: add formik typing
export const LessonSettings = ({ ...boxProps }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sublessonTextLengthPreference = useReactiveVar(
    sublessonTextLengthPreferenceVar,
  );
  const sublessonStepFrequency = useReactiveVar(sublessonStepFrequencyVar);

  const initialValues = {
    lessonSaveOption: LessonSettingsSaveOptionsEnum.everywhere,
    sublessonTextLengthPreference,
    sublessonStepFrequency,
  };
  // @ts-expect-error will fix later
  const onSubmit = (values) => {
    // in future we will use the save preferences to determine how we update
    sublessonTextLengthPreferenceVar(values.sublessonTextLengthPreference);
    sublessonStepFrequencyVar(values.sublessonStepFrequency);
    onClose();
  };

  return (
    <Box {...boxProps}>
      <SettingOutlined onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleSubmit, setFieldValue }) => (
            <ModalContent maxWidth="600px">
              <ModalHeader>Lesson Settings</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LessonSettingsButtonGroup
                  options={sublessonTextLengthPreferenceOptions}
                  currentValue={values.sublessonTextLengthPreference}
                  onClick={(val) =>
                    setFieldValue('sublessonTextLengthPreference', val)
                  }
                  label="Lesson text:"
                />
                <Text fontSize="14px" opacity="75%" mb="15px">
                  Note: The above setting only applies if there is applicable
                  content. There may only be one description for a sublesson
                  written, in which case different settings will show the same
                  thing
                </Text>
                <LessonSettingsButtonGroup
                  options={sublessonStepFrequencyOptions}
                  currentValue={values.sublessonStepFrequency}
                  onClick={(val) =>
                    setFieldValue('sublessonStepFrequency', val)
                  }
                  label="Exercise Frequency:"
                />
                <LessonSettingsButtonGroup
                  boxProps={{ mt: '30px' }}
                  options={lessonSettingsSaveOptions}
                  onClick={(val) =>
                    setFieldValue('lessonSettingsSaveOptions', val)
                  }
                  currentValue={values.lessonSaveOption}
                  label="Changes apply to:"
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="green" onClick={() => handleSubmit()}>
                  Save
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
    </Box>
  );
};
