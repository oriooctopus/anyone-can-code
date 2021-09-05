import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient} from '../utilsreal/withApollo';
export async function getServerPageGetEditorData
    (options: Omit<Apollo.QueryOptions<Types.GetEditorDataQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetEditorDataQuery>({ ...options, query: Operations.GetEditorDataDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetEditorData = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetEditorDataQuery, Types.GetEditorDataQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetEditorDataDocument, options);
};
export type PageGetEditorDataComp = React.FC<{data?: Types.GetEditorDataQuery, error?: Apollo.ApolloError}>;
export const withPageGetEditorData = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetEditorDataQuery, Types.GetEditorDataQueryVariables>) => (WrappedComponent:PageGetEditorDataComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetEditorDataDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetEditorData = {
      getServerPage: getServerPageGetEditorData,
      withPage: withPageGetEditorData,
      usePage: useGetEditorData,
    }

export async function getServerPageGetSublessonInstructionsData
    (options: Omit<Apollo.QueryOptions<Types.GetSublessonInstructionsDataQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetSublessonInstructionsDataQuery>({ ...options, query: Operations.GetSublessonInstructionsDataDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetSublessonInstructionsData = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetSublessonInstructionsDataQuery, Types.GetSublessonInstructionsDataQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetSublessonInstructionsDataDocument, options);
};
export type PageGetSublessonInstructionsDataComp = React.FC<{data?: Types.GetSublessonInstructionsDataQuery, error?: Apollo.ApolloError}>;
export const withPageGetSublessonInstructionsData = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetSublessonInstructionsDataQuery, Types.GetSublessonInstructionsDataQueryVariables>) => (WrappedComponent:PageGetSublessonInstructionsDataComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetSublessonInstructionsDataDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetSublessonInstructionsData = {
      getServerPage: getServerPageGetSublessonInstructionsData,
      withPage: withPageGetSublessonInstructionsData,
      usePage: useGetSublessonInstructionsData,
    }
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