import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type CodeChallenge = Node & {
  __typename?: 'CodeChallenge';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<CodeChallenge>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  codeChallengeCriterias: Array<CodeChallengeCriteria>;
  sublesson?: Maybe<Sublesson>;
  /** List of CodeChallenge versions */
  history: Array<Version>;
};


export type CodeChallengeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CodeChallengeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeCodeChallengeCriteriasArgs = {
  where?: Maybe<CodeChallengeCriteriaWhereInput>;
  orderBy?: Maybe<CodeChallengeCriteriaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeSublessonArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CodeChallengeConnectInput = {
  /** Document to connect */
  where: CodeChallengeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CodeChallengeConnection = {
  __typename?: 'CodeChallengeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CodeChallengeEdge>;
  aggregate: Aggregate;
};

export type CodeChallengeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  codeChallengeCriterias?: Maybe<CodeChallengeCriteriaCreateManyInlineInput>;
  sublesson?: Maybe<SublessonCreateOneInlineInput>;
};

export type CodeChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing CodeChallenge documents */
  create?: Maybe<Array<CodeChallengeCreateInput>>;
  /** Connect multiple existing CodeChallenge documents */
  connect?: Maybe<Array<CodeChallengeWhereUniqueInput>>;
};

export type CodeChallengeCreateOneInlineInput = {
  /** Create and connect one CodeChallenge document */
  create?: Maybe<CodeChallengeCreateInput>;
  /** Connect one existing CodeChallenge document */
  connect?: Maybe<CodeChallengeWhereUniqueInput>;
};

export type CodeChallengeCriteria = Node & {
  __typename?: 'CodeChallengeCriteria';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CodeChallengeCriteria>;
  /** Get the document in other stages */
  documentInStages: Array<CodeChallengeCriteria>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  codeChallenge?: Maybe<CodeChallenge>;
  /** List of CodeChallengeCriteria versions */
  history: Array<Version>;
};


export type CodeChallengeCriteriaLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type CodeChallengeCriteriaDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CodeChallengeCriteriaCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CodeChallengeCriteriaUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CodeChallengeCriteriaPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CodeChallengeCriteriaCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeCriteriaUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeCriteriaPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeCriteriaCodeChallengeArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeCriteriaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CodeChallengeCriteriaConnectInput = {
  /** Document to connect */
  where: CodeChallengeCriteriaWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CodeChallengeCriteriaConnection = {
  __typename?: 'CodeChallengeCriteriaConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CodeChallengeCriteriaEdge>;
  aggregate: Aggregate;
};

export type CodeChallengeCriteriaCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  codeChallenge?: Maybe<CodeChallengeCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CodeChallengeCriteriaCreateLocalizationsInput>;
};

export type CodeChallengeCriteriaCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type CodeChallengeCriteriaCreateLocalizationInput = {
  /** Localization input */
  data: CodeChallengeCriteriaCreateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeCriteriaCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<CodeChallengeCriteriaCreateLocalizationInput>>;
};

export type CodeChallengeCriteriaCreateManyInlineInput = {
  /** Create and connect multiple existing CodeChallengeCriteria documents */
  create?: Maybe<Array<CodeChallengeCriteriaCreateInput>>;
  /** Connect multiple existing CodeChallengeCriteria documents */
  connect?: Maybe<Array<CodeChallengeCriteriaWhereUniqueInput>>;
};

export type CodeChallengeCriteriaCreateOneInlineInput = {
  /** Create and connect one CodeChallengeCriteria document */
  create?: Maybe<CodeChallengeCriteriaCreateInput>;
  /** Connect one existing CodeChallengeCriteria document */
  connect?: Maybe<CodeChallengeCriteriaWhereUniqueInput>;
};

/** An edge in a connection. */
export type CodeChallengeCriteriaEdge = {
  __typename?: 'CodeChallengeCriteriaEdge';
  /** The item at the end of the edge. */
  node: CodeChallengeCriteria;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CodeChallengeCriteriaManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CodeChallengeCriteriaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CodeChallengeCriteriaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CodeChallengeCriteriaWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  codeChallenge?: Maybe<CodeChallengeWhereInput>;
};

export enum CodeChallengeCriteriaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type CodeChallengeCriteriaUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  codeChallenge?: Maybe<CodeChallengeUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<CodeChallengeCriteriaUpdateLocalizationsInput>;
};

export type CodeChallengeCriteriaUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type CodeChallengeCriteriaUpdateLocalizationInput = {
  data: CodeChallengeCriteriaUpdateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeCriteriaUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<CodeChallengeCriteriaCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<CodeChallengeCriteriaUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CodeChallengeCriteriaUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type CodeChallengeCriteriaUpdateManyInlineInput = {
  /** Create and connect multiple CodeChallengeCriteria documents */
  create?: Maybe<Array<CodeChallengeCriteriaCreateInput>>;
  /** Connect multiple existing CodeChallengeCriteria documents */
  connect?: Maybe<Array<CodeChallengeCriteriaConnectInput>>;
  /** Override currently-connected documents with multiple existing CodeChallengeCriteria documents */
  set?: Maybe<Array<CodeChallengeCriteriaWhereUniqueInput>>;
  /** Update multiple CodeChallengeCriteria documents */
  update?: Maybe<Array<CodeChallengeCriteriaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CodeChallengeCriteria documents */
  upsert?: Maybe<Array<CodeChallengeCriteriaUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple CodeChallengeCriteria documents */
  disconnect?: Maybe<Array<CodeChallengeCriteriaWhereUniqueInput>>;
  /** Delete multiple CodeChallengeCriteria documents */
  delete?: Maybe<Array<CodeChallengeCriteriaWhereUniqueInput>>;
};

export type CodeChallengeCriteriaUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CodeChallengeCriteriaUpdateManyLocalizationsInput>;
};

export type CodeChallengeCriteriaUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type CodeChallengeCriteriaUpdateManyLocalizationInput = {
  data: CodeChallengeCriteriaUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeCriteriaUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<CodeChallengeCriteriaUpdateManyLocalizationInput>>;
};

export type CodeChallengeCriteriaUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CodeChallengeCriteriaWhereInput;
  /** Update many input */
  data: CodeChallengeCriteriaUpdateManyInput;
};

export type CodeChallengeCriteriaUpdateOneInlineInput = {
  /** Create and connect one CodeChallengeCriteria document */
  create?: Maybe<CodeChallengeCriteriaCreateInput>;
  /** Update single CodeChallengeCriteria document */
  update?: Maybe<CodeChallengeCriteriaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CodeChallengeCriteria document */
  upsert?: Maybe<CodeChallengeCriteriaUpsertWithNestedWhereUniqueInput>;
  /** Connect existing CodeChallengeCriteria document */
  connect?: Maybe<CodeChallengeCriteriaWhereUniqueInput>;
  /** Disconnect currently connected CodeChallengeCriteria document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected CodeChallengeCriteria document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CodeChallengeCriteriaUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CodeChallengeCriteriaWhereUniqueInput;
  /** Document to update */
  data: CodeChallengeCriteriaUpdateInput;
};

export type CodeChallengeCriteriaUpsertInput = {
  /** Create document if it didn't exist */
  create: CodeChallengeCriteriaCreateInput;
  /** Update document if it exists */
  update: CodeChallengeCriteriaUpdateInput;
};

export type CodeChallengeCriteriaUpsertLocalizationInput = {
  update: CodeChallengeCriteriaUpdateLocalizationDataInput;
  create: CodeChallengeCriteriaCreateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeCriteriaUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CodeChallengeCriteriaWhereUniqueInput;
  /** Upsert data */
  data: CodeChallengeCriteriaUpsertInput;
};

/** Identifies documents */
export type CodeChallengeCriteriaWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CodeChallengeCriteriaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CodeChallengeCriteriaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CodeChallengeCriteriaWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  codeChallenge?: Maybe<CodeChallengeWhereInput>;
};

/** References CodeChallengeCriteria record uniquely */
export type CodeChallengeCriteriaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** An edge in a connection. */
export type CodeChallengeEdge = {
  __typename?: 'CodeChallengeEdge';
  /** The item at the end of the edge. */
  node: CodeChallenge;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CodeChallengeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CodeChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CodeChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CodeChallengeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  codeChallengeCriterias_every?: Maybe<CodeChallengeCriteriaWhereInput>;
  codeChallengeCriterias_some?: Maybe<CodeChallengeCriteriaWhereInput>;
  codeChallengeCriterias_none?: Maybe<CodeChallengeCriteriaWhereInput>;
  sublesson?: Maybe<SublessonWhereInput>;
};

export enum CodeChallengeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type CodeChallengeUpdateInput = {
  codeChallengeCriterias?: Maybe<CodeChallengeCriteriaUpdateManyInlineInput>;
  sublesson?: Maybe<SublessonUpdateOneInlineInput>;
};

export type CodeChallengeUpdateManyInlineInput = {
  /** Create and connect multiple CodeChallenge documents */
  create?: Maybe<Array<CodeChallengeCreateInput>>;
  /** Connect multiple existing CodeChallenge documents */
  connect?: Maybe<Array<CodeChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing CodeChallenge documents */
  set?: Maybe<Array<CodeChallengeWhereUniqueInput>>;
  /** Update multiple CodeChallenge documents */
  update?: Maybe<Array<CodeChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CodeChallenge documents */
  upsert?: Maybe<Array<CodeChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple CodeChallenge documents */
  disconnect?: Maybe<Array<CodeChallengeWhereUniqueInput>>;
  /** Delete multiple CodeChallenge documents */
  delete?: Maybe<Array<CodeChallengeWhereUniqueInput>>;
};

export type CodeChallengeUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type CodeChallengeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CodeChallengeWhereInput;
  /** Update many input */
  data: CodeChallengeUpdateManyInput;
};

export type CodeChallengeUpdateOneInlineInput = {
  /** Create and connect one CodeChallenge document */
  create?: Maybe<CodeChallengeCreateInput>;
  /** Update single CodeChallenge document */
  update?: Maybe<CodeChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CodeChallenge document */
  upsert?: Maybe<CodeChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing CodeChallenge document */
  connect?: Maybe<CodeChallengeWhereUniqueInput>;
  /** Disconnect currently connected CodeChallenge document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected CodeChallenge document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CodeChallengeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CodeChallengeWhereUniqueInput;
  /** Document to update */
  data: CodeChallengeUpdateInput;
};

export type CodeChallengeUpsertInput = {
  /** Create document if it didn't exist */
  create: CodeChallengeCreateInput;
  /** Update document if it exists */
  update: CodeChallengeUpdateInput;
};

export type CodeChallengeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CodeChallengeWhereUniqueInput;
  /** Upsert data */
  data: CodeChallengeUpsertInput;
};

/** Identifies documents */
export type CodeChallengeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CodeChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CodeChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CodeChallengeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  codeChallengeCriterias_every?: Maybe<CodeChallengeCriteriaWhereInput>;
  codeChallengeCriterias_some?: Maybe<CodeChallengeCriteriaWhereInput>;
  codeChallengeCriterias_none?: Maybe<CodeChallengeCriteriaWhereInput>;
  sublesson?: Maybe<SublessonWhereInput>;
};

/** References CodeChallenge record uniquely */
export type CodeChallengeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


export type Lesson = Node & {
  __typename?: 'Lesson';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Lesson>;
  /** Get the document in other stages */
  documentInStages: Array<Lesson>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  sublessons: Array<Sublesson>;
  /** List of Lesson versions */
  history: Array<Version>;
};


export type LessonLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type LessonDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type LessonCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type LessonUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type LessonPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type LessonCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type LessonUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type LessonPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type LessonSublessonsArgs = {
  where?: Maybe<SublessonWhereInput>;
  orderBy?: Maybe<SublessonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type LessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type LessonConnectInput = {
  /** Document to connect */
  where: LessonWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type LessonConnection = {
  __typename?: 'LessonConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<LessonEdge>;
  aggregate: Aggregate;
};

export type LessonCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  sublessons?: Maybe<SublessonCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<LessonCreateLocalizationsInput>;
};

export type LessonCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type LessonCreateLocalizationInput = {
  /** Localization input */
  data: LessonCreateLocalizationDataInput;
  locale: Locale;
};

export type LessonCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<LessonCreateLocalizationInput>>;
};

