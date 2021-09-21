import {
  CodeChallengeDataFragment,
  MultipleChoiceChallengeDataFragment,
} from 'src/generated/graphql';
import { ChallengeFragment } from 'src/types/generalTypes';

export type CodeChallengeProps = {
  challenge: CodeChallengeDataFragment;
};

export type MultipleChoiceChallengeProps = {
  challenge: MultipleChoiceChallengeDataFragment;
};
