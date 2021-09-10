import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CodeChallenge>;
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
  prompt: Scalars['String'];
  startingCode?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** These are run to determine if the user has passed the challenge */
  codeChallengeTests: Array<CodeChallengeTest>;
  sublessonChallenge?: Maybe<SublessonChallenge>;
  /** The skills required to know how to pass this code challenge */
  skills: Array<Skill>;
  /** List of CodeChallenge versions */
  history: Array<Version>;
};


export type CodeChallengeLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type CodeChallengeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CodeChallengeCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CodeChallengeUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CodeChallengePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
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


export type CodeChallengeCodeChallengeTestsArgs = {
  where?: Maybe<CodeChallengeTestWhereInput>;
  orderBy?: Maybe<CodeChallengeTestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeSublessonChallengeArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CodeChallengeSkillsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  /** prompt input for default locale (en) */
  prompt: Scalars['String'];
  startingCode?: Maybe<Scalars['String']>;
  codeChallengeTests?: Maybe<CodeChallengeTestCreateManyInlineInput>;
  sublessonChallenge?: Maybe<SublessonChallengeCreateOneInlineInput>;
  skills?: Maybe<SkillCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CodeChallengeCreateLocalizationsInput>;
};

export type CodeChallengeCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  prompt: Scalars['String'];
};

export type CodeChallengeCreateLocalizationInput = {
  /** Localization input */
  data: CodeChallengeCreateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<CodeChallengeCreateLocalizationInput>>;
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
  startingCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  startingCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  startingCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  startingCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  startingCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  startingCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  startingCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  startingCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  startingCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  startingCode_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  codeChallengeTests_every?: Maybe<CodeChallengeTestWhereInput>;
  codeChallengeTests_some?: Maybe<CodeChallengeTestWhereInput>;
  codeChallengeTests_none?: Maybe<CodeChallengeTestWhereInput>;
  sublessonChallenge?: Maybe<SublessonChallengeWhereInput>;
  skills_every?: Maybe<SkillWhereInput>;
  skills_some?: Maybe<SkillWhereInput>;
  skills_none?: Maybe<SkillWhereInput>;
};

export enum CodeChallengeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PromptAsc = 'prompt_ASC',
  PromptDesc = 'prompt_DESC',
  StartingCodeAsc = 'startingCode_ASC',
  StartingCodeDesc = 'startingCode_DESC'
}

/** The criteria for the user to pass the code challenge */
export type CodeChallengeTest = Node & {
  __typename?: 'CodeChallengeTest';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CodeChallengeTest>;
  /** Get the document in other stages */
  documentInStages: Array<CodeChallengeTest>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
  /** Determines if the test passes or failes */
  internalTest: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of CodeChallengeTest versions */
  history: Array<Version>;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The criteria for the user to pass the code challenge */
export type CodeChallengeTestHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CodeChallengeTestConnectInput = {
  /** Document to connect */
  where: CodeChallengeTestWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CodeChallengeTestConnection = {
  __typename?: 'CodeChallengeTestConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CodeChallengeTestEdge>;
  aggregate: Aggregate;
};

export type CodeChallengeTestCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** label input for default locale (en) */
  label: Scalars['String'];
  internalTest: Scalars['String'];
  ckt7jf2082cg901zbbwc7346u?: Maybe<CodeChallengeCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<CodeChallengeTestCreateLocalizationsInput>;
};

export type CodeChallengeTestCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
};

export type CodeChallengeTestCreateLocalizationInput = {
  /** Localization input */
  data: CodeChallengeTestCreateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeTestCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<CodeChallengeTestCreateLocalizationInput>>;
};

export type CodeChallengeTestCreateManyInlineInput = {
  /** Create and connect multiple existing CodeChallengeTest documents */
  create?: Maybe<Array<CodeChallengeTestCreateInput>>;
  /** Connect multiple existing CodeChallengeTest documents */
  connect?: Maybe<Array<CodeChallengeTestWhereUniqueInput>>;
};

export type CodeChallengeTestCreateOneInlineInput = {
  /** Create and connect one CodeChallengeTest document */
  create?: Maybe<CodeChallengeTestCreateInput>;
  /** Connect one existing CodeChallengeTest document */
  connect?: Maybe<CodeChallengeTestWhereUniqueInput>;
};

/** An edge in a connection. */
export type CodeChallengeTestEdge = {
  __typename?: 'CodeChallengeTestEdge';
  /** The item at the end of the edge. */
  node: CodeChallengeTest;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CodeChallengeTestManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CodeChallengeTestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CodeChallengeTestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CodeChallengeTestWhereInput>>;
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
  internalTest?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  internalTest_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  internalTest_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  internalTest_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  internalTest_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  internalTest_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  internalTest_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  internalTest_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  internalTest_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  internalTest_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum CodeChallengeTestOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  InternalTestAsc = 'internalTest_ASC',
  InternalTestDesc = 'internalTest_DESC'
}

export type CodeChallengeTestUpdateInput = {
  /** label input for default locale (en) */
  label?: Maybe<Scalars['String']>;
  internalTest?: Maybe<Scalars['String']>;
  ckt7jf2082cg901zbbwc7346u?: Maybe<CodeChallengeUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<CodeChallengeTestUpdateLocalizationsInput>;
};

export type CodeChallengeTestUpdateLocalizationDataInput = {
  label?: Maybe<Scalars['String']>;
};

export type CodeChallengeTestUpdateLocalizationInput = {
  data: CodeChallengeTestUpdateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeTestUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<CodeChallengeTestCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<CodeChallengeTestUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CodeChallengeTestUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type CodeChallengeTestUpdateManyInlineInput = {
  /** Create and connect multiple CodeChallengeTest documents */
  create?: Maybe<Array<CodeChallengeTestCreateInput>>;
  /** Connect multiple existing CodeChallengeTest documents */
  connect?: Maybe<Array<CodeChallengeTestConnectInput>>;
  /** Override currently-connected documents with multiple existing CodeChallengeTest documents */
  set?: Maybe<Array<CodeChallengeTestWhereUniqueInput>>;
  /** Update multiple CodeChallengeTest documents */
  update?: Maybe<Array<CodeChallengeTestUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CodeChallengeTest documents */
  upsert?: Maybe<Array<CodeChallengeTestUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple CodeChallengeTest documents */
  disconnect?: Maybe<Array<CodeChallengeTestWhereUniqueInput>>;
  /** Delete multiple CodeChallengeTest documents */
  delete?: Maybe<Array<CodeChallengeTestWhereUniqueInput>>;
};

export type CodeChallengeTestUpdateManyInput = {
  /** label input for default locale (en) */
  label?: Maybe<Scalars['String']>;
  internalTest?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CodeChallengeTestUpdateManyLocalizationsInput>;
};

export type CodeChallengeTestUpdateManyLocalizationDataInput = {
  label?: Maybe<Scalars['String']>;
};

export type CodeChallengeTestUpdateManyLocalizationInput = {
  data: CodeChallengeTestUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeTestUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<CodeChallengeTestUpdateManyLocalizationInput>>;
};

export type CodeChallengeTestUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CodeChallengeTestWhereInput;
  /** Update many input */
  data: CodeChallengeTestUpdateManyInput;
};

export type CodeChallengeTestUpdateOneInlineInput = {
  /** Create and connect one CodeChallengeTest document */
  create?: Maybe<CodeChallengeTestCreateInput>;
  /** Update single CodeChallengeTest document */
  update?: Maybe<CodeChallengeTestUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CodeChallengeTest document */
  upsert?: Maybe<CodeChallengeTestUpsertWithNestedWhereUniqueInput>;
  /** Connect existing CodeChallengeTest document */
  connect?: Maybe<CodeChallengeTestWhereUniqueInput>;
  /** Disconnect currently connected CodeChallengeTest document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected CodeChallengeTest document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CodeChallengeTestUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CodeChallengeTestWhereUniqueInput;
  /** Document to update */
  data: CodeChallengeTestUpdateInput;
};

export type CodeChallengeTestUpsertInput = {
  /** Create document if it didn't exist */
  create: CodeChallengeTestCreateInput;
  /** Update document if it exists */
  update: CodeChallengeTestUpdateInput;
};

export type CodeChallengeTestUpsertLocalizationInput = {
  update: CodeChallengeTestUpdateLocalizationDataInput;
  create: CodeChallengeTestCreateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeTestUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CodeChallengeTestWhereUniqueInput;
  /** Upsert data */
  data: CodeChallengeTestUpsertInput;
};