export type LessonCreateManyInlineInput = {
  /** Create and connect multiple existing Lesson documents */
  create?: Maybe<Array<LessonCreateInput>>;
  /** Connect multiple existing Lesson documents */
  connect?: Maybe<Array<LessonWhereUniqueInput>>;
};

export type LessonCreateOneInlineInput = {
  /** Create and connect one Lesson document */
  create?: Maybe<LessonCreateInput>;
  /** Connect one existing Lesson document */
  connect?: Maybe<LessonWhereUniqueInput>;
};

/** An edge in a connection. */
export type LessonEdge = {
  __typename?: 'LessonEdge';
  /** The item at the end of the edge. */
  node: Lesson;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type LessonManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LessonWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  sublessons_every?: Maybe<SublessonWhereInput>;
  sublessons_some?: Maybe<SublessonWhereInput>;
  sublessons_none?: Maybe<SublessonWhereInput>;
};

export enum LessonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type LessonUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  sublessons?: Maybe<SublessonUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<LessonUpdateLocalizationsInput>;
};

export type LessonUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type LessonUpdateLocalizationInput = {
  data: LessonUpdateLocalizationDataInput;
  locale: Locale;
};

export type LessonUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<LessonCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<LessonUpdateLocalizationInput>>;
  upsert?: Maybe<Array<LessonUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type LessonUpdateManyInlineInput = {
  /** Create and connect multiple Lesson documents */
  create?: Maybe<Array<LessonCreateInput>>;
  /** Connect multiple existing Lesson documents */
  connect?: Maybe<Array<LessonConnectInput>>;
  /** Override currently-connected documents with multiple existing Lesson documents */
  set?: Maybe<Array<LessonWhereUniqueInput>>;
  /** Update multiple Lesson documents */
  update?: Maybe<Array<LessonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Lesson documents */
  upsert?: Maybe<Array<LessonUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Lesson documents */
  disconnect?: Maybe<Array<LessonWhereUniqueInput>>;
  /** Delete multiple Lesson documents */
  delete?: Maybe<Array<LessonWhereUniqueInput>>;
};

export type LessonUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<LessonUpdateManyLocalizationsInput>;
};

export type LessonUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
};

export type LessonUpdateManyLocalizationInput = {
  data: LessonUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type LessonUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<LessonUpdateManyLocalizationInput>>;
};

export type LessonUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: LessonWhereInput;
  /** Update many input */
  data: LessonUpdateManyInput;
};

export type LessonUpdateOneInlineInput = {
  /** Create and connect one Lesson document */
  create?: Maybe<LessonCreateInput>;
  /** Update single Lesson document */
  update?: Maybe<LessonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Lesson document */
  upsert?: Maybe<LessonUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Lesson document */
  connect?: Maybe<LessonWhereUniqueInput>;
  /** Disconnect currently connected Lesson document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Lesson document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type LessonUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LessonWhereUniqueInput;
  /** Document to update */
  data: LessonUpdateInput;
};

export type LessonUpsertInput = {
  /** Create document if it didn't exist */
  create: LessonCreateInput;
  /** Update document if it exists */
  update: LessonUpdateInput;
};

export type LessonUpsertLocalizationInput = {
  update: LessonUpdateLocalizationDataInput;
  create: LessonCreateLocalizationDataInput;
  locale: Locale;
};

export type LessonUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: LessonWhereUniqueInput;
  /** Upsert data */
  data: LessonUpsertInput;
};

/** Identifies documents */
export type LessonWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LessonWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  sublessons_every?: Maybe<SublessonWhereInput>;
  sublessons_some?: Maybe<SublessonWhereInput>;
  sublessons_none?: Maybe<SublessonWhereInput>;
};

