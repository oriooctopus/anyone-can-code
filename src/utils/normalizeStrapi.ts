import { O } from 'ts-toolbelt';
import { flatMap } from 'src/utils/general';

export type FlattenStrapi<O extends object> = O extends Array<infer inner>
  ? inner extends object
    ? NormalizeStrapiObject<NonNullable<inner>>[]
    : inner extends Nullable<object>
    ? NormalizeStrapiObject<NonNullable<inner>>[] | null
    : never
  : NormalizeStrapiObject<O>;

export const flattenStrapi = <T extends object>(param: T): FlattenStrapi<T> => {
  if (Array.isArray(param)) {
    return param.map((item) =>
      // @ts-expect-error I don't think this is actually a problem. We'll see
      flattenStrapi(item),
    ) as FlattenStrapi<T>;
  } else if (isFlattenStrapiParam(param)) {
    return flattenStrapi(
      // I think this should be cast as something else
      normalizeStrapiData(param) as FlattenStrapi<T>,
    ) as FlattenStrapi<T>;
  }

  return Object.fromEntries(
    Object.entries(param).map(([key, val]) => {
      // if (key === 'data' || key === 'attributes') {

      // }
      return [
        key,
        isFlattenStrapiParam(val) || key === 'data' || key === 'attributes'
          ? flattenStrapi(normalizeStrapiData(val))
          : val,
      ];
    }),
  ) as FlattenStrapi<T>;
};

type StrapiAttributesObject = {
  attributes: any;
};

type Nullable<T> = T | null;

/**
 * An example describes this best:
 * type type1 = number | null;
 * type test = type1 extends number ? 'this is a number' : 'this is definitely not a number' // will be 'this is definitely not a number' even though it could be a number
 * type test = NullableTernary<type1, number, 'this can be a number', 'this cannot be a number'> // will be 'this can be a number' | null
 *
 * This allows us to more elegantly handle ternarys on nullable types
 */
type NullableTernary<typeToBeTested, extensionToTest, exprIfTrue, exprIfFalse> =
  typeToBeTested extends extensionToTest
    ? exprIfTrue
    : typeToBeTested extends Nullable<extensionToTest>
    ? exprIfTrue | null
    : exprIfFalse;

type FlattenAttributesParam =
  | StrapiAttributesObject
  | Array<StrapiAttributesObject>;

export type FlattenAttributes<param extends FlattenAttributesParam> =
  param extends Array<infer inner>
    ? inner extends StrapiAttributesObject
      ? Array<FlattenAttributes<inner>>
      : never
    : param extends StrapiAttributesObject
    ? O.Omit<param, 'attributes' | '__typename'> & param['attributes']
    : never;

type FlattenStrapiParam =
  | StrapiCollectionWithDataResponse
  | StrapiAttributesObject
  | null;

type StrapiCollectionWithData = {
  data: StrapiAttributesObject[] | StrapiAttributesObject | [] | null;
};

// perhaps FlattenStrapiParamSingular idk?
type StrapiFlattenableObjectTempName =
  | StrapiAttributesObject
  | StrapiCollectionWithData;

type StrapiCollectionWithDataResponse =
  | StrapiCollectionWithData[]
  | StrapiCollectionWithData;

// Ok I think I need to make this handle objects not just FlattenStrapi to handle double nested situations like with challenge
type NormalizeStrapiObject<O extends object> =
  O extends StrapiFlattenableObjectTempName
    ? FlattenStrapi<NormalizeStrapiSingleLayer<O>>
    : {
        [P in keyof O]: NullableTernary<
          O[P],
          FlattenStrapiParam,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          FlattenStrapi<NormalizeStrapiSingleLayer<O[P]>>,
          O[P]
        >;
      };

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
type NormalizeStrapiCollectionWithData<
  O extends StrapiCollectionWithDataResponse,
> = O extends StrapiCollectionWithData[]
  ? FlattenAttributes<FlattenData<O>>[]
  : O extends StrapiCollectionWithData
  ? FlattenAttributes<FlattenData<O>>
  : never;

// Normalizes the outer layer of the parameter passed in
export type NormalizeStrapiSingleLayer<O extends FlattenStrapiParam> =
  O extends StrapiCollectionWithDataResponse
    ? NormalizeStrapiCollectionWithData<O>
    : O extends StrapiAttributesObject
    ? FlattenAttributes<O>
    : null;

// I am pretty sure I'm stripping null. Which is good, but it
// should be more explicit/configurable. Will revisit later
const normalizeStrapiData = <T extends FlattenStrapiParam>(
  param: T,
): NormalizeStrapiSingleLayer<T> => {
  if (param === null) {
    return null as NormalizeStrapiSingleLayer<T>;
  } else if (isStrapiAttributesObject(param)) {
    return isFlattenStrapiParam(param.attributes)
      ? normalizeStrapiData(param.attributes)
      : param.attributes;
  } else if (isStrapiCollectionWithData(param)) {
    const { data } = param;

    if (Array.isArray(data)) {
      return flatMap(data, (item) =>
        item.attributes ? [item.attributes] : [],
      ) as NormalizeStrapiSingleLayer<T>;
    }

    return data?.attributes as NormalizeStrapiSingleLayer<T>;
  } else {
    return param.map(normalizeStrapiData) as NormalizeStrapiSingleLayer<T>;
  }
};

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