/** Identifies documents */
export type CodeChallengeTestWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CodeChallengeTestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CodeChallengeTestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CodeChallengeTestWhereInput>>;
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
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  internalTest?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  internalTest_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  internalTest_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  internalTest_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  internalTest_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  internalTest_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  internalTest_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  internalTest_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  internalTest_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  internalTest_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References CodeChallengeTest record uniquely */
export type CodeChallengeTestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CodeChallengeUpdateInput = {
  /** prompt input for default locale (en) */
  prompt?: Maybe<Scalars['String']>;
  startingCode?: Maybe<Scalars['String']>;
  codeChallengeTests?: Maybe<CodeChallengeTestUpdateManyInlineInput>;
  sublessonChallenge?: Maybe<SublessonChallengeUpdateOneInlineInput>;
  skills?: Maybe<SkillUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<CodeChallengeUpdateLocalizationsInput>;
};

export type CodeChallengeUpdateLocalizationDataInput = {
  prompt?: Maybe<Scalars['String']>;
};

export type CodeChallengeUpdateLocalizationInput = {
  data: CodeChallengeUpdateLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<CodeChallengeCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<CodeChallengeUpdateLocalizationInput>>;
  upsert?: Maybe<Array<CodeChallengeUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
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
  /** prompt input for default locale (en) */
  prompt?: Maybe<Scalars['String']>;
  startingCode?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<CodeChallengeUpdateManyLocalizationsInput>;
};

export type CodeChallengeUpdateManyLocalizationDataInput = {
  prompt?: Maybe<Scalars['String']>;
};

export type CodeChallengeUpdateManyLocalizationInput = {
  data: CodeChallengeUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CodeChallengeUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<CodeChallengeUpdateManyLocalizationInput>>;
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

export type CodeChallengeUpsertLocalizationInput = {
  update: CodeChallengeUpdateLocalizationDataInput;
  create: CodeChallengeCreateLocalizationDataInput;
  locale: Locale;
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
  prompt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  prompt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  prompt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  prompt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  prompt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  prompt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  prompt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  prompt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  prompt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  prompt_not_ends_with?: Maybe<Scalars['String']>;
  startingCode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  startingCode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  startingCode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  startingCode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  startingCode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  startingCode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  startingCode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  startingCode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  startingCode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  startingCode_not_ends_with?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  codeChallengeTests_every?: Maybe<CodeChallengeTestWhereInput>;
  codeChallengeTests_some?: Maybe<CodeChallengeTestWhereInput>;
  codeChallengeTests_none?: Maybe<CodeChallengeTestWhereInput>;
  sublessonChallenge?: Maybe<SublessonChallengeWhereInput>;
  skills_every?: Maybe<SkillWhereInput>;
  skills_some?: Maybe<SkillWhereInput>;
  skills_none?: Maybe<SkillWhereInput>;
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

export type Editor = {
  __typename?: 'Editor';
  code?: Maybe<Scalars['String']>;
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
  /** The url slug */
  slug: Scalars['String'];
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
  slug: Scalars['String'];
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
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
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
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type LessonUpdateInput = {
  /** name input for default locale (en) */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
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
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
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
  slug?: Maybe<Scalars['String']>;
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


export type MultipleChoiceChallenge = Node & {
  __typename?: 'MultipleChoiceChallenge';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<MultipleChoiceChallenge>;
  /** Get the document in other stages */
  documentInStages: Array<MultipleChoiceChallenge>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  prompt: Scalars['String'];
  options: Array<Scalars['String']>;
  correctOptionIndex: Scalars['Int'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  sublessonChallenge?: Maybe<SublessonChallenge>;
  /** The skills required to know how to pass this code challenge */
  skills: Array<Skill>;
  /** List of MultipleChoiceChallenge versions */
  history: Array<Version>;
};


export type MultipleChoiceChallengeLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type MultipleChoiceChallengeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type MultipleChoiceChallengeCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MultipleChoiceChallengeUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MultipleChoiceChallengePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MultipleChoiceChallengeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MultipleChoiceChallengeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MultipleChoiceChallengePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MultipleChoiceChallengeSublessonChallengeArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MultipleChoiceChallengeSkillsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type MultipleChoiceChallengeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type MultipleChoiceChallengeConnectInput = {
  /** Document to connect */
  where: MultipleChoiceChallengeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type MultipleChoiceChallengeConnection = {
  __typename?: 'MultipleChoiceChallengeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<MultipleChoiceChallengeEdge>;
  aggregate: Aggregate;
};

export type MultipleChoiceChallengeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** prompt input for default locale (en) */
  prompt: Scalars['String'];
  /** options input for default locale (en) */
  options: Array<Scalars['String']>;
  correctOptionIndex: Scalars['Int'];
  sublessonChallenge?: Maybe<SublessonChallengeCreateOneInlineInput>;
  skills?: Maybe<SkillCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<MultipleChoiceChallengeCreateLocalizationsInput>;
};

export type MultipleChoiceChallengeCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  prompt: Scalars['String'];
  options: Array<Scalars['String']>;
};

export type MultipleChoiceChallengeCreateLocalizationInput = {
  /** Localization input */
  data: MultipleChoiceChallengeCreateLocalizationDataInput;
  locale: Locale;
};

export type MultipleChoiceChallengeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<MultipleChoiceChallengeCreateLocalizationInput>>;
};

export type MultipleChoiceChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing MultipleChoiceChallenge documents */
  create?: Maybe<Array<MultipleChoiceChallengeCreateInput>>;
  /** Connect multiple existing MultipleChoiceChallenge documents */
  connect?: Maybe<Array<MultipleChoiceChallengeWhereUniqueInput>>;
};

export type MultipleChoiceChallengeCreateOneInlineInput = {
  /** Create and connect one MultipleChoiceChallenge document */
  create?: Maybe<MultipleChoiceChallengeCreateInput>;
  /** Connect one existing MultipleChoiceChallenge document */
  connect?: Maybe<MultipleChoiceChallengeWhereUniqueInput>;
};

/** An edge in a connection. */
export type MultipleChoiceChallengeEdge = {
  __typename?: 'MultipleChoiceChallengeEdge';
  /** The item at the end of the edge. */
  node: MultipleChoiceChallenge;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type MultipleChoiceChallengeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MultipleChoiceChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MultipleChoiceChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MultipleChoiceChallengeWhereInput>>;
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
  correctOptionIndex?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  correctOptionIndex_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  correctOptionIndex_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  correctOptionIndex_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  correctOptionIndex_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  correctOptionIndex_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  correctOptionIndex_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  correctOptionIndex_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  sublessonChallenge?: Maybe<SublessonChallengeWhereInput>;
  skills_every?: Maybe<SkillWhereInput>;
  skills_some?: Maybe<SkillWhereInput>;
  skills_none?: Maybe<SkillWhereInput>;
};

export enum MultipleChoiceChallengeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  PromptAsc = 'prompt_ASC',
  PromptDesc = 'prompt_DESC',
  OptionsAsc = 'options_ASC',
  OptionsDesc = 'options_DESC',
  CorrectOptionIndexAsc = 'correctOptionIndex_ASC',
  CorrectOptionIndexDesc = 'correctOptionIndex_DESC'
}

export type MultipleChoiceChallengeUpdateInput = {
  /** prompt input for default locale (en) */
  prompt?: Maybe<Scalars['String']>;
  /** options input for default locale (en) */
  options?: Maybe<Array<Scalars['String']>>;
  correctOptionIndex?: Maybe<Scalars['Int']>;
  sublessonChallenge?: Maybe<SublessonChallengeUpdateOneInlineInput>;
  skills?: Maybe<SkillUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<MultipleChoiceChallengeUpdateLocalizationsInput>;
};

export type MultipleChoiceChallengeUpdateLocalizationDataInput = {
  prompt?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Scalars['String']>>;
};

export type MultipleChoiceChallengeUpdateLocalizationInput = {
  data: MultipleChoiceChallengeUpdateLocalizationDataInput;
  locale: Locale;
};

export type MultipleChoiceChallengeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<MultipleChoiceChallengeCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<MultipleChoiceChallengeUpdateLocalizationInput>>;
  upsert?: Maybe<Array<MultipleChoiceChallengeUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type MultipleChoiceChallengeUpdateManyInlineInput = {
  /** Create and connect multiple MultipleChoiceChallenge documents */
  create?: Maybe<Array<MultipleChoiceChallengeCreateInput>>;
  /** Connect multiple existing MultipleChoiceChallenge documents */
  connect?: Maybe<Array<MultipleChoiceChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing MultipleChoiceChallenge documents */
  set?: Maybe<Array<MultipleChoiceChallengeWhereUniqueInput>>;
  /** Update multiple MultipleChoiceChallenge documents */
  update?: Maybe<Array<MultipleChoiceChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MultipleChoiceChallenge documents */
  upsert?: Maybe<Array<MultipleChoiceChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple MultipleChoiceChallenge documents */
  disconnect?: Maybe<Array<MultipleChoiceChallengeWhereUniqueInput>>;
  /** Delete multiple MultipleChoiceChallenge documents */
  delete?: Maybe<Array<MultipleChoiceChallengeWhereUniqueInput>>;
};

export type MultipleChoiceChallengeUpdateManyInput = {
  /** prompt input for default locale (en) */
  prompt?: Maybe<Scalars['String']>;
  /** options input for default locale (en) */
  options?: Maybe<Array<Scalars['String']>>;
  correctOptionIndex?: Maybe<Scalars['Int']>;
  /** Optional updates to localizations */
  localizations?: Maybe<MultipleChoiceChallengeUpdateManyLocalizationsInput>;
};

export type MultipleChoiceChallengeUpdateManyLocalizationDataInput = {
  prompt?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Scalars['String']>>;
};

export type MultipleChoiceChallengeUpdateManyLocalizationInput = {
  data: MultipleChoiceChallengeUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type MultipleChoiceChallengeUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<MultipleChoiceChallengeUpdateManyLocalizationInput>>;
};

export type MultipleChoiceChallengeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: MultipleChoiceChallengeWhereInput;
  /** Update many input */
  data: MultipleChoiceChallengeUpdateManyInput;
};

