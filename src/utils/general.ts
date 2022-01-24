import { renderToStaticMarkup } from 'react-dom/server';
import { O } from 'ts-toolbelt';
import { GetLessonDataQuery } from 'src/generated/graphql';

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
    ? (O[number]['attributes'] & O.Omit<O[number], 'attributes'>)[]
    : O extends StrapiAttributesObject
    ? O.Omit<O, 'attributes'> & O['attributes']
    : never;

export type FlattenStrapiParam =
  | StrapiCollectionWithDataResponse
  | StrapiAttributesObject
  | null;

type StrapiCollectionWithData = {
  data: StrapiAttributesObject[] | StrapiAttributesObject | [] | null;
};

export type RecursiveFlattenParam = {
  [key: string]: FlattenStrapiParam;
};

// perhaps FlattenStrapiParamSingular idk?
type StrapiFlattenableObjectTempName =
  | StrapiAttributesObject
  | StrapiCollectionWithData;

type StrapiCollectionWithDataResponse =
  | StrapiCollectionWithData[]
  | StrapiCollectionWithData;

export type RecursiveNormalizeStrapiObject<O extends object> =
  O extends StrapiFlattenableObjectTempName
    ? RecursiveNormalize<NormalizeStrapi<O>>
    : {
        [P in keyof O]: NullableTernary<
          O[P],
          FlattenStrapiParam,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          RecursiveNormalize<NormalizeStrapi<O[P]>>,
          O[P]
        >;
      };

export type RecursiveNormalize<O extends object> = O extends Array<infer inner>
  ? inner extends object
    ? RecursiveNormalizeStrapiObject<NonNullable<inner>>[]
    : inner extends Nullable<object>
    ? RecursiveNormalizeStrapiObject<NonNullable<inner>>[] | null
    : never
  : RecursiveNormalizeStrapiObject<O>;

// this probably should be renamed
// export type RecursiveNormalizeSingular<O extends object> = {
//   [P in keyof O]: NullableTernary<
//     O[P],
//     FlattenStrapiParam,
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-expect-error
//     RecursiveNormalize<NormalizeStrapi<O[P]>>,
//     O[P]
//   >;
// };

// so this is the parent recurser. Actaully wait
// I think it should go RecursiveNormalize -> RecursiveNormalizeUnnamedLol -> RecursiveNormalizeStrapiObject
// everything needs to be renamed obviously, lol
// Potential top layer, just
// RecursiveNormalize handles Arrays -> NormalizeStrapiArrays
// RecursiveNormalizeUnnamedLol handles objects that could potentially themselves be FlattenStrapiParams -> NormalizeStrapiFlattenableObjects
// RecursiveNormalizeStrapiObject handles objects that potentially have FlattenStrapiParams within them -> NormalizeStrapiFlattenable
// export type RecursiveNormalizeUnnamedLol<O extends object> =
//   O extends FlattenStrapiParam
//     ? RecursiveNormalizeUnnamedLol<NormalizeStrapi<O>>
//     : RecursiveNormalizeStrapiObject<O>;

// so when it gets here, 'attributes' is the key and therefore the value inside isn't recognizeable as a FlattenStrapiParam.
// In this case I believe we need to check the key
// But not only that, I believe that we need to handle it in a different way
// NormalizeStrapi also isn't built to handle it, it's meant to handle an object containing attributes/data, not the value of attributes itself.
// However, perhaps we could add an extra check before the object iteration runs to check if the object itself is a data/attributes object

export type FlattenData<O> = O extends { data: Array<infer dataObj> }
  ? Array<NonNullable<dataObj>>
  : O extends { data: infer dataObj }
  ? /**
     * For some reason the data object is considered by strapi to
     * be nullable. I haven't seen any valid reason for this so I've
     * removed it. But that might change in the future if I find a
     * valid reason
     */
    NonNullable<dataObj>
  : never;

// I'm also assuming that if data is singular and null it's because of weird typing stuff from strapi's part and just get rid of it. Technically, this could lead to errors, but I can't imagine any situation right now where it would. But still, stay on the lookout
export type NormalizeStrapiCollectionWithData<
  O extends StrapiCollectionWithDataResponse,
> = O extends StrapiCollectionWithData[]
  ? FlattenAttributes<FlattenData<O>>[]
  : O extends StrapiCollectionWithData
  ? FlattenAttributes<FlattenData<O>>
  : never;

export type NormalizeStrapi<O extends FlattenStrapiParam> =
  O extends StrapiCollectionWithDataResponse
    ? NormalizeStrapiCollectionWithData<O>
    : O extends StrapiAttributesObject
    ? FlattenAttributes<O>
    : null;

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

function flatMap<T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U[],
): U[] {
  return Array.prototype.concat(...array.map(callbackfn));
}

const isStrapiCollectionWithData = (
  arg: object,
): arg is StrapiCollectionWithData => {
  return !!arg && 'data' in arg;
};

const isStrapiAttributesObject = (
  arg: object,
): arg is StrapiAttributesObject => {
  return !!arg && 'attributes' in arg;
};

const isFlattenStrapiParam = (arg: unknown): arg is FlattenStrapiParam => {
  if (Array.isArray(arg)) {
    return arg.every((item) => isFlattenStrapiParam(item));
    // return arg.every(isFlattenStrapiParam);
  } else if (arg === null) {
    // it's fine for this to be true or false tbh
    return true;
  } else if (typeof arg !== 'object') {
    return false;
  } else if (isStrapiAttributesObject(arg)) {
    return true;
  } else if (isStrapiCollectionWithData(arg)) {
    return true;
  } else {
    return false;
  }
};

export const recursiveNormalize = <T extends object>(
  param: T,
): RecursiveNormalize<T> => {
  if (Array.isArray(param)) {
    return param.map(recursiveNormalize) as RecursiveNormalize<T>;
  }

  return Object.fromEntries(
    Object.entries(param).map(([key, val]) => [
      key,
      isFlattenStrapiParam(val)
        ? recursiveNormalize(normalizeStrapiData(val))
        : val,
    ]),
  ) as RecursiveNormalize<T>;
};

// I am pretty sure I'm stripping null. Which is good, but it
// should be more explicit/configurable. Will revisit later
export const normalizeStrapiData = <T extends FlattenStrapiParam>(
  param: T,
): NormalizeStrapi<T> => {
  if (param === null) {
    return null as NormalizeStrapi<T>;
  } else if (isStrapiAttributesObject(param)) {
    return isFlattenStrapiParam(param.attributes)
      ? normalizeStrapiData(param.attributes)
      : param.attributes;
  } else if (isStrapiCollectionWithData(param)) {
    const { data } = param;

    if (Array.isArray(data)) {
      return flatMap(data, (item) =>
        item.attributes ? [item.attributes] : [],
      ) as NormalizeStrapi<T>;
    }

    return data?.attributes as NormalizeStrapi<T>;
  } else {
    return param.map(normalizeStrapiData) as NormalizeStrapi<T>;
  }
};

// (RecursiveNoramlize) function that takes in an object or array, and just handles arrays basically
// I think this could be not necessary
// (RecursiveNormalizeStrapiObject) function that takes in an object and normalizes any keys within.
// I believe this is where I have to align things

// Ok I do need one layer to handle an object with unknown keys and one layer to actually sanitize the keys
// NormalizeStrapiData needs to just return the NormalizeStrapi
// This means that in RecursiveNormalize, it shoudl call normalize strapi and then run recursive normalize on the result rather than relying on normalizeStrapi

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
