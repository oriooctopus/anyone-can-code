import client from './apollo-client';
import { gql } from '@apollo/client';

const styles = {};

export async function getStaticProps() {
  return {
    props: {},
  };
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