export type MultipleChoiceChallengeUpdateOneInlineInput = {
  /** Create and connect one MultipleChoiceChallenge document */
  create?: Maybe<MultipleChoiceChallengeCreateInput>;
  /** Update single MultipleChoiceChallenge document */
  update?: Maybe<MultipleChoiceChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MultipleChoiceChallenge document */
  upsert?: Maybe<MultipleChoiceChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing MultipleChoiceChallenge document */
  connect?: Maybe<MultipleChoiceChallengeWhereUniqueInput>;
  /** Disconnect currently connected MultipleChoiceChallenge document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected MultipleChoiceChallenge document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type MultipleChoiceChallengeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MultipleChoiceChallengeWhereUniqueInput;
  /** Document to update */
  data: MultipleChoiceChallengeUpdateInput;
};

export type MultipleChoiceChallengeUpsertInput = {
  /** Create document if it didn't exist */
  create: MultipleChoiceChallengeCreateInput;
  /** Update document if it exists */
  update: MultipleChoiceChallengeUpdateInput;
};

export type MultipleChoiceChallengeUpsertLocalizationInput = {
  update: MultipleChoiceChallengeUpdateLocalizationDataInput;
  create: MultipleChoiceChallengeCreateLocalizationDataInput;
  locale: Locale;
};

export type MultipleChoiceChallengeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: MultipleChoiceChallengeWhereUniqueInput;
  /** Upsert data */
  data: MultipleChoiceChallengeUpsertInput;
};

/** Identifies documents */
export type MultipleChoiceChallengeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MultipleChoiceChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MultipleChoiceChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MultipleChoiceChallengeWhereInput>>;
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
  prompt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  prompt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  prompt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  prompt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  prompt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  prompt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  prompt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  prompt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  prompt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  prompt_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  options?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  options_not?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  options_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  options_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  options_contains_none?: Maybe<Array<Scalars['String']>>;
  correctOptionIndex?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  correctOptionIndex_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  correctOptionIndex_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  correctOptionIndex_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  correctOptionIndex_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  correctOptionIndex_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  correctOptionIndex_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  correctOptionIndex_gte?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  sublessonChallenge?: Maybe<SublessonChallengeWhereInput>;
  skills_every?: Maybe<SkillWhereInput>;
  skills_some?: Maybe<SkillWhereInput>;
  skills_none?: Maybe<SkillWhereInput>;
};

