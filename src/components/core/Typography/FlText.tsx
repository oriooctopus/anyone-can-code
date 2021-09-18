import clsx from 'clsx';
import { textVariants } from 'src/styles/typography/textVariants';
import { BaseText, useCoreTextStyles } from './FlText.styles';
import { IFlTextProps } from './FlText.types';

export const FlText = (props: IFlTextProps) => {
  const { children, className, variant } = props;
  // const styles = useCoreTextStyles(props);
  console.log('variants', textVariants);

  const Tag = textVariants[variant].tag ? textVariants[variant].tag : 'span';

  console.log('the specific variant', variant);

  return (
    <BaseText className={clsx(className, variant)} as={'h1'}>
      {children}
    </BaseText>
  );
};
