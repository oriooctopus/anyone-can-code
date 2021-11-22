export type ProgressStepperItemState = 'complete' | 'current' | 'incomplete';

export interface IProgressStepperProps {
  title: string;
  steps: Array<{
    hoverText: string;
    state: ProgressStepperItemState;
    onClick: () => void;
  }>;
}
