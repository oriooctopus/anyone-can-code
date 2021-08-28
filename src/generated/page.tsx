import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient} from '../utilsreal/withApollo';
export async function getServerPageGetExampleData
    (options: Omit<Apollo.QueryOptions<Types.GetExampleDataQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetExampleDataQuery>({ ...options, query: Operations.GetExampleDataDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetExampleData = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetExampleDataQuery, Types.GetExampleDataQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetExampleDataDocument, options);
};
export type PageGetExampleDataComp = React.FC<{data?: Types.GetExampleDataQuery, error?: Apollo.ApolloError}>;
export const withPageGetExampleData = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetExampleDataQuery, Types.GetExampleDataQueryVariables>) => (WrappedComponent:PageGetExampleDataComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetExampleDataDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetExampleData = {
      getServerPage: getServerPageGetExampleData,
      withPage: withPageGetExampleData,
      usePage: useGetExampleData,
    }