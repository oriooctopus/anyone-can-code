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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Challenge = CodeChallenge | MultipleChoiceChallenge;

export type CodeChallenge = {
  __typename?: 'CodeChallenge';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  startingCode?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<ComponentCodeChallengeTests>>>;
  prompt: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<CodeChallenge>>>;
};


export type CodeChallengeLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CodeChallengeAggregator = {
  __typename?: 'CodeChallengeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CodeChallengeConnection = {
  __typename?: 'CodeChallengeConnection';
  values?: Maybe<Array<Maybe<CodeChallenge>>>;
  groupBy?: Maybe<CodeChallengeGroupBy>;
  aggregate?: Maybe<CodeChallengeAggregator>;
};

export type CodeChallengeConnectionCreated_At = {
  __typename?: 'CodeChallengeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeConnectionId = {
  __typename?: 'CodeChallengeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeConnectionLocale = {
  __typename?: 'CodeChallengeConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeConnectionPrompt = {
  __typename?: 'CodeChallengeConnectionPrompt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeConnectionPublished_At = {
  __typename?: 'CodeChallengeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeConnectionStartingCode = {
  __typename?: 'CodeChallengeConnectionStartingCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeConnectionUpdated_At = {
  __typename?: 'CodeChallengeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CodeChallengeConnection>;
};

export type CodeChallengeGroupBy = {
  __typename?: 'CodeChallengeGroupBy';
  id?: Maybe<Array<Maybe<CodeChallengeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CodeChallengeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CodeChallengeConnectionUpdated_At>>>;
  startingCode?: Maybe<Array<Maybe<CodeChallengeConnectionStartingCode>>>;
  prompt?: Maybe<Array<Maybe<CodeChallengeConnectionPrompt>>>;
  locale?: Maybe<Array<Maybe<CodeChallengeConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<CodeChallengeConnectionPublished_At>>>;
};

