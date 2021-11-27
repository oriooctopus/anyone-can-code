import { rem } from 'src/styles/typography/font';
import { ProgressState } from 'src/types/generalTypes';

export const progressStepperColorStateMap: Record<ProgressState, string> = {
  complete: '#59CD90',
  current: '#E5E5E5',
  incomplete: '#D62828',
};

export const progressStepperItemSize = rem(8);
