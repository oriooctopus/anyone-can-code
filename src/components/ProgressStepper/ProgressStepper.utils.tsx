import { rem } from 'src/styles/typography/font';
import { ProgressStepperItemState } from 'components/ProgressStepper/ProgressStepper.types';

export const progressStepperColorStateMap: Record<
  ProgressStepperItemState,
  string
> = {
  complete: '#59CD90',
  current: '#E5E5E5',
  incomplete: '#D62828',
};

export const progressStepperItemSize = rem(8);