/** References MultipleChoiceChallenge record uniquely */
export type MultipleChoiceChallengeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one codeChallenge */
  createCodeChallenge?: Maybe<CodeChallenge>;
  /** Create one codeChallengeTest */
  createCodeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Create one lesson */
  createLesson?: Maybe<Lesson>;
  /** Create one multipleChoiceChallenge */
  createMultipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Create one skill */
  createSkill?: Maybe<Skill>;
  /** Create one sublesson */
  createSublesson?: Maybe<Sublesson>;
  /** Create one sublessonChallenge */
  createSublessonChallenge?: Maybe<SublessonChallenge>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one codeChallenge from _all_ existing stages. Returns deleted document. */
  deleteCodeChallenge?: Maybe<CodeChallenge>;
  /** Delete one codeChallengeTest from _all_ existing stages. Returns deleted document. */
  deleteCodeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Delete one lesson from _all_ existing stages. Returns deleted document. */
  deleteLesson?: Maybe<Lesson>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CodeChallengeTest documents
   * @deprecated Please use the new paginated many mutation (deleteManyCodeChallengeTestsConnection)
   */
  deleteManyCodeChallengeTests: BatchPayload;
  /** Delete many CodeChallengeTest documents, return deleted documents */
  deleteManyCodeChallengeTestsConnection: CodeChallengeTestConnection;
  /**
   * Delete many CodeChallenge documents
   * @deprecated Please use the new paginated many mutation (deleteManyCodeChallengesConnection)
   */
  deleteManyCodeChallenges: BatchPayload;
  /** Delete many CodeChallenge documents, return deleted documents */
  deleteManyCodeChallengesConnection: CodeChallengeConnection;
  /**
   * Delete many Lesson documents
   * @deprecated Please use the new paginated many mutation (deleteManyLessonsConnection)
   */
  deleteManyLessons: BatchPayload;
  /** Delete many Lesson documents, return deleted documents */
  deleteManyLessonsConnection: LessonConnection;
  /**
   * Delete many MultipleChoiceChallenge documents
   * @deprecated Please use the new paginated many mutation (deleteManyMultipleChoiceChallengesConnection)
   */
  deleteManyMultipleChoiceChallenges: BatchPayload;
  /** Delete many MultipleChoiceChallenge documents, return deleted documents */
  deleteManyMultipleChoiceChallengesConnection: MultipleChoiceChallengeConnection;
  /**
   * Delete many Skill documents
   * @deprecated Please use the new paginated many mutation (deleteManySkillsConnection)
   */
  deleteManySkills: BatchPayload;
  /** Delete many Skill documents, return deleted documents */
  deleteManySkillsConnection: SkillConnection;
  /**
   * Delete many SublessonChallenge documents
   * @deprecated Please use the new paginated many mutation (deleteManySublessonChallengesConnection)
   */
  deleteManySublessonChallenges: BatchPayload;
  /** Delete many SublessonChallenge documents, return deleted documents */
  deleteManySublessonChallengesConnection: SublessonChallengeConnection;
  /**
   * Delete many Sublesson documents
   * @deprecated Please use the new paginated many mutation (deleteManySublessonsConnection)
   */
  deleteManySublessons: BatchPayload;
  /** Delete many Sublesson documents, return deleted documents */
  deleteManySublessonsConnection: SublessonConnection;
  /** Delete one multipleChoiceChallenge from _all_ existing stages. Returns deleted document. */
  deleteMultipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Delete one skill from _all_ existing stages. Returns deleted document. */
  deleteSkill?: Maybe<Skill>;
  /** Delete one sublesson from _all_ existing stages. Returns deleted document. */
  deleteSublesson?: Maybe<Sublesson>;
  /** Delete one sublessonChallenge from _all_ existing stages. Returns deleted document. */
  deleteSublessonChallenge?: Maybe<SublessonChallenge>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one codeChallenge */
  publishCodeChallenge?: Maybe<CodeChallenge>;
  /** Publish one codeChallengeTest */
  publishCodeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Publish one lesson */
  publishLesson?: Maybe<Lesson>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CodeChallengeTest documents
   * @deprecated Please use the new paginated many mutation (publishManyCodeChallengeTestsConnection)
   */
  publishManyCodeChallengeTests: BatchPayload;
  /** Publish many CodeChallengeTest documents */
  publishManyCodeChallengeTestsConnection: CodeChallengeTestConnection;
  /**
   * Publish many CodeChallenge documents
   * @deprecated Please use the new paginated many mutation (publishManyCodeChallengesConnection)
   */
  publishManyCodeChallenges: BatchPayload;
  /** Publish many CodeChallenge documents */
  publishManyCodeChallengesConnection: CodeChallengeConnection;
  /**
   * Publish many Lesson documents
   * @deprecated Please use the new paginated many mutation (publishManyLessonsConnection)
   */
  publishManyLessons: BatchPayload;
  /** Publish many Lesson documents */
  publishManyLessonsConnection: LessonConnection;
  /**
   * Publish many MultipleChoiceChallenge documents
   * @deprecated Please use the new paginated many mutation (publishManyMultipleChoiceChallengesConnection)
   */
  publishManyMultipleChoiceChallenges: BatchPayload;
  /** Publish many MultipleChoiceChallenge documents */
  publishManyMultipleChoiceChallengesConnection: MultipleChoiceChallengeConnection;
  /**
   * Publish many Skill documents
   * @deprecated Please use the new paginated many mutation (publishManySkillsConnection)
   */
  publishManySkills: BatchPayload;
  /** Publish many Skill documents */
  publishManySkillsConnection: SkillConnection;
  /**
   * Publish many SublessonChallenge documents
   * @deprecated Please use the new paginated many mutation (publishManySublessonChallengesConnection)
   */
  publishManySublessonChallenges: BatchPayload;
  /** Publish many SublessonChallenge documents */
  publishManySublessonChallengesConnection: SublessonChallengeConnection;
  /**
   * Publish many Sublesson documents
   * @deprecated Please use the new paginated many mutation (publishManySublessonsConnection)
   */
  publishManySublessons: BatchPayload;
  /** Publish many Sublesson documents */
  publishManySublessonsConnection: SublessonConnection;
  /** Publish one multipleChoiceChallenge */
  publishMultipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Publish one skill */
  publishSkill?: Maybe<Skill>;
  /** Publish one sublesson */
  publishSublesson?: Maybe<Sublesson>;
  /** Publish one sublessonChallenge */
  publishSublessonChallenge?: Maybe<SublessonChallenge>;
  setEditorCode?: Maybe<Scalars['String']>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one codeChallenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCodeChallenge?: Maybe<CodeChallenge>;
  /** Unpublish one codeChallengeTest from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCodeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Unpublish one lesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLesson?: Maybe<Lesson>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CodeChallengeTest documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCodeChallengeTestsConnection)
   */
  unpublishManyCodeChallengeTests: BatchPayload;
  /** Find many CodeChallengeTest documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCodeChallengeTestsConnection: CodeChallengeTestConnection;
  /**
   * Unpublish many CodeChallenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCodeChallengesConnection)
   */
  unpublishManyCodeChallenges: BatchPayload;
  /** Find many CodeChallenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCodeChallengesConnection: CodeChallengeConnection;
  /**
   * Unpublish many Lesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLessonsConnection)
   */
  unpublishManyLessons: BatchPayload;
  /** Find many Lesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLessonsConnection: LessonConnection;
  /**
   * Unpublish many MultipleChoiceChallenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMultipleChoiceChallengesConnection)
   */
  unpublishManyMultipleChoiceChallenges: BatchPayload;
  /** Find many MultipleChoiceChallenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMultipleChoiceChallengesConnection: MultipleChoiceChallengeConnection;
  /**
   * Unpublish many Skill documents
   * @deprecated Please use the new paginated many mutation (unpublishManySkillsConnection)
   */
  unpublishManySkills: BatchPayload;
  /** Find many Skill documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySkillsConnection: SkillConnection;
  /**
   * Unpublish many SublessonChallenge documents
   * @deprecated Please use the new paginated many mutation (unpublishManySublessonChallengesConnection)
   */
  unpublishManySublessonChallenges: BatchPayload;
  /** Find many SublessonChallenge documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySublessonChallengesConnection: SublessonChallengeConnection;
  /**
   * Unpublish many Sublesson documents
   * @deprecated Please use the new paginated many mutation (unpublishManySublessonsConnection)
   */
  unpublishManySublessons: BatchPayload;
  /** Find many Sublesson documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySublessonsConnection: SublessonConnection;
  /** Unpublish one multipleChoiceChallenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMultipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Unpublish one skill from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSkill?: Maybe<Skill>;
  /** Unpublish one sublesson from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSublesson?: Maybe<Sublesson>;
  /** Unpublish one sublessonChallenge from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSublessonChallenge?: Maybe<SublessonChallenge>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one codeChallenge */
  updateCodeChallenge?: Maybe<CodeChallenge>;
  /** Update one codeChallengeTest */
  updateCodeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Update one lesson */
  updateLesson?: Maybe<Lesson>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many codeChallengeTests
   * @deprecated Please use the new paginated many mutation (updateManyCodeChallengeTestsConnection)
   */
  updateManyCodeChallengeTests: BatchPayload;
  /** Update many CodeChallengeTest documents */
  updateManyCodeChallengeTestsConnection: CodeChallengeTestConnection;
  /**
   * Update many codeChallenges
   * @deprecated Please use the new paginated many mutation (updateManyCodeChallengesConnection)
   */
  updateManyCodeChallenges: BatchPayload;
  /** Update many CodeChallenge documents */
  updateManyCodeChallengesConnection: CodeChallengeConnection;
  /**
   * Update many lessons
   * @deprecated Please use the new paginated many mutation (updateManyLessonsConnection)
   */
  updateManyLessons: BatchPayload;
  /** Update many Lesson documents */
  updateManyLessonsConnection: LessonConnection;
  /**
   * Update many multipleChoiceChallenges
   * @deprecated Please use the new paginated many mutation (updateManyMultipleChoiceChallengesConnection)
   */
  updateManyMultipleChoiceChallenges: BatchPayload;
  /** Update many MultipleChoiceChallenge documents */
  updateManyMultipleChoiceChallengesConnection: MultipleChoiceChallengeConnection;
  /**
   * Update many skills
   * @deprecated Please use the new paginated many mutation (updateManySkillsConnection)
   */
  updateManySkills: BatchPayload;
  /** Update many Skill documents */
  updateManySkillsConnection: SkillConnection;
  /**
   * Update many sublessonChallenges
   * @deprecated Please use the new paginated many mutation (updateManySublessonChallengesConnection)
   */
  updateManySublessonChallenges: BatchPayload;
  /** Update many SublessonChallenge documents */
  updateManySublessonChallengesConnection: SublessonChallengeConnection;
  /**
   * Update many sublessons
   * @deprecated Please use the new paginated many mutation (updateManySublessonsConnection)
   */
  updateManySublessons: BatchPayload;
  /** Update many Sublesson documents */
  updateManySublessonsConnection: SublessonConnection;
  /** Update one multipleChoiceChallenge */
  updateMultipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Update one skill */
  updateSkill?: Maybe<Skill>;
  /** Update one sublesson */
  updateSublesson?: Maybe<Sublesson>;
  /** Update one sublessonChallenge */
  updateSublessonChallenge?: Maybe<SublessonChallenge>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one codeChallenge */
  upsertCodeChallenge?: Maybe<CodeChallenge>;
  /** Upsert one codeChallengeTest */
  upsertCodeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Upsert one lesson */
  upsertLesson?: Maybe<Lesson>;
  /** Upsert one multipleChoiceChallenge */
  upsertMultipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Upsert one skill */
  upsertSkill?: Maybe<Skill>;
  /** Upsert one sublesson */
  upsertSublesson?: Maybe<Sublesson>;
  /** Upsert one sublessonChallenge */
  upsertSublessonChallenge?: Maybe<SublessonChallenge>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCodeChallengeArgs = {
  data: CodeChallengeCreateInput;
};


export type MutationCreateCodeChallengeTestArgs = {
  data: CodeChallengeTestCreateInput;
};


export type MutationCreateLessonArgs = {
  data: LessonCreateInput;
};


export type MutationCreateMultipleChoiceChallengeArgs = {
  data: MultipleChoiceChallengeCreateInput;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateSublessonArgs = {
  data: SublessonCreateInput;
};


export type MutationCreateSublessonChallengeArgs = {
  data: SublessonChallengeCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
};


export type MutationDeleteCodeChallengeTestArgs = {
  where: CodeChallengeTestWhereUniqueInput;
};


export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCodeChallengeTestsArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
};


export type MutationDeleteManyCodeChallengeTestsConnectionArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
};


export type MutationDeleteManyCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
};


export type MutationDeleteManyLessonsConnectionArgs = {
  where?: Maybe<LessonManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyMultipleChoiceChallengesArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
};


export type MutationDeleteManyMultipleChoiceChallengesConnectionArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
};


export type MutationDeleteManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySublessonChallengesArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
};


export type MutationDeleteManySublessonChallengesConnectionArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
};


export type MutationDeleteManySublessonsConnectionArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteMultipleChoiceChallengeArgs = {
  where: MultipleChoiceChallengeWhereUniqueInput;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteSublessonArgs = {
  where: SublessonWhereUniqueInput;
};


export type MutationDeleteSublessonChallengeArgs = {
  where: SublessonChallengeWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationPublishCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationPublishCodeChallengeTestArgs = {
  where: CodeChallengeTestWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationPublishLessonArgs = {
  where: LessonWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
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


export type MutationPublishManyCodeChallengeTestsArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyCodeChallengeTestsConnectionArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
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


export type MutationPublishManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
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
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
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


export type MutationPublishManyMultipleChoiceChallengesArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyMultipleChoiceChallengesConnectionArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
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


export type MutationPublishManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  to?: Array<Stage>;
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


export type MutationPublishManySublessonChallengesArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationPublishManySublessonChallengesConnectionArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
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


export type MutationPublishMultipleChoiceChallengeArgs = {
  where: MultipleChoiceChallengeWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationPublishSkillArgs = {
  where: SkillWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationPublishSublessonArgs = {
  where: SublessonWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationPublishSublessonChallengeArgs = {
  where: SublessonChallengeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationSetEditorCodeArgs = {
  code: Scalars['String'];
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishCodeChallengeTestArgs = {
  where: CodeChallengeTestWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishLessonArgs = {
  where: LessonWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
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


export type MutationUnpublishManyCodeChallengeTestsArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyCodeChallengeTestsConnectionArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
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


export type MutationUnpublishManyCodeChallengesArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
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
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
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


export type MutationUnpublishManyMultipleChoiceChallengesArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyMultipleChoiceChallengesConnectionArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
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


export type MutationUnpublishManySkillsArgs = {
  where?: Maybe<SkillManyWhereInput>;
  from?: Array<Stage>;
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


export type MutationUnpublishManySublessonChallengesArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationUnpublishManySublessonChallengesConnectionArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
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


export type MutationUnpublishMultipleChoiceChallengeArgs = {
  where: MultipleChoiceChallengeWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishSkillArgs = {
  where: SkillWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUnpublishSublessonArgs = {
  where: SublessonWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishSublessonChallengeArgs = {
  where: SublessonChallengeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationUpdateCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  data: CodeChallengeUpdateInput;
};


export type MutationUpdateCodeChallengeTestArgs = {
  where: CodeChallengeTestWhereUniqueInput;
  data: CodeChallengeTestUpdateInput;
};


export type MutationUpdateLessonArgs = {
  where: LessonWhereUniqueInput;
  data: LessonUpdateInput;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
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


export type MutationUpdateManyCodeChallengeTestsArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
  data: CodeChallengeTestUpdateManyInput;
};


export type MutationUpdateManyCodeChallengeTestsConnectionArgs = {
  where?: Maybe<CodeChallengeTestManyWhereInput>;
  data: CodeChallengeTestUpdateManyInput;
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


export type MutationUpdateManyCodeChallengesConnectionArgs = {
  where?: Maybe<CodeChallengeManyWhereInput>;
  data: CodeChallengeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyLessonsArgs = {
  where?: Maybe<LessonManyWhereInput>;
  data: LessonUpdateManyInput;
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


export type MutationUpdateManyMultipleChoiceChallengesArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
  data: MultipleChoiceChallengeUpdateManyInput;
};


export type MutationUpdateManyMultipleChoiceChallengesConnectionArgs = {
  where?: Maybe<MultipleChoiceChallengeManyWhereInput>;
  data: MultipleChoiceChallengeUpdateManyInput;
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


export type MutationUpdateManySkillsConnectionArgs = {
  where?: Maybe<SkillManyWhereInput>;
  data: SkillUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySublessonChallengesArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  data: SublessonChallengeUpdateManyInput;
};


export type MutationUpdateManySublessonChallengesConnectionArgs = {
  where?: Maybe<SublessonChallengeManyWhereInput>;
  data: SublessonChallengeUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySublessonsArgs = {
  where?: Maybe<SublessonManyWhereInput>;
  data: SublessonUpdateManyInput;
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


export type MutationUpdateMultipleChoiceChallengeArgs = {
  where: MultipleChoiceChallengeWhereUniqueInput;
  data: MultipleChoiceChallengeUpdateInput;
};


export type MutationUpdateSkillArgs = {
  where: SkillWhereUniqueInput;
  data: SkillUpdateInput;
};


export type MutationUpdateSublessonArgs = {
  where: SublessonWhereUniqueInput;
  data: SublessonUpdateInput;
};


export type MutationUpdateSublessonChallengeArgs = {
  where: SublessonChallengeWhereUniqueInput;
  data: SublessonChallengeUpdateInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationUpsertCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  upsert: CodeChallengeUpsertInput;
};


export type MutationUpsertCodeChallengeTestArgs = {
  where: CodeChallengeTestWhereUniqueInput;
  upsert: CodeChallengeTestUpsertInput;
};


export type MutationUpsertLessonArgs = {
  where: LessonWhereUniqueInput;
  upsert: LessonUpsertInput;
};


export type MutationUpsertMultipleChoiceChallengeArgs = {
  where: MultipleChoiceChallengeWhereUniqueInput;
  upsert: MultipleChoiceChallengeUpsertInput;
};


export type MutationUpsertSkillArgs = {
  where: SkillWhereUniqueInput;
  upsert: SkillUpsertInput;
};


export type MutationUpsertSublessonArgs = {
  where: SublessonWhereUniqueInput;
  upsert: SublessonUpsertInput;
};


export type MutationUpsertSublessonChallengeArgs = {
  where: SublessonChallengeWhereUniqueInput;
  upsert: SublessonChallengeUpsertInput;
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
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single codeChallenge */
  codeChallenge?: Maybe<CodeChallenge>;
  /** Retrieve a single codeChallengeTest */
  codeChallengeTest?: Maybe<CodeChallengeTest>;
  /** Retrieve document version */
  codeChallengeTestVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple codeChallengeTests */
  codeChallengeTests: Array<CodeChallengeTest>;
  /** Retrieve multiple codeChallengeTests using the Relay connection interface */
  codeChallengeTestsConnection: CodeChallengeTestConnection;
  /** Retrieve document version */
  codeChallengeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple codeChallenges */
  codeChallenges: Array<CodeChallenge>;
  /** Retrieve multiple codeChallenges using the Relay connection interface */
  codeChallengesConnection: CodeChallengeConnection;
  editor?: Maybe<Editor>;
  /** Retrieve a single lesson */
  lesson?: Maybe<Lesson>;
  /** Retrieve document version */
  lessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple lessons */
  lessons: Array<Lesson>;
  /** Retrieve multiple lessons using the Relay connection interface */
  lessonsConnection: LessonConnection;
  /** Retrieve a single multipleChoiceChallenge */
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  /** Retrieve document version */
  multipleChoiceChallengeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple multipleChoiceChallenges */
  multipleChoiceChallenges: Array<MultipleChoiceChallenge>;
  /** Retrieve multiple multipleChoiceChallenges using the Relay connection interface */
  multipleChoiceChallengesConnection: MultipleChoiceChallengeConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single skill */
  skill?: Maybe<Skill>;
  /** Retrieve document version */
  skillVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple skills */
  skills: Array<Skill>;
  /** Retrieve multiple skills using the Relay connection interface */
  skillsConnection: SkillConnection;
  /** Retrieve a single sublesson */
  sublesson?: Maybe<Sublesson>;
  /** Retrieve a single sublessonChallenge */
  sublessonChallenge?: Maybe<SublessonChallenge>;
  /** Retrieve document version */
  sublessonChallengeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sublessonChallenges */
  sublessonChallenges: Array<SublessonChallenge>;
  /** Retrieve multiple sublessonChallenges using the Relay connection interface */
  sublessonChallengesConnection: SublessonChallengeConnection;
  /** Retrieve document version */
  sublessonVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sublessons */
  sublessons: Array<Sublesson>;
  /** Retrieve multiple sublessons using the Relay connection interface */
  sublessonsConnection: SublessonConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
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


export type QueryCodeChallengeArgs = {
  where: CodeChallengeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeTestArgs = {
  where: CodeChallengeTestWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeTestVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCodeChallengeTestsArgs = {
  where?: Maybe<CodeChallengeTestWhereInput>;
  orderBy?: Maybe<CodeChallengeTestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCodeChallengeTestsConnectionArgs = {
  where?: Maybe<CodeChallengeTestWhereInput>;
  orderBy?: Maybe<CodeChallengeTestOrderByInput>;
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


export type QueryLessonArgs = {
  where: LessonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryLessonVersionArgs = {
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


export type QueryMultipleChoiceChallengeArgs = {
  where: MultipleChoiceChallengeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMultipleChoiceChallengeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMultipleChoiceChallengesArgs = {
  where?: Maybe<MultipleChoiceChallengeWhereInput>;
  orderBy?: Maybe<MultipleChoiceChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryMultipleChoiceChallengesConnectionArgs = {
  where?: Maybe<MultipleChoiceChallengeWhereInput>;
  orderBy?: Maybe<MultipleChoiceChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySkillVersionArgs = {
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


export type QuerySublessonArgs = {
  where: SublessonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySublessonChallengeArgs = {
  where: SublessonChallengeWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySublessonChallengeVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySublessonChallengesArgs = {
  where?: Maybe<SublessonChallengeWhereInput>;
  orderBy?: Maybe<SublessonChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QuerySublessonChallengesConnectionArgs = {
  where?: Maybe<SublessonChallengeWhereInput>;
  orderBy?: Maybe<SublessonChallengeOrderByInput>;
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


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
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
  challenge: Array<SkillChallenge>;
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


export type SkillChallengeArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type SkillHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SkillChallenge = CodeChallenge | MultipleChoiceChallenge;

export type SkillChallengeConnectInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeConnectInput>;
  CodeChallenge?: Maybe<CodeChallengeConnectInput>;
};

export type SkillChallengeCreateInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeCreateInput>;
  CodeChallenge?: Maybe<CodeChallengeCreateInput>;
};

export type SkillChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing SkillChallenge documents */
  create?: Maybe<Array<SkillChallengeCreateInput>>;
  /** Connect multiple existing SkillChallenge documents */
  connect?: Maybe<Array<SkillChallengeWhereUniqueInput>>;
};

export type SkillChallengeCreateOneInlineInput = {
  /** Create and connect one SkillChallenge document */
  create?: Maybe<SkillChallengeCreateInput>;
  /** Connect one existing SkillChallenge document */
  connect?: Maybe<SkillChallengeWhereUniqueInput>;
};

export type SkillChallengeUpdateInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpdateInput>;
  CodeChallenge?: Maybe<CodeChallengeUpdateInput>;
};

export type SkillChallengeUpdateManyInlineInput = {
  /** Create and connect multiple SkillChallenge documents */
  create?: Maybe<Array<SkillChallengeCreateInput>>;
  /** Connect multiple existing SkillChallenge documents */
  connect?: Maybe<Array<SkillChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing SkillChallenge documents */
  set?: Maybe<Array<SkillChallengeWhereUniqueInput>>;
  /** Update multiple SkillChallenge documents */
  update?: Maybe<Array<SkillChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SkillChallenge documents */
  upsert?: Maybe<Array<SkillChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple SkillChallenge documents */
  disconnect?: Maybe<Array<SkillChallengeWhereUniqueInput>>;
  /** Delete multiple SkillChallenge documents */
  delete?: Maybe<Array<SkillChallengeWhereUniqueInput>>;
};

export type SkillChallengeUpdateManyWithNestedWhereInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpdateManyWithNestedWhereInput>;
  CodeChallenge?: Maybe<CodeChallengeUpdateManyWithNestedWhereInput>;
};

export type SkillChallengeUpdateOneInlineInput = {
  /** Create and connect one SkillChallenge document */
  create?: Maybe<SkillChallengeCreateInput>;
  /** Update single SkillChallenge document */
  update?: Maybe<SkillChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SkillChallenge document */
  upsert?: Maybe<SkillChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing SkillChallenge document */
  connect?: Maybe<SkillChallengeWhereUniqueInput>;
  /** Disconnect currently connected SkillChallenge document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected SkillChallenge document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SkillChallengeUpdateWithNestedWhereUniqueInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpdateWithNestedWhereUniqueInput>;
  CodeChallenge?: Maybe<CodeChallengeUpdateWithNestedWhereUniqueInput>;
};

export type SkillChallengeUpsertWithNestedWhereUniqueInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpsertWithNestedWhereUniqueInput>;
  CodeChallenge?: Maybe<CodeChallengeUpsertWithNestedWhereUniqueInput>;
};

export type SkillChallengeWhereInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeWhereInput>;
  CodeChallenge?: Maybe<CodeChallengeWhereInput>;
};

export type SkillChallengeWhereUniqueInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeWhereUniqueInput>;
  CodeChallenge?: Maybe<CodeChallengeWhereUniqueInput>;
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
  challenge?: Maybe<SkillChallengeCreateManyInlineInput>;
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
  challenge?: Maybe<SkillChallengeUpdateManyInlineInput>;
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
  sublessonChallenges: Array<SublessonChallenge>;
  lesson?: Maybe<Lesson>;
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


export type SublessonSublessonChallengesArgs = {
  where?: Maybe<SublessonChallengeWhereInput>;
  orderBy?: Maybe<SublessonChallengeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type SublessonLessonArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type SublessonHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** The association model between a Sublesson and a Challenge */
export type SublessonChallenge = Node & {
  __typename?: 'SublessonChallenge';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<SublessonChallenge>;
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
  sublesson?: Maybe<Sublesson>;
  /** Whether or not to display this challenge to the user based on their frequency preference */
  frequencyCriteria: SublessonChallengeFrequencyPreference;
  challenge?: Maybe<SublessonChallengeChallenge>;
  /** List of SublessonChallenge versions */
  history: Array<Version>;
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengeSublessonArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengeChallengeArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** The association model between a Sublesson and a Challenge */
export type SublessonChallengeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SublessonChallengeChallenge = CodeChallenge | MultipleChoiceChallenge;

export type SublessonChallengeChallengeConnectInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeConnectInput>;
  CodeChallenge?: Maybe<CodeChallengeConnectInput>;
};

export type SublessonChallengeChallengeCreateInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeCreateInput>;
  CodeChallenge?: Maybe<CodeChallengeCreateInput>;
};

export type SublessonChallengeChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing SublessonChallengeChallenge documents */
  create?: Maybe<Array<SublessonChallengeChallengeCreateInput>>;
  /** Connect multiple existing SublessonChallengeChallenge documents */
  connect?: Maybe<Array<SublessonChallengeChallengeWhereUniqueInput>>;
};

export type SublessonChallengeChallengeCreateOneInlineInput = {
  /** Create and connect one SublessonChallengeChallenge document */
  create?: Maybe<SublessonChallengeChallengeCreateInput>;
  /** Connect one existing SublessonChallengeChallenge document */
  connect?: Maybe<SublessonChallengeChallengeWhereUniqueInput>;
};

export type SublessonChallengeChallengeUpdateInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpdateInput>;
  CodeChallenge?: Maybe<CodeChallengeUpdateInput>;
};

export type SublessonChallengeChallengeUpdateManyInlineInput = {
  /** Create and connect multiple SublessonChallengeChallenge documents */
  create?: Maybe<Array<SublessonChallengeChallengeCreateInput>>;
  /** Connect multiple existing SublessonChallengeChallenge documents */
  connect?: Maybe<Array<SublessonChallengeChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing SublessonChallengeChallenge documents */
  set?: Maybe<Array<SublessonChallengeChallengeWhereUniqueInput>>;
  /** Update multiple SublessonChallengeChallenge documents */
  update?: Maybe<Array<SublessonChallengeChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SublessonChallengeChallenge documents */
  upsert?: Maybe<Array<SublessonChallengeChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple SublessonChallengeChallenge documents */
  disconnect?: Maybe<Array<SublessonChallengeChallengeWhereUniqueInput>>;
  /** Delete multiple SublessonChallengeChallenge documents */
  delete?: Maybe<Array<SublessonChallengeChallengeWhereUniqueInput>>;
};

export type SublessonChallengeChallengeUpdateManyWithNestedWhereInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpdateManyWithNestedWhereInput>;
  CodeChallenge?: Maybe<CodeChallengeUpdateManyWithNestedWhereInput>;
};

export type SublessonChallengeChallengeUpdateOneInlineInput = {
  /** Create and connect one SublessonChallengeChallenge document */
  create?: Maybe<SublessonChallengeChallengeCreateInput>;
  /** Update single SublessonChallengeChallenge document */
  update?: Maybe<SublessonChallengeChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SublessonChallengeChallenge document */
  upsert?: Maybe<SublessonChallengeChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing SublessonChallengeChallenge document */
  connect?: Maybe<SublessonChallengeChallengeWhereUniqueInput>;
  /** Disconnect currently connected SublessonChallengeChallenge document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected SublessonChallengeChallenge document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SublessonChallengeChallengeUpdateWithNestedWhereUniqueInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpdateWithNestedWhereUniqueInput>;
  CodeChallenge?: Maybe<CodeChallengeUpdateWithNestedWhereUniqueInput>;
};

export type SublessonChallengeChallengeUpsertWithNestedWhereUniqueInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeUpsertWithNestedWhereUniqueInput>;
  CodeChallenge?: Maybe<CodeChallengeUpsertWithNestedWhereUniqueInput>;
};

export type SublessonChallengeChallengeWhereInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeWhereInput>;
  CodeChallenge?: Maybe<CodeChallengeWhereInput>;
};

export type SublessonChallengeChallengeWhereUniqueInput = {
  MultipleChoiceChallenge?: Maybe<MultipleChoiceChallengeWhereUniqueInput>;
  CodeChallenge?: Maybe<CodeChallengeWhereUniqueInput>;
};

export type SublessonChallengeConnectInput = {
  /** Document to connect */
  where: SublessonChallengeWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SublessonChallengeConnection = {
  __typename?: 'SublessonChallengeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SublessonChallengeEdge>;
  aggregate: Aggregate;
};

export type SublessonChallengeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  sublesson?: Maybe<SublessonCreateOneInlineInput>;
  frequencyCriteria: SublessonChallengeFrequencyPreference;
  challenge?: Maybe<SublessonChallengeChallengeCreateOneInlineInput>;
};

export type SublessonChallengeCreateManyInlineInput = {
  /** Create and connect multiple existing SublessonChallenge documents */
  create?: Maybe<Array<SublessonChallengeCreateInput>>;
  /** Connect multiple existing SublessonChallenge documents */
  connect?: Maybe<Array<SublessonChallengeWhereUniqueInput>>;
};

export type SublessonChallengeCreateOneInlineInput = {
  /** Create and connect one SublessonChallenge document */
  create?: Maybe<SublessonChallengeCreateInput>;
  /** Connect one existing SublessonChallenge document */
  connect?: Maybe<SublessonChallengeWhereUniqueInput>;
};

/** An edge in a connection. */
export type SublessonChallengeEdge = {
  __typename?: 'SublessonChallengeEdge';
  /** The item at the end of the edge. */
  node: SublessonChallenge;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** A higher frequency means more challenges per sublesson */
export enum SublessonChallengeFrequencyPreference {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

/** Identifies documents */
export type SublessonChallengeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SublessonChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SublessonChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SublessonChallengeWhereInput>>;
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
  sublesson?: Maybe<SublessonWhereInput>;
  frequencyCriteria?: Maybe<SublessonChallengeFrequencyPreference>;
  /** All values that are not equal to given value. */
  frequencyCriteria_not?: Maybe<SublessonChallengeFrequencyPreference>;
  /** All values that are contained in given list. */
  frequencyCriteria_in?: Maybe<Array<SublessonChallengeFrequencyPreference>>;
  /** All values that are not contained in given list. */
  frequencyCriteria_not_in?: Maybe<Array<SublessonChallengeFrequencyPreference>>;
};

export enum SublessonChallengeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  FrequencyCriteriaAsc = 'frequencyCriteria_ASC',
  FrequencyCriteriaDesc = 'frequencyCriteria_DESC'
}

export type SublessonChallengeUpdateInput = {
  sublesson?: Maybe<SublessonUpdateOneInlineInput>;
  frequencyCriteria?: Maybe<SublessonChallengeFrequencyPreference>;
  challenge?: Maybe<SublessonChallengeChallengeUpdateOneInlineInput>;
};

export type SublessonChallengeUpdateManyInlineInput = {
  /** Create and connect multiple SublessonChallenge documents */
  create?: Maybe<Array<SublessonChallengeCreateInput>>;
  /** Connect multiple existing SublessonChallenge documents */
  connect?: Maybe<Array<SublessonChallengeConnectInput>>;
  /** Override currently-connected documents with multiple existing SublessonChallenge documents */
  set?: Maybe<Array<SublessonChallengeWhereUniqueInput>>;
  /** Update multiple SublessonChallenge documents */
  update?: Maybe<Array<SublessonChallengeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SublessonChallenge documents */
  upsert?: Maybe<Array<SublessonChallengeUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple SublessonChallenge documents */
  disconnect?: Maybe<Array<SublessonChallengeWhereUniqueInput>>;
  /** Delete multiple SublessonChallenge documents */
  delete?: Maybe<Array<SublessonChallengeWhereUniqueInput>>;
};

export type SublessonChallengeUpdateManyInput = {
  frequencyCriteria?: Maybe<SublessonChallengeFrequencyPreference>;
};

export type SublessonChallengeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SublessonChallengeWhereInput;
  /** Update many input */
  data: SublessonChallengeUpdateManyInput;
};

export type SublessonChallengeUpdateOneInlineInput = {
  /** Create and connect one SublessonChallenge document */
  create?: Maybe<SublessonChallengeCreateInput>;
  /** Update single SublessonChallenge document */
  update?: Maybe<SublessonChallengeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SublessonChallenge document */
  upsert?: Maybe<SublessonChallengeUpsertWithNestedWhereUniqueInput>;
  /** Connect existing SublessonChallenge document */
  connect?: Maybe<SublessonChallengeWhereUniqueInput>;
  /** Disconnect currently connected SublessonChallenge document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected SublessonChallenge document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SublessonChallengeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SublessonChallengeWhereUniqueInput;
  /** Document to update */
  data: SublessonChallengeUpdateInput;
};

export type SublessonChallengeUpsertInput = {
  /** Create document if it didn't exist */
  create: SublessonChallengeCreateInput;
  /** Update document if it exists */
  update: SublessonChallengeUpdateInput;
};

export type SublessonChallengeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SublessonChallengeWhereUniqueInput;
  /** Upsert data */
  data: SublessonChallengeUpsertInput;
};

/** Identifies documents */
export type SublessonChallengeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SublessonChallengeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SublessonChallengeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SublessonChallengeWhereInput>>;
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
  sublesson?: Maybe<SublessonWhereInput>;
  frequencyCriteria?: Maybe<SublessonChallengeFrequencyPreference>;
  /** All values that are not equal to given value. */
  frequencyCriteria_not?: Maybe<SublessonChallengeFrequencyPreference>;
  /** All values that are contained in given list. */
  frequencyCriteria_in?: Maybe<Array<SublessonChallengeFrequencyPreference>>;
  /** All values that are not contained in given list. */
  frequencyCriteria_not_in?: Maybe<Array<SublessonChallengeFrequencyPreference>>;
};

/** References SublessonChallenge record uniquely */
export type SublessonChallengeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  sublessonChallenges?: Maybe<SublessonChallengeCreateManyInlineInput>;
  lesson?: Maybe<LessonCreateOneInlineInput>;
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
  sublessonChallenges_every?: Maybe<SublessonChallengeWhereInput>;
  sublessonChallenges_some?: Maybe<SublessonChallengeWhereInput>;
  sublessonChallenges_none?: Maybe<SublessonChallengeWhereInput>;
  lesson?: Maybe<LessonWhereInput>;
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
  sublessonChallenges?: Maybe<SublessonChallengeUpdateManyInlineInput>;
  lesson?: Maybe<LessonUpdateOneInlineInput>;
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
  sublessonChallenges_every?: Maybe<SublessonChallengeWhereInput>;
  sublessonChallenges_some?: Maybe<SublessonChallengeWhereInput>;
  sublessonChallenges_none?: Maybe<SublessonChallengeWhereInput>;
  lesson?: Maybe<LessonWhereInput>;
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

export type GetEditorDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEditorDataQuery = (
  { __typename?: 'Query' }
  & { editor?: Maybe<(
    { __typename?: 'Editor' }
    & Pick<Editor, 'code'>
  )> }
);

export type SetEditorCodeMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type SetEditorCodeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setEditorCode'>
);

export type GetSublessonInstructionsDataQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSublessonInstructionsDataQuery = (
  { __typename?: 'Query' }
  & { sublesson?: Maybe<(
    { __typename?: 'Sublesson' }
    & Pick<Sublesson, 'description' | 'name'>
    & { sublessonChallenges: Array<(
      { __typename?: 'SublessonChallenge' }
      & { challenge?: Maybe<(
        { __typename?: 'CodeChallenge' }
        & Pick<CodeChallenge, 'prompt'>
        & { codeChallengeTests: Array<(
          { __typename?: 'CodeChallengeTest' }
          & Pick<CodeChallengeTest, 'label' | 'internalTest'>
        )> }
      ) | (
        { __typename?: 'MultipleChoiceChallenge' }
        & Pick<MultipleChoiceChallenge, 'correctOptionIndex' | 'options'>
      )> }
    )>, lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'name'>
    )> }
  )> }
);

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

export type SublessonFragment = (
  { __typename?: 'Sublesson' }
  & Pick<Sublesson, 'description' | 'name'>
  & { sublessonChallenges: Array<(
    { __typename?: 'SublessonChallenge' }
    & SublessonChallengeFragment
  )> }
);

export type SublessonChallengeFragment = (
  { __typename?: 'SublessonChallenge' }
  & { challenge?: Maybe<(
    { __typename?: 'CodeChallenge' }
    & Pick<CodeChallenge, 'prompt'>
    & { codeChallengeTests: Array<(
      { __typename?: 'CodeChallengeTest' }
      & Pick<CodeChallengeTest, 'label' | 'internalTest'>
    )> }
  ) | (
    { __typename?: 'MultipleChoiceChallenge' }
    & Pick<MultipleChoiceChallenge, 'correctOptionIndex' | 'options'>
  )> }
);

export type GetLessonDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLessonDataQuery = (
  { __typename?: 'Query' }
  & { lesson?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'name'>
    & { sublessons: Array<(
      { __typename?: 'Sublesson' }
      & Pick<Sublesson, 'description' | 'name'>
      & { sublessonChallenges: Array<(
        { __typename?: 'SublessonChallenge' }
        & { challenge?: Maybe<(
          { __typename?: 'CodeChallenge' }
          & Pick<CodeChallenge, 'prompt'>
          & { codeChallengeTests: Array<(
            { __typename?: 'CodeChallengeTest' }
            & Pick<CodeChallengeTest, 'label' | 'internalTest'>
          )> }
        ) | (
          { __typename?: 'MultipleChoiceChallenge' }
          & Pick<MultipleChoiceChallenge, 'correctOptionIndex' | 'options'>
        )> }
      )> }
    )> }
  )> }
);

export const SublessonChallengeFragmentDoc = gql`
    fragment sublessonChallenge on SublessonChallenge {
  challenge {
    ... on CodeChallenge {
      prompt
      codeChallengeTests {
        label
        internalTest
      }
    }
    ... on MultipleChoiceChallenge {
      correctOptionIndex
      options
    }
  }
}
    `;
export const SublessonFragmentDoc = gql`
    fragment sublesson on Sublesson {
  description
  name
  sublessonChallenges {
    ...sublessonChallenge
  }
}
    ${SublessonChallengeFragmentDoc}`;
export const GetEditorDataDocument = gql`
    query getEditorData {
  editor @client {
    code
  }
}
    `;

/**
 * __useGetEditorDataQuery__
 *
 * To run a query within a React component, call `useGetEditorDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEditorDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEditorDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEditorDataQuery(baseOptions?: Apollo.QueryHookOptions<GetEditorDataQuery, GetEditorDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEditorDataQuery, GetEditorDataQueryVariables>(GetEditorDataDocument, options);
      }
export function useGetEditorDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEditorDataQuery, GetEditorDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEditorDataQuery, GetEditorDataQueryVariables>(GetEditorDataDocument, options);
        }
export type GetEditorDataQueryHookResult = ReturnType<typeof useGetEditorDataQuery>;
export type GetEditorDataLazyQueryHookResult = ReturnType<typeof useGetEditorDataLazyQuery>;
export type GetEditorDataQueryResult = Apollo.QueryResult<GetEditorDataQuery, GetEditorDataQueryVariables>;
export const SetEditorCodeDocument = gql`
    mutation setEditorCode($code: String!) {
  setEditorCode(code: $code) @client
}
    `;
export type SetEditorCodeMutationFn = Apollo.MutationFunction<SetEditorCodeMutation, SetEditorCodeMutationVariables>;

/**
 * __useSetEditorCodeMutation__
 *
 * To run a mutation, you first call `useSetEditorCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEditorCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEditorCodeMutation, { data, loading, error }] = useSetEditorCodeMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useSetEditorCodeMutation(baseOptions?: Apollo.MutationHookOptions<SetEditorCodeMutation, SetEditorCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetEditorCodeMutation, SetEditorCodeMutationVariables>(SetEditorCodeDocument, options);
      }
export type SetEditorCodeMutationHookResult = ReturnType<typeof useSetEditorCodeMutation>;
export type SetEditorCodeMutationResult = Apollo.MutationResult<SetEditorCodeMutation>;
export type SetEditorCodeMutationOptions = Apollo.BaseMutationOptions<SetEditorCodeMutation, SetEditorCodeMutationVariables>;
export const GetSublessonInstructionsDataDocument = gql`
    query getSublessonInstructionsData($id: ID!) {
  sublesson(where: {id: $id}) {
    description
    name
    sublessonChallenges {
      challenge {
        ... on CodeChallenge {
          prompt
          codeChallengeTests {
            label
            internalTest
          }
        }
        ... on MultipleChoiceChallenge {
          correctOptionIndex
          options
        }
      }
    }
    lesson {
      name
    }
  }
}
    `;

/**
 * __useGetSublessonInstructionsDataQuery__
 *
 * To run a query within a React component, call `useGetSublessonInstructionsDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSublessonInstructionsDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSublessonInstructionsDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSublessonInstructionsDataQuery(baseOptions: Apollo.QueryHookOptions<GetSublessonInstructionsDataQuery, GetSublessonInstructionsDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSublessonInstructionsDataQuery, GetSublessonInstructionsDataQueryVariables>(GetSublessonInstructionsDataDocument, options);
      }
export function useGetSublessonInstructionsDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSublessonInstructionsDataQuery, GetSublessonInstructionsDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSublessonInstructionsDataQuery, GetSublessonInstructionsDataQueryVariables>(GetSublessonInstructionsDataDocument, options);
        }
export type GetSublessonInstructionsDataQueryHookResult = ReturnType<typeof useGetSublessonInstructionsDataQuery>;
export type GetSublessonInstructionsDataLazyQueryHookResult = ReturnType<typeof useGetSublessonInstructionsDataLazyQuery>;
export type GetSublessonInstructionsDataQueryResult = Apollo.QueryResult<GetSublessonInstructionsDataQuery, GetSublessonInstructionsDataQueryVariables>;
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

/**
 * __useGetExampleDataQuery__
 *
 * To run a query within a React component, call `useGetExampleDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExampleDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExampleDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExampleDataQuery(baseOptions?: Apollo.QueryHookOptions<GetExampleDataQuery, GetExampleDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExampleDataQuery, GetExampleDataQueryVariables>(GetExampleDataDocument, options);
      }
export function useGetExampleDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExampleDataQuery, GetExampleDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExampleDataQuery, GetExampleDataQueryVariables>(GetExampleDataDocument, options);
        }
export type GetExampleDataQueryHookResult = ReturnType<typeof useGetExampleDataQuery>;
export type GetExampleDataLazyQueryHookResult = ReturnType<typeof useGetExampleDataLazyQuery>;
export type GetExampleDataQueryResult = Apollo.QueryResult<GetExampleDataQuery, GetExampleDataQueryVariables>;
export const GetLessonDataDocument = gql`
    query getLessonData($slug: String!) {
  lesson(where: {slug: $slug}) {
    name
    sublessons {
      description
      name
      sublessonChallenges {
        challenge {
          ... on CodeChallenge {
            prompt
            codeChallengeTests {
              label
              internalTest
            }
          }
          ... on MultipleChoiceChallenge {
            correctOptionIndex
            options
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetLessonDataQuery__
 *
 * To run a query within a React component, call `useGetLessonDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLessonDataQuery(baseOptions: Apollo.QueryHookOptions<GetLessonDataQuery, GetLessonDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonDataQuery, GetLessonDataQueryVariables>(GetLessonDataDocument, options);
      }
export function useGetLessonDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonDataQuery, GetLessonDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonDataQuery, GetLessonDataQueryVariables>(GetLessonDataDocument, options);
        }
export type GetLessonDataQueryHookResult = ReturnType<typeof useGetLessonDataQuery>;
export type GetLessonDataLazyQueryHookResult = ReturnType<typeof useGetLessonDataLazyQuery>;
export type GetLessonDataQueryResult = Apollo.QueryResult<GetLessonDataQuery, GetLessonDataQueryVariables>;