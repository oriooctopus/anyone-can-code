import { Box } from '@chakra-ui/layout';
import { rem } from 'src/styles/typography/font';

interface IProps {
  children: React.ReactNode;
}

export const SidebarOverlayContent = ({ children }: IProps) => {
  return <Box p={rem(20)}>{children}</Box>;
};
