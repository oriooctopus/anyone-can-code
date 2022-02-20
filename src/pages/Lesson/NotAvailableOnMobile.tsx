import { Box, Heading } from '@chakra-ui/react';

export const NotAvailableOnMobile = () => {
  console.log('process.env.isProd', process.env);
  if (process.env.isProd !== 'true') {
    return null;
  }

  return (
    <Box
      inset={0}
      position="absolute"
      backgroundColor="black"
      zIndex="200"
      color="white"
      padding="20px"
      display={{
        lg: 'none',
      }}
    >
      <Heading size="lg">
        Anyone Can Code is not yet available on mobile or small screens. Please
        revisit the site on a screen larger than 992px
      </Heading>
    </Box>
  );
};
