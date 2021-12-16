import { Box, Divider, Text } from '@chakra-ui/layout';
import { Layout } from 'components/Layout/Layout';

export const Home = () => (
  <Layout>
    <Box mx={10} color="white">
      <Text fontSize="3xl">
        If you are not embarrassed by the first version of your product, you've
        launched too late - Reid Hoffman
      </Text>
      <Divider my={5} />
      <Text>
        Welcome! This is a very, very, very early version of AnyoneCanCode.
        Right now we are missing a ton of important features. Our current focus
        is building out our first course: JS Foundations. Click the Map button
        in the upper left hand corner to get started.
      </Text>
    </Box>
  </Layout>
);
