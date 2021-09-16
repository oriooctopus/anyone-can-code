import { BaseText, useCoreTextStyles } from './FlText.styles';
import { IFlTextProps } from './FlText.types';

export const FlText = (props: IFlTextProps) => {
  const { children } = props;
  const styles = useCoreTextStyles(props);

  return <BaseText className={styles}>{children}</BaseText>;
};
