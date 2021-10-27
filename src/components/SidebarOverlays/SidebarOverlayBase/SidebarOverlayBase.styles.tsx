import { Box } from '@chakra-ui/layout';
import { rem } from 'src/styles/typography/font';

export const SidebarOverlayContent: React.FC = ({ children }) => {
  return <Box p={rem(20)}>{children}</Box>;
};
