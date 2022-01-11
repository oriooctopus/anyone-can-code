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

// export type FlattenData<O extends { data: Array<infer Type extends {attributes: object} : never>}> = Array<
//   NN<Type>
// >;

// this name is probably not accurate, will revisit later
type StrapiCollection<T> = { attributes: T };

// type NestedStrapiObject = StrapiObject<StrapiObject>;

// next step is to test how the typing works for when data is null.

export type FlattenAttributes<O extends object> = O extends {
  attributes: any;
}[]
  ? (O[number]['attributes'] & Object.Omit<O[number], 'attributes'>)[]
  : O extends { attributes: any }
  ? Object.Omit<O, 'attributes'> & O['attributes']
  : never;

export type FlattenStrapiParam = StrapiObject[] | StrapiObject;

// I'm also assuming that if data is singular and null it's because of weird typing stuff from strapi's part and just get rid of it. Technically, this could lead to errors, but I can't imagine any situation right now where it would. But still, stay on the lookout
export type NormalizeStrapi<O extends FlattenStrapiParam> =
  O extends StrapiObject[]
    ? FlattenAttributes<FlattenData<O>>[]
    : O extends StrapiObject
    ? FlattenAttributes<FlattenData<O>>
    : never;

type StrapiObject<T = object | null> = {
  data: StrapiCollection<T>[] | StrapiCollection<T> | null;
};

export type FlattenData<O> = O extends { data: Array<infer dataObj> }
  ? Array<dataObj>
  : O extends { data: infer dataObj }
  ? /**
     * For some reason the data object is considered by strapi to
     * be nullable. I haven't seen any valid reason for this so I've
     * removed it. But that might change in the future if I find a
     * valid reason
     */
    NonNullable<dataObj>
  : never;

// export type FlattenStrapiDeep<O> = O extends NestedStrapiObject ? FlattenStrapiDeep<

// you have to call the inner part and access it
// and actually you'll have to go through every key too

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

// I am pretty sure I'm stripping null. Which is good, but it
// should be more explicit/configurable. Will revisit later
export const normalizeStrapiData = <T extends StrapiObject>({
  data,
}: T): NormalizeStrapi<T> => {
  if (Array.isArray(data)) {
    return flatMap(data, ({ attributes }) =>
      attributes ? [attributes] : [],
    ) as NormalizeStrapi<T>;
  } else {
    return data?.attributes as NormalizeStrapi<T>;
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
