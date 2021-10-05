import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '../utils/withApollo';
export async function getServerPageGetLessonData
    (options: Omit<Apollo.QueryOptions<Types.GetLessonDataQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetLessonDataQuery>({ ...options, query: Operations.GetLessonDataDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetLessonData = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLessonDataQuery, Types.GetLessonDataQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetLessonDataDocument, options);
};
export type PageGetLessonDataComp = React.FC<{data?: Types.GetLessonDataQuery, error?: Apollo.ApolloError}>;
export const withPageGetLessonData = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetLessonDataQuery, Types.GetLessonDataQueryVariables>) => (WrappedComponent:PageGetLessonDataComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetLessonDataDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetLessonData = {
      getServerPage: getServerPageGetLessonData,
      withPage: withPageGetLessonData,
      usePage: useGetLessonData,
    }