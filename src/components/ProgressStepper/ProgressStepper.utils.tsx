import { rem } from 'src/styles/typography/font';
import { ProgressStateEnum } from 'src/types/generalTypes';

export const progressStepperColorStateMap: Record<ProgressState, string> = {
  [ProgressStateEnum.COMPLETE]: '#59CD90',
  [ProgressStateEnum.CURRENT]: '#E5E5E5',
  [ProgressStateEnum.INCOMPLETE]: '#D62828',
};

export const progressStepperItemSize = rem(8);
