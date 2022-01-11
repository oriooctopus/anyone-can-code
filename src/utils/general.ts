import { omit } from 'lodash';
import { renderToStaticMarkup } from 'react-dom/server';
import { Object } from 'ts-toolbelt';
import { GetSyntaxHandbookDataQuery } from 'src/generated/graphql';
import { NN } from 'src/utils/typescriptUtils';

type ObjKeyof<T> = T extends object ? keyof T : never;
type KeyofKeyof<T> = ObjKeyof<T> | { [K in keyof T]: ObjKeyof<T[K]> }[keyof T];
type StripNever<T> = Pick<
  T,
  { [K in keyof T]: [T[K]] extends [never] ? never : K }[keyof T]
>;
type Lookup<T, K> = T extends any ? (K extends keyof T ? T[K] : never) : never;
type SimpleFlatten<T> = T extends object
  ? StripNever<
      {
        [K in KeyofKeyof<T>]:
          | Exclude<K extends keyof T ? T[K] : never, object>
          | { [P in keyof T]: Lookup<T[P], K> }[keyof T];
      }
    >
  : T;

// export type FlattenDataArray<O extends { data: Array<infer Type extends {attributes: object} : never>}> = Array<
//   NN<Type>
// >;
export type FlattenDataArray<O> = O extends { data: Array<infer dataObj> }
  ? Array<dataObj>
  : never;

// the problem is that strapi object is wrong, it messes up the levels
// type GetAttributes<internal> = {
//   data: { attributes: internal }[];
// };
type StrapiObject = {
  data: { attributes: obj }[];
};
// type StrapiObject = {
//   data: { attributes: object }[];
// };

// type hmm<O> = O extends StrapiObject<infer internal> ? number : never;

// type hmm2 = hmm<{ data: { a: 1234; attributes: 23 }[] }>;

// export type FlattenStrapi<O> = O extends StrapiObject<infer internal>
//   ? FlattenAttributes<FlattenDataArray<internal>>
//   : never;

// export type FlattenAttributes<O extends object> = O extends { attributes: any }
//   ? Object.Omit<O, 'attributes'> & O['attributes']
//   : O extends { attributes: any }[]
//   ? (O[number]['attributes'] & Object.Omit<O[number], 'attributes'>)[]
//   : never;
export type FlattenAttributes<O extends object> = O extends {
  attributes: any;
}[]
  ? (O[number]['attributes'] & Object.Omit<O[number], 'attributes'>)[]
  : O extends { attributes: any }
  ? Object.Omit<O, 'attributes'> & O['attributes']
  : never;

export type FlattenStrapi<O> = O extends StrapiObject
  ? FlattenAttributes<FlattenDataArray<O>>
  : never;

// type test = FlattenStrapi<{
//   data: {
//     attributes: {
//       1: 2;
//     };
//   }[];
// }>;
type base = NN<GetSyntaxHandbookDataQuery['courses']>;
type oneLayer = FlattenStrapi<base>[number]['modules'];
// type secondLayer = FlattenAttributes<oneLayer>;
// type maybe = FlattenAttributes<test>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encodeToBase64String = (value: any): string =>
  btoa(JSON.stringify(value));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decodeBase64String = (base64String: string): any =>
  JSON.parse(atob(base64String));

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

// to be passed into filter
export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined;
};

type thing = { attributes: object | null };

function flatMap<T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U[],
): U[] {
  return Array.prototype.concat(...array.map(callbackfn));
}

// export const normalize = <T extends { data: thing | thing[] }>(
//   arg: T,
// ): T['data'] extends Array<infer Item> ? FlattenAttributes<T>[] : (FlattenAttributes<T>) => {
//   const data = arg?.data;

//   if (!data) {
//     // temporary
//     return [] as FlattenAttributes<T>[];

//   } else if (Array.isArray(data)) {
//     return flatMap(data, ({attributes}) => attributes ? [attributes] : []) as FlattenAttributes<T>[];
//   } else {
//     return data.attributes as FlattenAttributes<T>;
//   }
// };

export const normalizeDataArray = <T extends StrapiObject>({
  data,
}: T): FlattenStrapi<T> => {
  return flatMap(data, ({ attributes }) =>
    attributes ? [attributes] : [],
  ) as FlattenStrapi<T>;

  if (!data) {
    // temporary
    return [] as FlattenAttributes<T>[];
  } else {
    return flatMap(data, ({ attributes }) =>
      attributes ? [attributes] : [],
    ) as FlattenAttributes<T>[];
  }
};

export const isExternalURL = (url: string) => {
  if (typeof location === 'undefined') {
    return true;
  }

  const domain = function (url: string) {
    return url.replace('http://', '').replace('https://', '').split('/')[0];
  };

  return domain(location.href) !== domain(url);
};

export const renderSvgToCss = (svg: React.ReactElement) => {
  const staticMarkupSvg = renderToStaticMarkup(svg).replace(/"/g, "'");
  return `url("data:image/svg+xml; utf8, ${staticMarkupSvg}")`;
};
