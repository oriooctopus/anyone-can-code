import {
  // ssrGetCountriesByCode,
  // PageGetCountriesByCodeComp,
  // ssrGetContinents,
  ssrGetExampleData,
  PageGetExampleDataComp,
} from '../generated/page';

import { withApollo } from '../utilsreal/withApollo';
import { GetServerSideProps, GetStaticPaths } from 'next';

const Lesson: PageGetExampleDataComp = (props) => {
  return (
    <div>
      {props.data?.lessons?.map((lesson, k) => (
        <div key={k}>{lesson.name}</div>
      ))}
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const res = await ssrGetExampleData.getServerPage({
    variables: {},
    // variables: { code: params?.continent?.toString().toUpperCase() || '' },
  });

  if (res.props.error) {
    return {
      notFound: true,
    };
  }
  return res;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { props } = await ssrGetContinents.getServerPage({}, null);
//   const paths =
//     props?.data?.continents.map((continent) => ({
//       params: { continent: continent.code },
//     })) || [];
//   paths.push({ params: { continent: 'WWW' } });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default withApollo(ssrGetExampleData.withPage(() => ({}))(Lesson));
