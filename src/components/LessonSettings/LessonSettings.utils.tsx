import {
  SublessonStepFrequencyEnum,
  SublessonTextLengthPreferenceEnum,
} from 'src/state/general/general.types';
import { LessonSettingsButtonGroupOption } from 'components/LessonSettings/LessonSettings.types';

export enum LessonSettingsSaveOptionsEnum {
  sublesson = 'sublesson',
  lesson = 'lesson',
  everywhere = 'everywhere',
}

export const sublessonStepFrequencyOptions: Array<LessonSettingsButtonGroupOption> =
  [
    {
      label: 'Low',
      value: SublessonStepFrequencyEnum.low,
    },
    {
      label: 'Medium',
      value: SublessonStepFrequencyEnum.medium,
    },
    {
      label: 'High',
      value: SublessonStepFrequencyEnum.high,
    },
  ];

export const sublessonTextLengthPreferenceOptions: Array<LessonSettingsButtonGroupOption> =
  [
    {
      label: 'Short',
      value: SublessonTextLengthPreferenceEnum.short,
    },
    {
      label: 'Medium',
      value: SublessonTextLengthPreferenceEnum.medium,
    },
    {
      label: 'Long',
      value: SublessonTextLengthPreferenceEnum.long,
    },
  ];

export const lessonSettingsSaveOptions: Array<LessonSettingsButtonGroupOption> =
  [
    {
      label: 'This Sublesson',
      value: LessonSettingsSaveOptionsEnum.sublesson,
    },
    {
      label: 'This Lesson',
      value: LessonSettingsSaveOptionsEnum.lesson,
    },
    {
      label: 'Everywhere',
      value: LessonSettingsSaveOptionsEnum.everywhere,
    },
  ];
