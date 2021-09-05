import { GetServerSideProps } from 'next';
import {
  PageGetSublessonInstructionsDataComp,
  ssrGetSublessonInstructionsData,
} from 'src/generated/page';
import { withApollo } from 'src/utilsreal/withApollo';
import SublessonInstructions from './SublessonInstructions';

const SublessonInstructionsContainer: PageGetSublessonInstructionsDataComp = (
  props,
) => {
  console.log('🚀 ----------------');
  console.log('🚀 ~ props', props);
  console.log('🚀 ----------------');
  return <span />;
  return <SublessonInstructions {...props} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log('does this query happen', params);
  return await ssrGetSublessonInstructionsData.getServerPage({
    variables: {
      id: 'ckrghqsag4kup0e76l24madyw',
    },
  });
};

// export default withApollo(ssrGetSublessonInstructionsData.withPage({}));
// export default withApollo(SublessonInstructionsContainer);

export default withApollo(
  ssrGetSublessonInstructionsData.withPage((arg) => ({
    variables: { id: 'ckrghqsag4kup0e76l24madyw' },
    // variables: { code: arg?.query?.continent?.toString().toUpperCase() || '' },
  }))(SublessonInstructionsContainer),
);