/** References Lesson record uniquely */
export type LessonWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create one questionChallenge */
  createQuestionChallenge?: Maybe<QuestionChallenge>;
  /** Update one questionChallenge */
  updateQuestionChallenge?: Maybe<QuestionChallenge>;
  /** Delete one questionChallenge from _all_ existing stages. Returns deleted document. */
  deleteQuestionChallenge?: Maybe<QuestionChallenge>;
  /** Upsert one questionChallenge */
  upsertQuestionChallenge?: Maybe<QuestionChallenge>;
  /** Publish one questionChallenge */
  publishQuestionChallenge?: Maybe<QuestionChallenge>;
  /** Unpublish one questionChallenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishQuestionChallenge?: Maybe<QuestionChallenge>;
  /** Update many QuestionChallenge documents */
  updateManyQuestionChallengesConnection: QuestionChallengeConnection;
  /** Delete many QuestionChallenge documents, return deleted documents */
  deleteManyQuestionChallengesConnection: QuestionChallengeConnection;
  /** Publish many QuestionChallenge documents */
  publishManyQuestionChallengesConnection: QuestionChallengeConnection;
  /** Find many QuestionChallenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyQuestionChallengesConnection: QuestionChallengeConnection;
  /**
   * Update many questionChallenges
   * @deprecated Please use the new paginated many mutation (updateManyQuestionChallengesConnection)
   */
  updateManyQuestionChallenges: BatchPayload;
  /**
   * Delete many QuestionChallenge documents
   * @deprecated Please use the new paginated many mutation (deleteManyQuestionChallengesConnection)
   */
  deleteManyQuestionChallenges: BatchPayload;
  /**
   * Publish many QuestionChallenge documents
   * @deprecated Please use the new paginated many mutation (publishManyQuestionChallengesConnection)
   */
  publishManyQuestionChallenges: BatchPayload;
  /**
   * Unpublish many QuestionChallenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManyQuestionChallengesConnection)
   */
  unpublishManyQuestionChallenges: BatchPayload;
  /** Create one codeChallengeCriteria */
  createCodeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Update one codeChallengeCriteria */
  updateCodeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Delete one codeChallengeCriteria from _all_ existing stages. Returns deleted document. */
  deleteCodeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Upsert one codeChallengeCriteria */
  upsertCodeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Publish one codeChallengeCriteria */
  publishCodeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Unpublish one codeChallengeCriteria from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCodeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Update many CodeChallengeCriteria documents */
  updateManyCodeChallengeCriteriasConnection: CodeChallengeCriteriaConnection;
  /** Delete many CodeChallengeCriteria documents, return deleted documents */
  deleteManyCodeChallengeCriteriasConnection: CodeChallengeCriteriaConnection;
  /** Publish many CodeChallengeCriteria documents */
  publishManyCodeChallengeCriteriasConnection: CodeChallengeCriteriaConnection;
  /** Find many CodeChallengeCriteria documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCodeChallengeCriteriasConnection: CodeChallengeCriteriaConnection;
  /**
   * Update many codeChallengeCriterias
   * @deprecated Please use the new paginated many mutation (updateManyCodeChallengeCriteriasConnection)
   */
  updateManyCodeChallengeCriterias: BatchPayload;
  /**
   * Delete many CodeChallengeCriteria documents
   * @deprecated Please use the new paginated many mutation (deleteManyCodeChallengeCriteriasConnection)
   */
  deleteManyCodeChallengeCriterias: BatchPayload;
  /**
   * Publish many CodeChallengeCriteria documents
   * @deprecated Please use the new paginated many mutation (publishManyCodeChallengeCriteriasConnection)
   */
  publishManyCodeChallengeCriterias: BatchPayload;
  /**
   * Unpublish many CodeChallengeCriteria documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCodeChallengeCriteriasConnection)
   */
  unpublishManyCodeChallengeCriterias: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one lesson */
  createLesson?: Maybe<Lesson>;
  /** Update one lesson */
  updateLesson?: Maybe<Lesson>;
  /** Delete one lesson from _all_ existing stages. Returns deleted document. */
  deleteLesson?: Maybe<Lesson>;
  /** Upsert one lesson */
  upsertLesson?: Maybe<Lesson>;
  /** Publish one lesson */
  publishLesson?: Maybe<Lesson>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLesson?: Maybe<Lesson>;
  /** Update many Lesson documents */
  updateManyLessonsConnection: LessonConnection;
  /** Delete many Lesson documents, return deleted documents */
  deleteManyLessonsConnection: LessonConnection;
  /** Publish many Lesson documents */
  publishManyLessonsConnection: LessonConnection;
  /** Find many Lesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsConnection: LessonConnection;
  /**
   * Update many lessons
   * @deprecated Please use the new paginated many mutation (updateManyLessonsConnection)
   */
  updateManyLessons: BatchPayload;
  /**
   * Delete many Lesson documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsConnection)
   */
  deleteManyLessons: BatchPayload;
  /**
   * Publish many Lesson documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsConnection)
   */
  publishManyLessons: BatchPayload;
  /**
   * Unpublish many Lesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsConnection)
   */
  unpublishManyLessons: BatchPayload;
  /** Create one sublesson */
  createSublesson?: Maybe<Sublesson>;
  /** Update one sublesson */
  updateSublesson?: Maybe<Sublesson>;
  /** Delete one sublesson from _all_ existing stages. Returns deleted document. */
  deleteSublesson?: Maybe<Sublesson>;
  /** Upsert one sublesson */
  upsertSublesson?: Maybe<Sublesson>;
  /** Publish one sublesson */
  publishSublesson?: Maybe<Sublesson>;
  /** Unpublish one sublesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSublesson?: Maybe<Sublesson>;
  /** Update many Sublesson documents */
  updateManySublessonsConnection: SublessonConnection;
  /** Delete many Sublesson documents, return deleted documents */
  deleteManySublessonsConnection: SublessonConnection;
  /** Publish many Sublesson documents */
  publishManySublessonsConnection: SublessonConnection;
  /** Find many Sublesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySublessonsConnection: SublessonConnection;
  /**
   * Update many sublessons
   * @deprecated Please use the new paginated many mutation (updateManySublessonsConnection)
   */
  updateManySublessons: BatchPayload;
  /**
   * Delete many Sublesson documents
   * @deprecated Please use the new paginated many mutation (deleteManySublessonsConnection)
   */
  deleteManySublessons: BatchPayload;
  /**
   * Publish many Sublesson documents
   * @deprecated Please use the new paginated many mutation (publishManySublessonsConnection)
   */
  publishManySublessons: BatchPayload;
  /**
   * Unpublish many Sublesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManySublessonsConnection)
   */
  unpublishManySublessons: BatchPayload;
  /** Create one skill */
  createSkill?: Maybe<Skill>;
  /** Update one skill */
  updateSkill?: Maybe<Skill>;
  /** Delete one skill from _all_ existing stages. Returns deleted document. */
  deleteSkill?: Maybe<Skill>;
  /** Upsert one skill */
  upsertSkill?: Maybe<Skill>;
  /** Publish one skill */
  publishSkill?: Maybe<Skill>;
  /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSkill?: Maybe<Skill>;
  /** Update many Skill documents */
  updateManySkillsConnection: SkillConnection;
  /** Delete many Skill documents, return deleted documents */
  deleteManySkillsConnection: SkillConnection;
  /** Publish many Skill documents */
  publishManySkillsConnection: SkillConnection;
  /** Find many Skill documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySkillsConnection: SkillConnection;
  /**
   * Update many skills
   * @deprecated Please use the new paginated many mutation (updateManySkillsConnection)
   */
  updateManySkills: BatchPayload;
  /**
   * Delete many Skill documents
   * @deprecated Please use the new paginated many mutation (deleteManySkillsConnection)
   */
  deleteManySkills: BatchPayload;
  /**
   * Publish many Skill documents
   * @deprecated Please use the new paginated many mutation (publishManySkillsConnection)
   */
  publishManySkills: BatchPayload;
  /**
   * Unpublish many Skill documents
   * @deprecated Please use the new paginated many mutation (unpublishManySkillsConnection)
   */
  unpublishManySkills: BatchPayload;
  /** Create one codeChallenge */
  createCodeChallenge?: Maybe<CodeChallenge>;
  /** Update one codeChallenge */
  updateCodeChallenge?: Maybe<CodeChallenge>;
  /** Delete one codeChallenge from _all_ existing stages. Returns deleted document. */
  deleteCodeChallenge?: Maybe<CodeChallenge>;
  /** Upsert one codeChallenge */
  upsertCodeChallenge?: Maybe<CodeChallenge>;
  /** Publish one codeChallenge */
  publishCodeChallenge?: Maybe<CodeChallenge>;
  /** Unpublish one codeChallenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCodeChallenge?: Maybe<CodeChallenge>;
  /** Update many CodeChallenge documents */
  updateManyCodeChallengesConnection: CodeChallengeConnection;
  /** Delete many CodeChallenge documents, return deleted documents */
  deleteManyCodeChallengesConnection: CodeChallengeConnection;
  /** Publish many CodeChallenge documents */
  publishManyCodeChallengesConnection: CodeChallengeConnection;
  /** Find many CodeChallenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCodeChallengesConnection: CodeChallengeConnection;
  /**
   * Update many codeChallenges
   * @deprecated Please use the new paginated many mutation (updateManyCodeChallengesConnection)
   */
  updateManyCodeChallenges: BatchPayload;
  /**
   * Delete many CodeChallenge documents
   * @deprecated Please use the new paginated many mutation (deleteManyCodeChallengesConnection)
   */
  deleteManyCodeChallenges: BatchPayload;
  /**
   * Publish many CodeChallenge documents
   * @deprecated Please use the new paginated many mutation (publishManyCodeChallengesConnection)
   */
  publishManyCodeChallenges: BatchPayload;
  /**
   * Unpublish many CodeChallenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCodeChallengesConnection)
   */
  unpublishManyCodeChallenges: BatchPayload;
};


