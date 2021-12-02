import {
  SublessonChallengeFrequencyEnum,
  SublessonTextLengthPreferenceEnum,
} from 'src/state/general';
import { LessonSettingsButtonGroupOption } from 'components/LessonSettings/LessonSettings.types';

export enum LessonSettingsSaveOptionsEnum {
  sublesson = 'sublesson',
  lesson = 'lesson',
  everywhere = 'everywhere',
}

export const sublessonChallengeFrequencyOptions: Array<LessonSettingsButtonGroupOption> =
  [
    {
      label: 'Low',
      value: SublessonChallengeFrequencyEnum.low,
    },
    {
      label: 'Medium',
      value: SublessonChallengeFrequencyEnum.medium,
    },
    {
      label: 'High',
      value: SublessonChallengeFrequencyEnum.high,
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
