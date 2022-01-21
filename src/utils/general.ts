import { renderToStaticMarkup } from 'react-dom/server';
import { Object } from 'ts-toolbelt';

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

// type NestedStrapiCollectionWithData = StrapiCollectionWithData<StrapiCollectionWithData>;

// next step is to test how the typing works for when data is null.

export type StrapiAttributesObject = {
  attributes: any;
};

export type Nullable<T> = T | null;

/**
 * An example describes this best:
 * type type1 = number | null;
 * type test = type1 extends number ? 'this is a number' : 'this is definitely not a number' // will be 'this is definitely not a number' even though it could be a number
 * type test = NullableTernary<type1, number, 'this can be a number', 'this cannot be a number'> // will be 'this can be a number' | null
 *
 * This allows us to more elegantly handle ternarys on nullable types
 */
export type NullableTernary<
  typeToBeTested,
  extensionToTest,
  exprIfTrue,
  exprIfFalse,
> = typeToBeTested extends extensionToTest
  ? exprIfTrue
  : typeToBeTested extends Nullable<extensionToTest>
  ? exprIfTrue | null
  : exprIfFalse;

export type FlattenAttributes<O extends object> =
  O extends StrapiAttributesObject[]
    ? (O[number]['attributes'] & Object.Omit<O[number], 'attributes'>)[]
    : O extends StrapiAttributesObject
    ? Object.Omit<O, 'attributes'> & O['attributes']
    : never;

export type FlattenStrapiParam =
  | StrapiCollectionWithDataResponse
  | StrapiAttributesObject;

type StrapiCollectionWithData<T = object | null> = {
  data: StrapiCollection<T>[] | StrapiCollection<T> | [] | null;
};

type StrapiCollectionWithDataResponse =
  | StrapiCollectionWithData[]
  | StrapiCollectionWithData;

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

// export type NormalizeStrapiDeep = No

// I'm also assuming that if data is singular and null it's because of weird typing stuff from strapi's part and just get rid of it. Technically, this could lead to errors, but I can't imagine any situation right now where it would. But still, stay on the lookout
export type NormalizeStrapiCollectionWithData<
  O extends StrapiCollectionWithDataResponse,
> = O extends StrapiCollectionWithData[]
  ? FlattenAttributes<FlattenData<O>>[]
  : O extends StrapiCollectionWithData
  ? FlattenAttributes<FlattenData<O>>
  : never;

export type NormalizeStrapi<O> = O extends StrapiCollectionWithDataResponse
  ? NormalizeStrapiCollectionWithData<O>
  : O extends StrapiAttributesObject
  ? FlattenAttributes<O>
  : never;

// export type NormalizeStrapiCollectionResponse<O extends FlattenStrapiParam> =

// next step is to separate NormalizeStrapi into a NoramlizeOuterDataObject type or something, and then make it handle both attributes or Data

// export type FlattenStrapiDeep<O> = O extends NestedStrapiCollectionWithData ? FlattenStrapiDeep<

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
export const normalizeStrapiData = <T extends FlattenStrapiParam>(
  param: T,
): NormalizeStrapi<T> => {
  // add a typeguard for better assertion that this is the attributes object
  if (!Array.isArray(param) && 'attributes' in param) {
    return param.attributes;
  } else if ('data' in param) {
    // for some reason param is type never. fix that.
    const dataProp = (param as StrapiCollectionWithData)?.data;

    if (Array.isArray(dataProp)) {
      return flatMap(dataProp, (item) =>
        item?.attributes ? [item?.attributes] : [],
      ) as NormalizeStrapi<T>;
    }

    return dataProp?.attributes as NormalizeStrapi<T>;
  } else {
    // handles the array of StrapiCollectionWithData
    return param.map(normalizeStrapiData) as NormalizeStrapi<T>;
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