export type MutationCreateQuestionChallengeArgs = {
  data: QuestionChallengeCreateInput;
};


export type MutationUpdateQuestionChallengeArgs = {
  where: QuestionChallengeWhereUniqueInput;
  data: QuestionChallengeUpdateInput;
};


export type MutationDeleteQuestionChallengeArgs = {
  where: QuestionChallengeWhereUniqueInput;
};


export type MutationUpsertQuestionChallengeArgs = {
  where: QuestionChallengeWhereUniqueInput;
  upsert: QuestionChallengeUpsertInput;
};


export type MutationPublishQuestionChallengeArgs = {
  where: QuestionChallengeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishQuestionChallengeArgs = {
  where: QuestionChallengeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyQuestionChallengesConnectionArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  data: QuestionChallengeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyQuestionChallengesConnectionArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyQuestionChallengesConnectionArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyQuestionChallengesConnectionArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyQuestionChallengesArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  data: QuestionChallengeUpdateManyInput;
};


export type MutationDeleteManyQuestionChallengesArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
};


export type MutationPublishManyQuestionChallengesArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyQuestionChallengesArgs = {
  where?: Maybe<QuestionChallengeManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateCodeChallengeCriteriaArgs = {
  data: CodeChallengeCriteriaCreateInput;
};


export type MutationUpdateCodeChallengeCriteriaArgs = {
  where: CodeChallengeCriteriaWhereUniqueInput;
  data: CodeChallengeCriteriaUpdateInput;
};


export type MutationDeleteCodeChallengeCriteriaArgs = {
  where: CodeChallengeCriteriaWhereUniqueInput;
};


export type MutationUpsertCodeChallengeCriteriaArgs = {
  where: CodeChallengeCriteriaWhereUniqueInput;
  upsert: CodeChallengeCriteriaUpsertInput;
};


export type MutationPublishCodeChallengeCriteriaArgs = {
  where: CodeChallengeCriteriaWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishCodeChallengeCriteriaArgs = {
  where: CodeChallengeCriteriaWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCodeChallengeCriteriasConnectionArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  data: CodeChallengeCriteriaUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCodeChallengeCriteriasConnectionArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCodeChallengeCriteriasConnectionArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCodeChallengeCriteriasConnectionArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyCodeChallengeCriteriasArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  data: CodeChallengeCriteriaUpdateManyInput;
};


export type MutationDeleteManyCodeChallengeCriteriasArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
};


export type MutationPublishManyCodeChallengeCriteriasArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCodeChallengeCriteriasArgs = {
  where?: Maybe<CodeChallengeCriteriaManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateLessonArgs = {
  data: LessonCreateInput;
};


export type MutationUpdateLessonArgs = {
  where: LessonWhereUniqueInput;
  data: LessonUpdateInput;
};


export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type MutationUpsertLessonArgs = {
  where: LessonWhereUniqueInput;
  upsert: LessonUpsertInput;
};


export type MutationPublishLessonArgs = {
  where: LessonWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishLessonArgs = {
  where: LessonWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyLessonsConnectionArgs = {
  where?: Maybe<LessonManyWhereInput>;
  data: LessonUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyLessonsConnectionArgs = {
  where?: Maybe<LessonManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyLessonsConnectionArgs = {
  where?: Maybe<LessonManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyLessonsConnectionArgs = {
  where?: Maybe<LessonManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
  data: LessonUpdateManyInput;
};


export type MutationDeleteManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
};


export type MutationPublishManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateSublessonArgs = {
  data: SublessonCreateInput;
};


export type MutationUpdateSublessonArgs = {
  where: SublessonWhereUniqueInput;
  data: SublessonUpdateInput;
};


export type MutationDeleteSublessonArgs = {
  where: SublessonWhereUniqueInput;
};


export type MutationUpsertSublessonArgs = {
  where: SublessonWhereUniqueInput;
  upsert: SublessonUpsertInput;
};


export type MutationPublishSublessonArgs = {
  where: SublessonWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishSublessonArgs = {
  where: SublessonWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySublessonsConnectionArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  data: SublessonUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySublessonsConnectionArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySublessonsConnectionArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySublessonsConnectionArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  data: SublessonUpdateManyInput;
};


export type MutationDeleteManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
};


export type MutationPublishManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationUpdateSkillArgs = {
  where: SkillWhereUniqueInput;
  data: SkillUpdateInput;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationUpsertSkillArgs = {
  where: SkillWhereUniqueInput;
  upsert: SkillUpsertInput;
};


export type MutationPublishSkillArgs = {
  where: SkillWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSkillArgs = {
  where: SkillWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  data: SkillUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  data: SkillUpdateManyInput;
};


export type MutationDeleteManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
};


export type MutationPublishManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateCodeChallengeArgs = {
  data: CodeChallengeCreateInput;
};


export type MutationUpdateCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  data: CodeChallengeUpdateInput;
};


export type MutationDeleteCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
};


export type MutationUpsertCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  upsert: CodeChallengeUpsertInput;
};


export type MutationPublishCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  data: CodeChallengeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  data: CodeChallengeUpdateManyInput;
};


export type MutationDeleteManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
};


export type MutationPublishManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple questionChallenges */
  questionChallenges: Array<QuestionChallenge>;
  /** Retrieve a single questionChallenge */
  questionChallenge?: Maybe<QuestionChallenge>;
  /** Retrieve multiple questionChallenges using the Relay connection interface */
  questionChallengesConnection: QuestionChallengeConnection;
  /** Retrieve document version */
  questionChallengeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple codeChallengeCriterias */
  codeChallengeCriterias: Array<CodeChallengeCriteria>;
  /** Retrieve a single codeChallengeCriteria */
  codeChallengeCriteria?: Maybe<CodeChallengeCriteria>;
  /** Retrieve multiple codeChallengeCriterias using the Relay connection interface */
  codeChallengeCriteriasConnection: CodeChallengeCriteriaConnection;
  /** Retrieve document version */
  codeChallengeCriteriaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple lessons */
  lessons: Array<Lesson>;
  /** Retrieve a single lesson */
  lesson?: Maybe<Lesson>;
  /** Retrieve multiple lessons using the Relay connection interface */
  lessonsConnection: LessonConnection;
  /** Retrieve document version */
  lessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sublessons */
  sublessons: Array<Sublesson>;
  /** Retrieve a single sublesson */
  sublesson?: Maybe<Sublesson>;
  /** Retrieve multiple sublessons using the Relay connection interface */
  sublessonsConnection: SublessonConnection;
  /** Retrieve document version */
  sublessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple skills */
  skills: Array<Skill>;
  /** Retrieve a single skill */
  skill?: Maybe<Skill>;
  /** Retrieve multiple skills using the Relay connection interface */
  skillsConnection: SkillConnection;
  /** Retrieve document version */
  skillVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple codeChallenges */
  codeChallenges: Array<CodeChallenge>;
  /** Retrieve a single codeChallenge */
  codeChallenge?: Maybe<CodeChallenge>;
  /** Retrieve multiple codeChallenges using the Relay connection interface */
  codeChallengesConnection: CodeChallengeConnection;
  /** Retrieve document version */
  codeChallengeVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryQuestionChallengesArgs = {
  where?: Maybe<QuestionChallengeWhereInput>;
  orderBy?: Maybe<QuestionChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryQuestionChallengeArgs = {
  where: QuestionChallengeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryQuestionChallengesConnectionArgs = {
  where?: Maybe<QuestionChallengeWhereInput>;
  orderBy?: Maybe<QuestionChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryQuestionChallengeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCodeChallengeCriteriasArgs = {
  where?: Maybe<CodeChallengeCriteriaWhereInput>;
  orderBy?: Maybe<CodeChallengeCriteriaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeCriteriaArgs = {
  where: CodeChallengeCriteriaWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeCriteriasConnectionArgs = {
  where?: Maybe<CodeChallengeCriteriaWhereInput>;
  orderBy?: Maybe<CodeChallengeCriteriaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeCriteriaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLessonsArgs = {
  where?: Maybe<LessonWhereInput>;
  orderBy?: Maybe<LessonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonArgs = {
  where: LessonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonsConnectionArgs = {
  where?: Maybe<LessonWhereInput>;
  orderBy?: Maybe<LessonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySublessonsArgs = {
  where?: Maybe<SublessonWhereInput>;
  orderBy?: Maybe<SublessonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySublessonArgs = {
  where: SublessonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySublessonsConnectionArgs = {
  where?: Maybe<SublessonWhereInput>;
  orderBy?: Maybe<SublessonOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySublessonVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySkillsArgs = {
  where?: Maybe<SkillWhereInput>;
  orderBy?: Maybe<SkillOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillsConnectionArgs = {
  where?: Maybe<SkillWhereInput>;
  orderBy?: Maybe<SkillOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCodeChallengesArgs = {
  where?: Maybe<CodeChallengeWhereInput>;
  orderBy?: Maybe<CodeChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeWhereInput>;
  orderBy?: Maybe<CodeChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeVersionArgs = {
  where: VersionWhereInput;
};

export type QuestionChallenge = Node & {
  __typename?: 'QuestionChallenge';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<QuestionChallenge>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of QuestionChallenge versions */
  history: Array<Version>;
};


export type QuestionChallengeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type QuestionChallengeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuestionChallengeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuestionChallengePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuestionChallengeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type QuestionChallengeConnectInput = {
  /** Document to connect */
  where: QuestionChallengeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type QuestionChallengeConnection = {
  __typename?: 'QuestionChallengeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<QuestionChallengeEdge>;
  aggregate: Aggregate;
};

export type QuestionChallengeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing QuestionChallenge documents */
  create?: Maybe<Array<QuestionChallengeCreateInput>>;
  /** Connect multiple existing QuestionChallenge documents */
  connect?: Maybe<Array<QuestionChallengeWhereUniqueInput>>;
};

export type QuestionChallengeCreateOneInlineInput = {
  /** Create and connect one QuestionChallenge document */
  create?: Maybe<QuestionChallengeCreateInput>;
  /** Connect one existing QuestionChallenge document */
  connect?: Maybe<QuestionChallengeWhereUniqueInput>;
};

/** An edge in a connection. */
export type QuestionChallengeEdge = {
  __typename?: 'QuestionChallengeEdge';
  /** The item at the end of the edge. */
  node: QuestionChallenge;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type QuestionChallengeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<QuestionChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<QuestionChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<QuestionChallengeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum QuestionChallengeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type QuestionChallengeUpdateInput = {
  /** No fields in update input */
  _?: Maybe<Scalars['String']>;
};

export type QuestionChallengeUpdateManyInlineInput = {
  /** Create and connect multiple QuestionChallenge documents */
  create?: Maybe<Array<QuestionChallengeCreateInput>>;
  /** Connect multiple existing QuestionChallenge documents */
  connect?: Maybe<Array<QuestionChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing QuestionChallenge documents */
  set?: Maybe<Array<QuestionChallengeWhereUniqueInput>>;
  /** Update multiple QuestionChallenge documents */
  update?: Maybe<Array<QuestionChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple QuestionChallenge documents */
  upsert?: Maybe<Array<QuestionChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple QuestionChallenge documents */
  disconnect?: Maybe<Array<QuestionChallengeWhereUniqueInput>>;
  /** Delete multiple QuestionChallenge documents */
  delete?: Maybe<Array<QuestionChallengeWhereUniqueInput>>;
};

export type QuestionChallengeUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type QuestionChallengeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: QuestionChallengeWhereInput;
  /** Update many input */
  data: QuestionChallengeUpdateManyInput;
};

export type QuestionChallengeUpdateOneInlineInput = {
  /** Create and connect one QuestionChallenge document */
  create?: Maybe<QuestionChallengeCreateInput>;
  /** Update single QuestionChallenge document */
  update?: Maybe<QuestionChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single QuestionChallenge document */
  upsert?: Maybe<QuestionChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing QuestionChallenge document */
  connect?: Maybe<QuestionChallengeWhereUniqueInput>;
  /** Disconnect currently connected QuestionChallenge document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected QuestionChallenge document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type QuestionChallengeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: QuestionChallengeWhereUniqueInput;
  /** Document to update */
  data: QuestionChallengeUpdateInput;
};

export type QuestionChallengeUpsertInput = {
  /** Create document if it didn't exist */
  create: QuestionChallengeCreateInput;
  /** Update document if it exists */
  update: QuestionChallengeUpdateInput;
};

export type QuestionChallengeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: QuestionChallengeWhereUniqueInput;
  /** Upsert data */
  data: QuestionChallengeUpsertInput;
};

/** Identifies documents */
export type QuestionChallengeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<QuestionChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<QuestionChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<QuestionChallengeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References QuestionChallenge record uniquely */
export type QuestionChallengeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type Skill = Node & {
  __typename?: 'Skill';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Skill>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Skill versions */
  history: Array<Version>;
};


export type SkillDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SkillCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SkillUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SkillPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SkillHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SkillConnectInput = {
  /** Document to connect */
  where: SkillWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SkillConnection = {
  __typename?: 'SkillConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SkillEdge>;
  aggregate: Aggregate;
};

export type SkillCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type SkillCreateManyInlineInput = {
  /** Create and connect multiple existing Skill documents */
  create?: Maybe<Array<SkillCreateInput>>;
  /** Connect multiple existing Skill documents */
  connect?: Maybe<Array<SkillWhereUniqueInput>>;
};

export type SkillCreateOneInlineInput = {
  /** Create and connect one Skill document */
  create?: Maybe<SkillCreateInput>;
  /** Connect one existing Skill document */
  connect?: Maybe<SkillWhereUniqueInput>;
};

/** An edge in a connection. */
export type SkillEdge = {
  __typename?: 'SkillEdge';
  /** The item at the end of the edge. */
  node: Skill;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SkillManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SkillWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum SkillOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type SkillUpdateInput = {
  name?: Maybe<Scalars['String']>;
};

export type SkillUpdateManyInlineInput = {
  /** Create and connect multiple Skill documents */
  create?: Maybe<Array<SkillCreateInput>>;
  /** Connect multiple existing Skill documents */
  connect?: Maybe<Array<SkillConnectInput>>;
  /** Override currently-connected documents with multiple existing Skill documents */
  set?: Maybe<Array<SkillWhereUniqueInput>>;
  /** Update multiple Skill documents */
  update?: Maybe<Array<SkillUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Skill documents */
  upsert?: Maybe<Array<SkillUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Skill documents */
  disconnect?: Maybe<Array<SkillWhereUniqueInput>>;
  /** Delete multiple Skill documents */
  delete?: Maybe<Array<SkillWhereUniqueInput>>;
};

export type SkillUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type SkillUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SkillWhereInput;
  /** Update many input */
  data: SkillUpdateManyInput;
};

export type SkillUpdateOneInlineInput = {
  /** Create and connect one Skill document */
  create?: Maybe<SkillCreateInput>;
  /** Update single Skill document */
  update?: Maybe<SkillUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Skill document */
  upsert?: Maybe<SkillUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Skill document */
  connect?: Maybe<SkillWhereUniqueInput>;
  /** Disconnect currently connected Skill document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Skill document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SkillUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SkillWhereUniqueInput;
  /** Document to update */
  data: SkillUpdateInput;
};

export type SkillUpsertInput = {
  /** Create document if it didn't exist */
  create: SkillCreateInput;
  /** Update document if it exists */
  update: SkillUpdateInput;
};

export type SkillUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SkillWhereUniqueInput;
  /** Upsert data */
  data: SkillUpsertInput;
};

/** Identifies documents */
export type SkillWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SkillWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SkillWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SkillWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Skill record uniquely */
export type SkillWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Sublesson = Node & {
  __typename?: 'Sublesson';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Sublesson>;
  /** Get the document in other stages */
  documentInStages: Array<Sublesson>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  lesson?: Maybe<Lesson>;
  codeChallenges: Array<CodeChallenge>;
  /** List of Sublesson versions */
  history: Array<Version>;
};


export type SublessonLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type SublessonDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SublessonCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SublessonUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SublessonPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SublessonCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SublessonUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SublessonPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SublessonLessonArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SublessonCodeChallengesArgs = {
  where?: Maybe<CodeChallengeWhereInput>;
  orderBy?: Maybe<CodeChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type SublessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SublessonConnectInput = {
  /** Document to connect */
  where: SublessonWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SublessonConnection = {
  __typename?: 'SublessonConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SublessonEdge>;
  aggregate: Aggregate;
};

export type SublessonCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  /** description input for default locale (en) */
  description: Scalars['String'];
  lesson?: Maybe<LessonCreateOneInlineInput>;
  codeChallenges?: Maybe<CodeChallengeCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<SublessonCreateLocalizationsInput>;
};

export type SublessonCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type SublessonCreateLocalizationInput = {
  /** Localization input */
  data: SublessonCreateLocalizationDataInput;
  locale: Locale;
};

export type SublessonCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<SublessonCreateLocalizationInput>>;
};

export type SublessonCreateManyInlineInput = {
  /** Create and connect multiple existing Sublesson documents */
  create?: Maybe<Array<SublessonCreateInput>>;
  /** Connect multiple existing Sublesson documents */
  connect?: Maybe<Array<SublessonWhereUniqueInput>>;
};

export type SublessonCreateOneInlineInput = {
  /** Create and connect one Sublesson document */
  create?: Maybe<SublessonCreateInput>;
  /** Connect one existing Sublesson document */
  connect?: Maybe<SublessonWhereUniqueInput>;
};

/** An edge in a connection. */
export type SublessonEdge = {
  __typename?: 'SublessonEdge';
  /** The item at the end of the edge. */
  node: Sublesson;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type SublessonManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SublessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SublessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SublessonWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  lesson?: Maybe<LessonWhereInput>;
  codeChallenges_every?: Maybe<CodeChallengeWhereInput>;
  codeChallenges_some?: Maybe<CodeChallengeWhereInput>;
  codeChallenges_none?: Maybe<CodeChallengeWhereInput>;
};

export enum SublessonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export type SublessonUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  lesson?: Maybe<LessonUpdateOneInlineInput>;
  codeChallenges?: Maybe<CodeChallengeUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<SublessonUpdateLocalizationsInput>;
};

export type SublessonUpdateLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SublessonUpdateLocalizationInput = {
  data: SublessonUpdateLocalizationDataInput;
  locale: Locale;
};

export type SublessonUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<SublessonCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<SublessonUpdateLocalizationInput>>;
  upsert?: Maybe<Array<SublessonUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type SublessonUpdateManyInlineInput = {
  /** Create and connect multiple Sublesson documents */
  create?: Maybe<Array<SublessonCreateInput>>;
  /** Connect multiple existing Sublesson documents */
  connect?: Maybe<Array<SublessonConnectInput>>;
  /** Override currently-connected documents with multiple existing Sublesson documents */
  set?: Maybe<Array<SublessonWhereUniqueInput>>;
  /** Update multiple Sublesson documents */
  update?: Maybe<Array<SublessonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Sublesson documents */
  upsert?: Maybe<Array<SublessonUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Sublesson documents */
  disconnect?: Maybe<Array<SublessonWhereUniqueInput>>;
  /** Delete multiple Sublesson documents */
  delete?: Maybe<Array<SublessonWhereUniqueInput>>;
};

export type SublessonUpdateManyInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  /** description input for default locale (en) */
  description?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<SublessonUpdateManyLocalizationsInput>;
};

export type SublessonUpdateManyLocalizationDataInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SublessonUpdateManyLocalizationInput = {
  data: SublessonUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SublessonUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<SublessonUpdateManyLocalizationInput>>;
};

export type SublessonUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SublessonWhereInput;
  /** Update many input */
  data: SublessonUpdateManyInput;
};

export type SublessonUpdateOneInlineInput = {
  /** Create and connect one Sublesson document */
  create?: Maybe<SublessonCreateInput>;
  /** Update single Sublesson document */
  update?: Maybe<SublessonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Sublesson document */
  upsert?: Maybe<SublessonUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Sublesson document */
  connect?: Maybe<SublessonWhereUniqueInput>;
  /** Disconnect currently connected Sublesson document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Sublesson document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SublessonUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SublessonWhereUniqueInput;
  /** Document to update */
  data: SublessonUpdateInput;
};

export type SublessonUpsertInput = {
  /** Create document if it didn't exist */
  create: SublessonCreateInput;
  /** Update document if it exists */
  update: SublessonUpdateInput;
};

export type SublessonUpsertLocalizationInput = {
  update: SublessonUpdateLocalizationDataInput;
  create: SublessonCreateLocalizationDataInput;
  locale: Locale;
};

export type SublessonUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SublessonWhereUniqueInput;
  /** Upsert data */
  data: SublessonUpsertInput;
};

/** Identifies documents */
export type SublessonWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SublessonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SublessonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SublessonWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  lesson?: Maybe<LessonWhereInput>;
  codeChallenges_every?: Maybe<CodeChallengeWhereInput>;
  codeChallenges_some?: Maybe<CodeChallengeWhereInput>;
  codeChallenges_none?: Maybe<CodeChallengeWhereInput>;
};

/** References Sublesson record uniquely */
export type SublessonWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type GetExampleDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExampleDataQuery = (
  { __typename?: 'Query' }
  & { lessons: Array<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'name'>
    & { sublessons: Array<(
      { __typename?: 'Sublesson' }
      & Pick<Sublesson, 'name'>
    )> }
  )> }
);


export const GetExampleDataDocument = gql`
    query getExampleData {
  lessons {
    name
    sublessons {
      name
    }
  }
}
    `;
export type GetExampleDataQueryResult = Apollo.QueryResult<GetExampleDataQuery, GetExampleDataQueryVariables>;