export type CodeChallengeInput = {
  startingCode?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<ComponentCodeChallengeTestInput>>>;
  prompt: Scalars['String'];
  InternalLabel: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentCodeChallengeTestInput = {
  label: Scalars['String'];
  internalTest: Scalars['String'];
  furtherExplanation?: Maybe<Scalars['String']>;
};

export type ComponentCodeChallengeTests = {
  __typename?: 'ComponentCodeChallengeTests';
  id: Scalars['ID'];
  label: Scalars['String'];
  internalTest: Scalars['String'];
  furtherExplanation?: Maybe<Scalars['String']>;
};

export type ComponentMultipleChoiceChallengeOptionInput = {
  text: Scalars['String'];
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentMultipleChoiceChallengeOptions = {
  __typename?: 'ComponentMultipleChoiceChallengeOptions';
  id: Scalars['ID'];
  text: Scalars['String'];
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type ComponentSublessonchallengeChallenge = {
  __typename?: 'ComponentSublessonchallengeChallenge';
  id: Scalars['ID'];
  codeChallenge?: Maybe<CodeChallenge>;
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
};

export type ComponentSublessonchallengeChallengeInput = {
  codeChallenge?: Maybe<Scalars['ID']>;
  multipleChoiceChallenge?: Maybe<Scalars['ID']>;
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  modules?: Maybe<Array<Maybe<Modules>>>;
  localizations?: Maybe<Array<Maybe<Course>>>;
};


export type CourseModulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CourseLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CourseAggregator = {
  __typename?: 'CourseAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  values?: Maybe<Array<Maybe<Course>>>;
  groupBy?: Maybe<CourseGroupBy>;
  aggregate?: Maybe<CourseAggregator>;
};

export type CourseConnectionCreated_At = {
  __typename?: 'CourseConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionId = {
  __typename?: 'CourseConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionLocale = {
  __typename?: 'CourseConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionName = {
  __typename?: 'CourseConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionPublished_At = {
  __typename?: 'CourseConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseConnectionUpdated_At = {
  __typename?: 'CourseConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CourseConnection>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  id?: Maybe<Array<Maybe<CourseConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CourseConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CourseConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CourseConnectionName>>>;
  locale?: Maybe<Array<Maybe<CourseConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<CourseConnectionPublished_At>>>;
};

export type CourseInput = {
  modules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export enum Enum_Lessoncompletion_Confidence {
  NoUnderstanding = 'noUnderstanding',
  LargeGaps = 'largeGaps',
  UnderstoodButWithGaps = 'understoodButWithGaps',
  CompleteUnderstanding = 'completeUnderstanding'
}

export type Editor = {
  __typename?: 'Editor';
  code?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type InputId = {
  id: Scalars['ID'];
};


export type Lesson = {
  __typename?: 'Lesson';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublessons?: Maybe<Array<Maybe<Sublesson>>>;
  localizations?: Maybe<Array<Maybe<Lesson>>>;
};


export type LessonSublessonsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type LessonLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type LessonAggregator = {
  __typename?: 'LessonAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LessonCompletion = {
  __typename?: 'LessonCompletion';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  confidence?: Maybe<Enum_Lessoncompletion_Confidence>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type LessonCompletionAggregator = {
  __typename?: 'LessonCompletionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LessonCompletionConnection = {
  __typename?: 'LessonCompletionConnection';
  values?: Maybe<Array<Maybe<LessonCompletion>>>;
  groupBy?: Maybe<LessonCompletionGroupBy>;
  aggregate?: Maybe<LessonCompletionAggregator>;
};

export type LessonCompletionConnectionConfidence = {
  __typename?: 'LessonCompletionConnectionConfidence';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonCompletionConnection>;
};

export type LessonCompletionConnectionCreated_At = {
  __typename?: 'LessonCompletionConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonCompletionConnection>;
};

export type LessonCompletionConnectionId = {
  __typename?: 'LessonCompletionConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonCompletionConnection>;
};

export type LessonCompletionConnectionPublished_At = {
  __typename?: 'LessonCompletionConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonCompletionConnection>;
};

export type LessonCompletionConnectionUpdated_At = {
  __typename?: 'LessonCompletionConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonCompletionConnection>;
};

export type LessonCompletionGroupBy = {
  __typename?: 'LessonCompletionGroupBy';
  id?: Maybe<Array<Maybe<LessonCompletionConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LessonCompletionConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LessonCompletionConnectionUpdated_At>>>;
  confidence?: Maybe<Array<Maybe<LessonCompletionConnectionConfidence>>>;
  published_at?: Maybe<Array<Maybe<LessonCompletionConnectionPublished_At>>>;
};

export type LessonCompletionInput = {
  confidence?: Maybe<Enum_Lessoncompletion_Confidence>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  values?: Maybe<Array<Maybe<Lesson>>>;
  groupBy?: Maybe<LessonGroupBy>;
  aggregate?: Maybe<LessonAggregator>;
};

export type LessonConnectionCreated_At = {
  __typename?: 'LessonConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionId = {
  __typename?: 'LessonConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionLocale = {
  __typename?: 'LessonConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionName = {
  __typename?: 'LessonConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionPublished_At = {
  __typename?: 'LessonConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionSlug = {
  __typename?: 'LessonConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUpdated_At = {
  __typename?: 'LessonConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonGroupBy = {
  __typename?: 'LessonGroupBy';
  id?: Maybe<Array<Maybe<LessonConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LessonConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LessonConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<LessonConnectionSlug>>>;
  name?: Maybe<Array<Maybe<LessonConnectionName>>>;
  locale?: Maybe<Array<Maybe<LessonConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<LessonConnectionPublished_At>>>;
};

export type LessonInput = {
  slug: Scalars['String'];
  name: Scalars['String'];
  sublessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type ModuleInput = {
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Modules = {
  __typename?: 'Modules';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  localizations?: Maybe<Array<Maybe<Modules>>>;
};


export type ModulesLessonsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ModulesLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ModulesAggregator = {
  __typename?: 'ModulesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ModulesConnection = {
  __typename?: 'ModulesConnection';
  values?: Maybe<Array<Maybe<Modules>>>;
  groupBy?: Maybe<ModulesGroupBy>;
  aggregate?: Maybe<ModulesAggregator>;
};

export type ModulesConnectionCreated_At = {
  __typename?: 'ModulesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ModulesConnection>;
};

export type ModulesConnectionId = {
  __typename?: 'ModulesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ModulesConnection>;
};

export type ModulesConnectionLocale = {
  __typename?: 'ModulesConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ModulesConnection>;
};

export type ModulesConnectionName = {
  __typename?: 'ModulesConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ModulesConnection>;
};

export type ModulesConnectionPublished_At = {
  __typename?: 'ModulesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ModulesConnection>;
};

export type ModulesConnectionUpdated_At = {
  __typename?: 'ModulesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ModulesConnection>;
};

export type ModulesGroupBy = {
  __typename?: 'ModulesGroupBy';
  id?: Maybe<Array<Maybe<ModulesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ModulesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ModulesConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ModulesConnectionName>>>;
  locale?: Maybe<Array<Maybe<ModulesConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<ModulesConnectionPublished_At>>>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | CodeChallenge | CodeChallengeConnection | CodeChallengeAggregator | CodeChallengeGroupBy | CodeChallengeConnectionId | CodeChallengeConnectionCreated_At | CodeChallengeConnectionUpdated_At | CodeChallengeConnectionStartingCode | CodeChallengeConnectionPrompt | CodeChallengeConnectionLocale | CodeChallengeConnectionPublished_At | CreateCodeChallengePayload | UpdateCodeChallengePayload | DeleteCodeChallengePayload | Course | CourseConnection | CourseAggregator | CourseGroupBy | CourseConnectionId | CourseConnectionCreated_At | CourseConnectionUpdated_At | CourseConnectionName | CourseConnectionLocale | CourseConnectionPublished_At | CreateCoursePayload | UpdateCoursePayload | DeleteCoursePayload | LessonCompletion | LessonCompletionConnection | LessonCompletionAggregator | LessonCompletionGroupBy | LessonCompletionConnectionId | LessonCompletionConnectionCreated_At | LessonCompletionConnectionUpdated_At | LessonCompletionConnectionConfidence | LessonCompletionConnectionPublished_At | CreateLessonCompletionPayload | UpdateLessonCompletionPayload | DeleteLessonCompletionPayload | Lesson | LessonConnection | LessonAggregator | LessonGroupBy | LessonConnectionId | LessonConnectionCreated_At | LessonConnectionUpdated_At | LessonConnectionSlug | LessonConnectionName | LessonConnectionLocale | LessonConnectionPublished_At | CreateLessonPayload | UpdateLessonPayload | DeleteLessonPayload | Modules | ModulesConnection | ModulesAggregator | ModulesGroupBy | ModulesConnectionId | ModulesConnectionCreated_At | ModulesConnectionUpdated_At | ModulesConnectionName | ModulesConnectionLocale | ModulesConnectionPublished_At | CreateModulePayload | UpdateModulePayload | DeleteModulePayload | MultipleChoiceChallenge | MultipleChoiceChallengeConnection | MultipleChoiceChallengeAggregator | MultipleChoiceChallengeGroupBy | MultipleChoiceChallengeConnectionId | MultipleChoiceChallengeConnectionCreated_At | MultipleChoiceChallengeConnectionUpdated_At | MultipleChoiceChallengeConnectionPrompt | MultipleChoiceChallengeConnectionPublished_At | CreateMultipleChoiceChallengePayload | UpdateMultipleChoiceChallengePayload | DeleteMultipleChoiceChallengePayload | Sublesson | SublessonConnection | SublessonAggregator | SublessonGroupBy | SublessonConnectionId | SublessonConnectionCreated_At | SublessonConnectionUpdated_At | SublessonConnectionSlug | SublessonConnectionLesson | SublessonConnectionDescription | SublessonConnectionName | SublessonConnectionPublished_At | CreateSublessonPayload | UpdateSublessonPayload | DeleteSublessonPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentCodeChallengeTests | ComponentMultipleChoiceChallengeOptions | ComponentSublessonchallengeChallenge;

export type MultipleChoiceChallenge = {
  __typename?: 'MultipleChoiceChallenge';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  options?: Maybe<Array<Maybe<ComponentMultipleChoiceChallengeOptions>>>;
  prompt: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type MultipleChoiceChallengeAggregator = {
  __typename?: 'MultipleChoiceChallengeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MultipleChoiceChallengeConnection = {
  __typename?: 'MultipleChoiceChallengeConnection';
  values?: Maybe<Array<Maybe<MultipleChoiceChallenge>>>;
  groupBy?: Maybe<MultipleChoiceChallengeGroupBy>;
  aggregate?: Maybe<MultipleChoiceChallengeAggregator>;
};

export type MultipleChoiceChallengeConnectionCreated_At = {
  __typename?: 'MultipleChoiceChallengeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MultipleChoiceChallengeConnection>;
};

export type MultipleChoiceChallengeConnectionId = {
  __typename?: 'MultipleChoiceChallengeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MultipleChoiceChallengeConnection>;
};

export type MultipleChoiceChallengeConnectionPrompt = {
  __typename?: 'MultipleChoiceChallengeConnectionPrompt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MultipleChoiceChallengeConnection>;
};

export type MultipleChoiceChallengeConnectionPublished_At = {
  __typename?: 'MultipleChoiceChallengeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MultipleChoiceChallengeConnection>;
};

export type MultipleChoiceChallengeConnectionUpdated_At = {
  __typename?: 'MultipleChoiceChallengeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MultipleChoiceChallengeConnection>;
};

export type MultipleChoiceChallengeGroupBy = {
  __typename?: 'MultipleChoiceChallengeGroupBy';
  id?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionUpdated_At>>>;
  prompt?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionPrompt>>>;
  published_at?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionPublished_At>>>;
};

export type MultipleChoiceChallengeInput = {
  options?: Maybe<Array<Maybe<ComponentMultipleChoiceChallengeOptionInput>>>;
  prompt: Scalars['String'];
  InternalLabel?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCodeChallenge?: Maybe<CreateCodeChallengePayload>;
  createCodeChallengeLocalization: CodeChallenge;
  createCourse?: Maybe<CreateCoursePayload>;
  createCourseLocalization: Course;
  createLesson?: Maybe<CreateLessonPayload>;
  createLessonCompletion?: Maybe<CreateLessonCompletionPayload>;
  createLessonLocalization: Lesson;
  createModule?: Maybe<CreateModulePayload>;
  createModuleLocalization: Modules;
  createMultipleChoiceChallenge?: Maybe<CreateMultipleChoiceChallengePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createSublesson?: Maybe<CreateSublessonPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteCodeChallenge?: Maybe<DeleteCodeChallengePayload>;
  deleteCourse?: Maybe<DeleteCoursePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteLesson?: Maybe<DeleteLessonPayload>;
  deleteLessonCompletion?: Maybe<DeleteLessonCompletionPayload>;
  deleteModule?: Maybe<DeleteModulePayload>;
  deleteMultipleChoiceChallenge?: Maybe<DeleteMultipleChoiceChallengePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteSublesson?: Maybe<DeleteSublessonPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  setEditorCode?: Maybe<Scalars['String']>;
  updateCodeChallenge?: Maybe<UpdateCodeChallengePayload>;
  updateCourse?: Maybe<UpdateCoursePayload>;
  updateFileInfo: UploadFile;
  updateLesson?: Maybe<UpdateLessonPayload>;
  updateLessonCompletion?: Maybe<UpdateLessonCompletionPayload>;
  updateModule?: Maybe<UpdateModulePayload>;
  updateMultipleChoiceChallenge?: Maybe<UpdateMultipleChoiceChallengePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateSublesson?: Maybe<UpdateSublessonPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateCodeChallengeArgs = {
  input?: Maybe<CreateCodeChallengeInput>;
};


export type MutationCreateCodeChallengeLocalizationArgs = {
  input: UpdateCodeChallengeInput;
};


export type MutationCreateCourseArgs = {
  input?: Maybe<CreateCourseInput>;
};


export type MutationCreateCourseLocalizationArgs = {
  input: UpdateCourseInput;
};


export type MutationCreateLessonArgs = {
  input?: Maybe<CreateLessonInput>;
};


export type MutationCreateLessonCompletionArgs = {
  input?: Maybe<CreateLessonCompletionInput>;
};


export type MutationCreateLessonLocalizationArgs = {
  input: UpdateLessonInput;
};


export type MutationCreateModuleArgs = {
  input?: Maybe<CreateModuleInput>;
};


export type MutationCreateModuleLocalizationArgs = {
  input: UpdateModuleInput;
};


export type MutationCreateMultipleChoiceChallengeArgs = {
  input?: Maybe<CreateMultipleChoiceChallengeInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateSublessonArgs = {
  input?: Maybe<CreateSublessonInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationDeleteCodeChallengeArgs = {
  input?: Maybe<DeleteCodeChallengeInput>;
};


export type MutationDeleteCourseArgs = {
  input?: Maybe<DeleteCourseInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeleteLessonArgs = {
  input?: Maybe<DeleteLessonInput>;
};


export type MutationDeleteLessonCompletionArgs = {
  input?: Maybe<DeleteLessonCompletionInput>;
};


export type MutationDeleteModuleArgs = {
  input?: Maybe<DeleteModuleInput>;
};


export type MutationDeleteMultipleChoiceChallengeArgs = {
  input?: Maybe<DeleteMultipleChoiceChallengeInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationDeleteSublessonArgs = {
  input?: Maybe<DeleteSublessonInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationSetEditorCodeArgs = {
  code: Scalars['String'];
};


export type MutationUpdateCodeChallengeArgs = {
  input?: Maybe<UpdateCodeChallengeInput>;
};


export type MutationUpdateCourseArgs = {
  input?: Maybe<UpdateCourseInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateLessonArgs = {
  input?: Maybe<UpdateLessonInput>;
};


export type MutationUpdateLessonCompletionArgs = {
  input?: Maybe<UpdateLessonCompletionInput>;
};


export type MutationUpdateModuleArgs = {
  input?: Maybe<UpdateModuleInput>;
};


export type MutationUpdateMultipleChoiceChallengeArgs = {
  input?: Maybe<UpdateMultipleChoiceChallengeInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpdateSublessonArgs = {
  input?: Maybe<UpdateSublessonInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  codeChallenge?: Maybe<CodeChallenge>;
  codeChallenges?: Maybe<Array<Maybe<CodeChallenge>>>;
  codeChallengesConnection?: Maybe<CodeChallengeConnection>;
  course?: Maybe<Course>;
  courses?: Maybe<Array<Maybe<Course>>>;
  coursesConnection?: Maybe<CourseConnection>;
  editor?: Maybe<Editor>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  getSublessonBySlugs: Sublesson;
  lesson?: Maybe<Lesson>;
  lessonCompletion?: Maybe<LessonCompletion>;
  lessonCompletions?: Maybe<Array<Maybe<LessonCompletion>>>;
  lessonCompletionsConnection?: Maybe<LessonCompletionConnection>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  lessonsConnection?: Maybe<LessonConnection>;
  me?: Maybe<UsersPermissionsMe>;
  module?: Maybe<Modules>;
  modules?: Maybe<Array<Maybe<Modules>>>;
  modulesConnection?: Maybe<ModulesConnection>;
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
  multipleChoiceChallenges?: Maybe<Array<Maybe<MultipleChoiceChallenge>>>;
  multipleChoiceChallengesConnection?: Maybe<MultipleChoiceChallengeConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  sublesson?: Maybe<Sublesson>;
  sublessons?: Maybe<Array<Maybe<Sublesson>>>;
  sublessonsConnection?: Maybe<SublessonConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryCodeChallengeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCodeChallengesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCodeChallengesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCoursesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCoursesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGetSublessonBySlugsArgs = {
  lessonSlug: Scalars['String'];
  sublessonSlug: Scalars['String'];
  id: Scalars['ID'];
};


export type QueryLessonArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLessonCompletionArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLessonCompletionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryLessonCompletionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryLessonsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryModuleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryModulesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryModulesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMultipleChoiceChallengeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMultipleChoiceChallengesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMultipleChoiceChallengesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySublessonArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySublessonsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySublessonsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Sublesson = {
  __typename?: 'Sublesson';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  lesson?: Maybe<Lesson>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  challenges?: Maybe<Array<Maybe<ComponentSublessonchallengeChallenge>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SublessonAggregator = {
  __typename?: 'SublessonAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SublessonConnection = {
  __typename?: 'SublessonConnection';
  values?: Maybe<Array<Maybe<Sublesson>>>;
  groupBy?: Maybe<SublessonGroupBy>;
  aggregate?: Maybe<SublessonAggregator>;
};

export type SublessonConnectionCreated_At = {
  __typename?: 'SublessonConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionDescription = {
  __typename?: 'SublessonConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionId = {
  __typename?: 'SublessonConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionLesson = {
  __typename?: 'SublessonConnectionLesson';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionName = {
  __typename?: 'SublessonConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionPublished_At = {
  __typename?: 'SublessonConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionSlug = {
  __typename?: 'SublessonConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonConnectionUpdated_At = {
  __typename?: 'SublessonConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SublessonConnection>;
};

export type SublessonGroupBy = {
  __typename?: 'SublessonGroupBy';
  id?: Maybe<Array<Maybe<SublessonConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SublessonConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SublessonConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<SublessonConnectionSlug>>>;
  lesson?: Maybe<Array<Maybe<SublessonConnectionLesson>>>;
  description?: Maybe<Array<Maybe<SublessonConnectionDescription>>>;
  name?: Maybe<Array<Maybe<SublessonConnectionName>>>;
  published_at?: Maybe<Array<Maybe<SublessonConnectionPublished_At>>>;
};

export type SublessonInput = {
  slug?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  challenges?: Maybe<Array<Maybe<ComponentSublessonchallengeChallengeInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateCodeChallengeInput = {
  data?: Maybe<CodeChallengeInput>;
};

export type CreateCodeChallengePayload = {
  __typename?: 'createCodeChallengePayload';
  codeChallenge?: Maybe<CodeChallenge>;
};

export type CreateCourseInput = {
  data?: Maybe<CourseInput>;
};

export type CreateCoursePayload = {
  __typename?: 'createCoursePayload';
  course?: Maybe<Course>;
};

export type CreateLessonCompletionInput = {
  data?: Maybe<LessonCompletionInput>;
};

export type CreateLessonCompletionPayload = {
  __typename?: 'createLessonCompletionPayload';
  lessonCompletion?: Maybe<LessonCompletion>;
};

export type CreateLessonInput = {
  data?: Maybe<LessonInput>;
};

export type CreateLessonPayload = {
  __typename?: 'createLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type CreateModuleInput = {
  data?: Maybe<ModuleInput>;
};

export type CreateModulePayload = {
  __typename?: 'createModulePayload';
  module?: Maybe<Modules>;
};

export type CreateMultipleChoiceChallengeInput = {
  data?: Maybe<MultipleChoiceChallengeInput>;
};

export type CreateMultipleChoiceChallengePayload = {
  __typename?: 'createMultipleChoiceChallengePayload';
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateSublessonInput = {
  data?: Maybe<SublessonInput>;
};

export type CreateSublessonPayload = {
  __typename?: 'createSublessonPayload';
  sublesson?: Maybe<Sublesson>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCodeChallengeInput = {
  where?: Maybe<InputId>;
};

export type DeleteCodeChallengePayload = {
  __typename?: 'deleteCodeChallengePayload';
  codeChallenge?: Maybe<CodeChallenge>;
};

export type DeleteCourseInput = {
  where?: Maybe<InputId>;
};

export type DeleteCoursePayload = {
  __typename?: 'deleteCoursePayload';
  course?: Maybe<Course>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteLessonCompletionInput = {
  where?: Maybe<InputId>;
};

export type DeleteLessonCompletionPayload = {
  __typename?: 'deleteLessonCompletionPayload';
  lessonCompletion?: Maybe<LessonCompletion>;
};

export type DeleteLessonInput = {
  where?: Maybe<InputId>;
};

export type DeleteLessonPayload = {
  __typename?: 'deleteLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type DeleteModuleInput = {
  where?: Maybe<InputId>;
};

export type DeleteModulePayload = {
  __typename?: 'deleteModulePayload';
  module?: Maybe<Modules>;
};

export type DeleteMultipleChoiceChallengeInput = {
  where?: Maybe<InputId>;
};

export type DeleteMultipleChoiceChallengePayload = {
  __typename?: 'deleteMultipleChoiceChallengePayload';
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSublessonInput = {
  where?: Maybe<InputId>;
};

export type DeleteSublessonPayload = {
  __typename?: 'deleteSublessonPayload';
  sublesson?: Maybe<Sublesson>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCodeChallengeInput = {
  startingCode?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<EditComponentCodeChallengeTestInput>>>;
  prompt?: Maybe<Scalars['String']>;
  InternalLabel?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentCodeChallengeTestInput = {
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  internalTest?: Maybe<Scalars['String']>;
  furtherExplanation?: Maybe<Scalars['String']>;
};

export type EditComponentMultipleChoiceChallengeOptionInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
};

export type EditComponentSublessonchallengeChallengeInput = {
  id?: Maybe<Scalars['ID']>;
  codeChallenge?: Maybe<Scalars['ID']>;
  multipleChoiceChallenge?: Maybe<Scalars['ID']>;
};

export type EditCourseInput = {
  modules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLessonCompletionInput = {
  confidence?: Maybe<Enum_Lessoncompletion_Confidence>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLessonInput = {
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sublessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditModuleInput = {
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMultipleChoiceChallengeInput = {
  options?: Maybe<Array<Maybe<EditComponentMultipleChoiceChallengeOptionInput>>>;
  prompt?: Maybe<Scalars['String']>;
  InternalLabel?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSublessonInput = {
  slug?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  challenges?: Maybe<Array<Maybe<EditComponentSublessonchallengeChallengeInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCodeChallengeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCodeChallengeInput>;
};

export type UpdateCodeChallengePayload = {
  __typename?: 'updateCodeChallengePayload';
  codeChallenge?: Maybe<CodeChallenge>;
};

export type UpdateCourseInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCourseInput>;
};

export type UpdateCoursePayload = {
  __typename?: 'updateCoursePayload';
  course?: Maybe<Course>;
};

export type UpdateLessonCompletionInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLessonCompletionInput>;
};

export type UpdateLessonCompletionPayload = {
  __typename?: 'updateLessonCompletionPayload';
  lessonCompletion?: Maybe<LessonCompletion>;
};

export type UpdateLessonInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLessonInput>;
};

export type UpdateLessonPayload = {
  __typename?: 'updateLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type UpdateModuleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditModuleInput>;
};

export type UpdateModulePayload = {
  __typename?: 'updateModulePayload';
  module?: Maybe<Modules>;
};

export type UpdateMultipleChoiceChallengeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMultipleChoiceChallengeInput>;
};

export type UpdateMultipleChoiceChallengePayload = {
  __typename?: 'updateMultipleChoiceChallengePayload';
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSublessonInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSublessonInput>;
};

export type UpdateSublessonPayload = {
  __typename?: 'updateSublessonPayload';
  sublesson?: Maybe<Sublesson>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CodeChallengeDataFragment = (
  { __typename?: 'CodeChallenge' }
  & Pick<CodeChallenge, 'id' | 'startingCode' | 'prompt'>
  & { tests?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentCodeChallengeTests' }
    & Pick<ComponentCodeChallengeTests, 'internalTest' | 'label'>
  )>>> }
);

export type MultipleChoiceChallengeDataFragment = (
  { __typename?: 'MultipleChoiceChallenge' }
  & Pick<MultipleChoiceChallenge, 'prompt'>
  & { options?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMultipleChoiceChallengeOptions' }
    & Pick<ComponentMultipleChoiceChallengeOptions, 'text' | 'isCorrect'>
  )>>> }
);

export type LessonProgressDataFragment = (
  { __typename?: 'Sublesson' }
  & Pick<Sublesson, 'name'>
  & { challenges?: Maybe<Array<Maybe<{ __typename: 'ComponentSublessonchallengeChallenge' }>>> }
);

export type GetExampleDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExampleDataQuery = (
  { __typename?: 'Query' }
  & { lessons?: Maybe<Array<Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'name'>
    & { sublessons?: Maybe<Array<Maybe<(
      { __typename?: 'Sublesson' }
      & Pick<Sublesson, 'name'>
    )>>> }
  )>>> }
);

export type SublessonInstructionsDataFragment = (
  { __typename?: 'Sublesson' }
  & Pick<Sublesson, 'description' | 'name'>
  & { lesson?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'name'>
  )>, challenges?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentSublessonchallengeChallenge' }
    & { codeChallenge?: Maybe<(
      { __typename?: 'CodeChallenge' }
      & CodeChallengeDataFragment
    )>, multipleChoiceChallenge?: Maybe<(
      { __typename?: 'MultipleChoiceChallenge' }
      & MultipleChoiceChallengeDataFragment
    )> }
  )>>> }
);

export type GetLessonDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLessonDataQuery = (
  { __typename?: 'Query' }
  & { lessons?: Maybe<Array<Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'name'>
    & { sublessons?: Maybe<Array<Maybe<(
      { __typename?: 'Sublesson' }
      & SublessonInstructionsDataFragment
      & LessonProgressDataFragment
    )>>> }
  )>>> }
);

export const LessonProgressDataFragmentDoc = gql`
    fragment lessonProgressData on Sublesson {
  name
  challenges {
    __typename
  }
}
    `;
export const CodeChallengeDataFragmentDoc = gql`
    fragment codeChallengeData on CodeChallenge {
  id
  tests {
    internalTest
    label
  }
  startingCode
  prompt
}
    `;
export const MultipleChoiceChallengeDataFragmentDoc = gql`
    fragment multipleChoiceChallengeData on MultipleChoiceChallenge {
  prompt
  options {
    text
    isCorrect
  }
}
    `;
export const SublessonInstructionsDataFragmentDoc = gql`
    fragment sublessonInstructionsData on Sublesson {
  description
  name
  lesson {
    name
  }
  challenges {
    codeChallenge {
      ...codeChallengeData
    }
    multipleChoiceChallenge {
      ...multipleChoiceChallengeData
    }
  }
}
    ${CodeChallengeDataFragmentDoc}
${MultipleChoiceChallengeDataFragmentDoc}`;
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
  lessons(where: {slug: $slug}) {
    name
    sublessons {
      ...sublessonInstructionsData
      ...lessonProgressData
    }
  }
}
    ${SublessonInstructionsDataFragmentDoc}
${LessonProgressDataFragmentDoc}`;

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