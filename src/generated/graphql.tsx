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
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Challenge = CodeChallenge | MultipleChoiceChallenge;

export type CodeChallenge = {
  __typename?: 'CodeChallenge';
  ChallengeMeta?: Maybe<ComponentChallengeChallenge>;
  Hint?: Maybe<Array<Maybe<ComponentCodeChallengeHint>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<CodeChallenge>>>;
  prompt: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  startingCode?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<ComponentCodeChallengeTests>>>;
  updated_at: Scalars['DateTime'];
};


export type CodeChallengeLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<CodeChallengeAggregator>;
  groupBy?: Maybe<CodeChallengeGroupBy>;
  values?: Maybe<Array<Maybe<CodeChallenge>>>;
};

export type CodeChallengeConnectionChallengeMeta = {
  __typename?: 'CodeChallengeConnectionChallengeMeta';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CodeChallengeConnectionCreated_At = {
  __typename?: 'CodeChallengeConnectionCreated_at';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CodeChallengeConnectionId = {
  __typename?: 'CodeChallengeConnectionId';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CodeChallengeConnectionLocale = {
  __typename?: 'CodeChallengeConnectionLocale';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CodeChallengeConnectionPrompt = {
  __typename?: 'CodeChallengeConnectionPrompt';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CodeChallengeConnectionPublished_At = {
  __typename?: 'CodeChallengeConnectionPublished_at';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CodeChallengeConnectionStartingCode = {
  __typename?: 'CodeChallengeConnectionStartingCode';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CodeChallengeConnectionUpdated_At = {
  __typename?: 'CodeChallengeConnectionUpdated_at';
  connection?: Maybe<CodeChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CodeChallengeGroupBy = {
  __typename?: 'CodeChallengeGroupBy';
  ChallengeMeta?: Maybe<Array<Maybe<CodeChallengeConnectionChallengeMeta>>>;
  created_at?: Maybe<Array<Maybe<CodeChallengeConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CodeChallengeConnectionId>>>;
  locale?: Maybe<Array<Maybe<CodeChallengeConnectionLocale>>>;
  prompt?: Maybe<Array<Maybe<CodeChallengeConnectionPrompt>>>;
  published_at?: Maybe<Array<Maybe<CodeChallengeConnectionPublished_At>>>;
  startingCode?: Maybe<Array<Maybe<CodeChallengeConnectionStartingCode>>>;
  updated_at?: Maybe<Array<Maybe<CodeChallengeConnectionUpdated_At>>>;
};

export type CodeChallengeInput = {
  ChallengeMeta: ComponentChallengeChallengeInput;
  Hint?: Maybe<Array<Maybe<ComponentCodeChallengeHintInput>>>;
  InternalLabel: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  internalNotes?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  prompt: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  startingCode?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<ComponentCodeChallengeTestInput>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentChallengeChallenge = {
  __typename?: 'ComponentChallengeChallenge';
  difficulty: Enum_Componentchallengechallenge_Difficulty;
  id: Scalars['ID'];
  lessonOnly?: Maybe<Scalars['Boolean']>;
};

export type ComponentChallengeChallengeInput = {
  difficulty?: Maybe<Enum_Componentchallengechallenge_Difficulty>;
  lessonOnly?: Maybe<Scalars['Boolean']>;
};

export type ComponentCodeChallengeHint = {
  __typename?: 'ComponentCodeChallengeHint';
  id: Scalars['ID'];
  recommendTimeBeforeViewing?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
};

export type ComponentCodeChallengeHintInput = {
  recommendTimeBeforeViewing?: Maybe<Scalars['Float']>;
  text: Scalars['String'];
};

export type ComponentCodeChallengeTestInput = {
  furtherExplanation?: Maybe<Scalars['String']>;
  internalTest: Scalars['String'];
  label: Scalars['String'];
};

export type ComponentCodeChallengeTests = {
  __typename?: 'ComponentCodeChallengeTests';
  furtherExplanation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internalTest: Scalars['String'];
  label: Scalars['String'];
};

export type ComponentModuleModuleLesson = {
  __typename?: 'ComponentModuleModuleLesson';
  id: Scalars['ID'];
  lesson?: Maybe<Lesson>;
};

export type ComponentModuleModuleLessonInput = {
  lesson?: Maybe<Scalars['ID']>;
};

export type ComponentModuleModuleRowInput = {
  Lesson?: Maybe<Array<Maybe<ComponentModuleModuleLessonInput>>>;
};

export type ComponentModuleModuleRows = {
  __typename?: 'ComponentModuleModuleRows';
  Lesson?: Maybe<Array<Maybe<ComponentModuleModuleLesson>>>;
  id: Scalars['ID'];
};

export type ComponentMultipleChoiceChallengeOptionInput = {
  incorrectChoiceExplanation?: Maybe<Scalars['String']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type ComponentMultipleChoiceChallengeOptions = {
  __typename?: 'ComponentMultipleChoiceChallengeOptions';
  id: Scalars['ID'];
  incorrectChoiceExplanation?: Maybe<Scalars['String']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type ComponentSublessonSublessonDescriptionInput = {
  long?: Maybe<Scalars['String']>;
  medium: Scalars['String'];
  short?: Maybe<Scalars['String']>;
};

export type ComponentSublessonSublessonDescriptions = {
  __typename?: 'ComponentSublessonSublessonDescriptions';
  id: Scalars['ID'];
  long?: Maybe<Scalars['String']>;
  medium: Scalars['String'];
  short?: Maybe<Scalars['String']>;
};

export type ComponentSublessonchallengeChallenge = {
  __typename?: 'ComponentSublessonchallengeChallenge';
  MinimumChallengeFrequency: Enum_Componentsublessonchallengechallenge_Minimumchallengefrequency;
  codeChallenge?: Maybe<CodeChallenge>;
  id: Scalars['ID'];
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
};

export type ComponentSublessonchallengeChallengeInput = {
  MinimumChallengeFrequency?: Maybe<Enum_Componentsublessonchallengechallenge_Minimumchallengefrequency>;
  codeChallenge?: Maybe<Scalars['ID']>;
  multipleChoiceChallenge?: Maybe<Scalars['ID']>;
};

export type Course = {
  __typename?: 'Course';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Course>>>;
  modules?: Maybe<Array<Maybe<Modules>>>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CourseLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CourseModulesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<CourseAggregator>;
  groupBy?: Maybe<CourseGroupBy>;
  values?: Maybe<Array<Maybe<Course>>>;
};

export type CourseConnectionCreated_At = {
  __typename?: 'CourseConnectionCreated_at';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CourseConnectionId = {
  __typename?: 'CourseConnectionId';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CourseConnectionLocale = {
  __typename?: 'CourseConnectionLocale';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionName = {
  __typename?: 'CourseConnectionName';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionPublished_At = {
  __typename?: 'CourseConnectionPublished_at';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CourseConnectionSlug = {
  __typename?: 'CourseConnectionSlug';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CourseConnectionUpdated_At = {
  __typename?: 'CourseConnectionUpdated_at';
  connection?: Maybe<CourseConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  created_at?: Maybe<Array<Maybe<CourseConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<CourseConnectionId>>>;
  locale?: Maybe<Array<Maybe<CourseConnectionLocale>>>;
  name?: Maybe<Array<Maybe<CourseConnectionName>>>;
  published_at?: Maybe<Array<Maybe<CourseConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<CourseConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<CourseConnectionUpdated_At>>>;
};

export type CourseInput = {
  created_by?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  modules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Componentchallengechallenge_Difficulty {
  Easy = 'easy',
  ExtraHard = 'extraHard',
  Hard = 'hard',
  Medium = 'medium'
}

export enum Enum_Componentsublessonchallengechallenge_Minimumchallengefrequency {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export enum Enum_Lessoncompletion_Confidence {
  CompleteUnderstanding = 'completeUnderstanding',
  LargeGaps = 'largeGaps',
  NoUnderstanding = 'noUnderstanding',
  UnderstoodButWithGaps = 'understoodButWithGaps'
}

export enum Enum_Sublessonchallenge_Difficulty {
  Easy = 'easy',
  Hard = 'hard',
  Medium = 'medium'
}

export enum Enum_Sublessonchallenge_Minimumfrequencypreference {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type Lesson = {
  __typename?: 'Lesson';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  internalNotes?: Maybe<Scalars['String']>;
  isHard?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Lesson>>>;
  module?: Maybe<Modules>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  sublessons?: Maybe<Array<Maybe<Sublesson>>>;
  updated_at: Scalars['DateTime'];
};


export type LessonLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type LessonSublessonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  confidence?: Maybe<Enum_Lessoncompletion_Confidence>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type LessonCompletionAggregator = {
  __typename?: 'LessonCompletionAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LessonCompletionConnection = {
  __typename?: 'LessonCompletionConnection';
  aggregate?: Maybe<LessonCompletionAggregator>;
  groupBy?: Maybe<LessonCompletionGroupBy>;
  values?: Maybe<Array<Maybe<LessonCompletion>>>;
};

export type LessonCompletionConnectionConfidence = {
  __typename?: 'LessonCompletionConnectionConfidence';
  connection?: Maybe<LessonCompletionConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LessonCompletionConnectionCreated_At = {
  __typename?: 'LessonCompletionConnectionCreated_at';
  connection?: Maybe<LessonCompletionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LessonCompletionConnectionId = {
  __typename?: 'LessonCompletionConnectionId';
  connection?: Maybe<LessonCompletionConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LessonCompletionConnectionPublished_At = {
  __typename?: 'LessonCompletionConnectionPublished_at';
  connection?: Maybe<LessonCompletionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LessonCompletionConnectionUpdated_At = {
  __typename?: 'LessonCompletionConnectionUpdated_at';
  connection?: Maybe<LessonCompletionConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LessonCompletionGroupBy = {
  __typename?: 'LessonCompletionGroupBy';
  confidence?: Maybe<Array<Maybe<LessonCompletionConnectionConfidence>>>;
  created_at?: Maybe<Array<Maybe<LessonCompletionConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<LessonCompletionConnectionId>>>;
  published_at?: Maybe<Array<Maybe<LessonCompletionConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<LessonCompletionConnectionUpdated_At>>>;
};

export type LessonCompletionInput = {
  confidence?: Maybe<Enum_Lessoncompletion_Confidence>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  aggregate?: Maybe<LessonAggregator>;
  groupBy?: Maybe<LessonGroupBy>;
  values?: Maybe<Array<Maybe<Lesson>>>;
};

export type LessonConnectionCreated_At = {
  __typename?: 'LessonConnectionCreated_at';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LessonConnectionId = {
  __typename?: 'LessonConnectionId';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LessonConnectionInternalNotes = {
  __typename?: 'LessonConnectionInternalNotes';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LessonConnectionIsHard = {
  __typename?: 'LessonConnectionIsHard';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type LessonConnectionLocale = {
  __typename?: 'LessonConnectionLocale';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LessonConnectionModule = {
  __typename?: 'LessonConnectionModule';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type LessonConnectionName = {
  __typename?: 'LessonConnectionName';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LessonConnectionPublished_At = {
  __typename?: 'LessonConnectionPublished_at';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LessonConnectionSlug = {
  __typename?: 'LessonConnectionSlug';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['String']>;
};

export type LessonConnectionUpdated_At = {
  __typename?: 'LessonConnectionUpdated_at';
  connection?: Maybe<LessonConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type LessonGroupBy = {
  __typename?: 'LessonGroupBy';
  created_at?: Maybe<Array<Maybe<LessonConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<LessonConnectionId>>>;
  internalNotes?: Maybe<Array<Maybe<LessonConnectionInternalNotes>>>;
  isHard?: Maybe<Array<Maybe<LessonConnectionIsHard>>>;
  locale?: Maybe<Array<Maybe<LessonConnectionLocale>>>;
  module?: Maybe<Array<Maybe<LessonConnectionModule>>>;
  name?: Maybe<Array<Maybe<LessonConnectionName>>>;
  published_at?: Maybe<Array<Maybe<LessonConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<LessonConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<LessonConnectionUpdated_At>>>;
};

export type LessonInput = {
  created_by?: Maybe<Scalars['ID']>;
  internalNotes?: Maybe<Scalars['String']>;
  isHard?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  module?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  sublessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ModuleInput = {
  created_by?: Maybe<Scalars['ID']>;
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Modules = {
  __typename?: 'Modules';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Modules>>>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};


export type ModulesLessonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ModulesLocalizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<ModulesAggregator>;
  groupBy?: Maybe<ModulesGroupBy>;
  values?: Maybe<Array<Maybe<Modules>>>;
};

export type ModulesConnectionCreated_At = {
  __typename?: 'ModulesConnectionCreated_at';
  connection?: Maybe<ModulesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModulesConnectionId = {
  __typename?: 'ModulesConnectionId';
  connection?: Maybe<ModulesConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ModulesConnectionLocale = {
  __typename?: 'ModulesConnectionLocale';
  connection?: Maybe<ModulesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModulesConnectionName = {
  __typename?: 'ModulesConnectionName';
  connection?: Maybe<ModulesConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ModulesConnectionPublished_At = {
  __typename?: 'ModulesConnectionPublished_at';
  connection?: Maybe<ModulesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModulesConnectionUpdated_At = {
  __typename?: 'ModulesConnectionUpdated_at';
  connection?: Maybe<ModulesConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ModulesGroupBy = {
  __typename?: 'ModulesGroupBy';
  created_at?: Maybe<Array<Maybe<ModulesConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<ModulesConnectionId>>>;
  locale?: Maybe<Array<Maybe<ModulesConnectionLocale>>>;
  name?: Maybe<Array<Maybe<ModulesConnectionName>>>;
  published_at?: Maybe<Array<Maybe<ModulesConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ModulesConnectionUpdated_At>>>;
};

export type Morph = CodeChallenge | CodeChallengeAggregator | CodeChallengeConnection | CodeChallengeConnectionChallengeMeta | CodeChallengeConnectionCreated_At | CodeChallengeConnectionId | CodeChallengeConnectionLocale | CodeChallengeConnectionPrompt | CodeChallengeConnectionPublished_At | CodeChallengeConnectionStartingCode | CodeChallengeConnectionUpdated_At | CodeChallengeGroupBy | ComponentChallengeChallenge | ComponentCodeChallengeHint | ComponentCodeChallengeTests | ComponentModuleModuleLesson | ComponentModuleModuleRows | ComponentMultipleChoiceChallengeOptions | ComponentSublessonSublessonDescriptions | ComponentSublessonchallengeChallenge | Course | CourseAggregator | CourseConnection | CourseConnectionCreated_At | CourseConnectionId | CourseConnectionLocale | CourseConnectionName | CourseConnectionPublished_At | CourseConnectionSlug | CourseConnectionUpdated_At | CourseGroupBy | I18NLocale | Lesson | LessonAggregator | LessonCompletion | LessonCompletionAggregator | LessonCompletionConnection | LessonCompletionConnectionConfidence | LessonCompletionConnectionCreated_At | LessonCompletionConnectionId | LessonCompletionConnectionPublished_At | LessonCompletionConnectionUpdated_At | LessonCompletionGroupBy | LessonConnection | LessonConnectionCreated_At | LessonConnectionId | LessonConnectionInternalNotes | LessonConnectionIsHard | LessonConnectionLocale | LessonConnectionModule | LessonConnectionName | LessonConnectionPublished_At | LessonConnectionSlug | LessonConnectionUpdated_At | LessonGroupBy | Modules | ModulesAggregator | ModulesConnection | ModulesConnectionCreated_At | ModulesConnectionId | ModulesConnectionLocale | ModulesConnectionName | ModulesConnectionPublished_At | ModulesConnectionUpdated_At | ModulesGroupBy | MultipleChoiceChallenge | MultipleChoiceChallengeAggregator | MultipleChoiceChallengeConnection | MultipleChoiceChallengeConnectionCanSelectMultipleOptions | MultipleChoiceChallengeConnectionChallengeMeta | MultipleChoiceChallengeConnectionCreated_At | MultipleChoiceChallengeConnectionId | MultipleChoiceChallengeConnectionPrompt | MultipleChoiceChallengeConnectionPublished_At | MultipleChoiceChallengeConnectionUpdated_At | MultipleChoiceChallengeConnectionUseMarkdownForOptionsText | MultipleChoiceChallengeGroupBy | Sublesson | SublessonAggregator | SublessonChallenge | SublessonChallengeAggregator | SublessonChallengeConnection | SublessonChallengeConnectionChallenge | SublessonChallengeConnectionCreated_At | SublessonChallengeConnectionDifficulty | SublessonChallengeConnectionId | SublessonChallengeConnectionMinimumFrequencyPreference | SublessonChallengeConnectionPublished_At | SublessonChallengeConnectionSublesson | SublessonChallengeConnectionUpdated_At | SublessonChallengeGroupBy | SublessonConnection | SublessonConnectionCreated_At | SublessonConnectionDescriptions | SublessonConnectionId | SublessonConnectionLesson | SublessonConnectionMinimizeEditor | SublessonConnectionName | SublessonConnectionPersistCodeBetweenChallenges | SublessonConnectionPublished_At | SublessonConnectionUpdated_At | SublessonGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateCodeChallengePayload | CreateCoursePayload | CreateLessonCompletionPayload | CreateLessonPayload | CreateModulePayload | CreateMultipleChoiceChallengePayload | CreateRolePayload | CreateSublessonChallengePayload | CreateSublessonPayload | CreateUserPayload | DeleteCodeChallengePayload | DeleteCoursePayload | DeleteFilePayload | DeleteLessonCompletionPayload | DeleteLessonPayload | DeleteModulePayload | DeleteMultipleChoiceChallengePayload | DeleteRolePayload | DeleteSublessonChallengePayload | DeleteSublessonPayload | DeleteUserPayload | UpdateCodeChallengePayload | UpdateCoursePayload | UpdateLessonCompletionPayload | UpdateLessonPayload | UpdateModulePayload | UpdateMultipleChoiceChallengePayload | UpdateRolePayload | UpdateSublessonChallengePayload | UpdateSublessonPayload | UpdateUserPayload;

export type MultipleChoiceChallenge = {
  __typename?: 'MultipleChoiceChallenge';
  canSelectMultipleOptions?: Maybe<Scalars['Boolean']>;
  challengeMeta?: Maybe<ComponentChallengeChallenge>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  options?: Maybe<Array<Maybe<ComponentMultipleChoiceChallengeOptions>>>;
  prompt: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
  useMarkdownForOptionsText?: Maybe<Scalars['Boolean']>;
};

export type MultipleChoiceChallengeAggregator = {
  __typename?: 'MultipleChoiceChallengeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MultipleChoiceChallengeConnection = {
  __typename?: 'MultipleChoiceChallengeConnection';
  aggregate?: Maybe<MultipleChoiceChallengeAggregator>;
  groupBy?: Maybe<MultipleChoiceChallengeGroupBy>;
  values?: Maybe<Array<Maybe<MultipleChoiceChallenge>>>;
};

export type MultipleChoiceChallengeConnectionCanSelectMultipleOptions = {
  __typename?: 'MultipleChoiceChallengeConnectionCanSelectMultipleOptions';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type MultipleChoiceChallengeConnectionChallengeMeta = {
  __typename?: 'MultipleChoiceChallengeConnectionChallengeMeta';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MultipleChoiceChallengeConnectionCreated_At = {
  __typename?: 'MultipleChoiceChallengeConnectionCreated_at';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MultipleChoiceChallengeConnectionId = {
  __typename?: 'MultipleChoiceChallengeConnectionId';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MultipleChoiceChallengeConnectionPrompt = {
  __typename?: 'MultipleChoiceChallengeConnectionPrompt';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MultipleChoiceChallengeConnectionPublished_At = {
  __typename?: 'MultipleChoiceChallengeConnectionPublished_at';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MultipleChoiceChallengeConnectionUpdated_At = {
  __typename?: 'MultipleChoiceChallengeConnectionUpdated_at';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MultipleChoiceChallengeConnectionUseMarkdownForOptionsText = {
  __typename?: 'MultipleChoiceChallengeConnectionUseMarkdownForOptionsText';
  connection?: Maybe<MultipleChoiceChallengeConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type MultipleChoiceChallengeGroupBy = {
  __typename?: 'MultipleChoiceChallengeGroupBy';
  canSelectMultipleOptions?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionCanSelectMultipleOptions>>>;
  challengeMeta?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionChallengeMeta>>>;
  created_at?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionId>>>;
  prompt?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionPrompt>>>;
  published_at?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionUpdated_At>>>;
  useMarkdownForOptionsText?: Maybe<Array<Maybe<MultipleChoiceChallengeConnectionUseMarkdownForOptionsText>>>;
};

export type MultipleChoiceChallengeInput = {
  InternalLabel?: Maybe<Scalars['String']>;
  canSelectMultipleOptions?: Maybe<Scalars['Boolean']>;
  challengeMeta: ComponentChallengeChallengeInput;
  created_by?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<ComponentMultipleChoiceChallengeOptionInput>>>;
  prompt: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
  useMarkdownForOptionsText?: Maybe<Scalars['Boolean']>;
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
  createSublessonChallenge?: Maybe<CreateSublessonChallengePayload>;
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
  deleteSublessonChallenge?: Maybe<DeleteSublessonChallengePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
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
  updateSublessonChallenge?: Maybe<UpdateSublessonChallengePayload>;
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


export type MutationCreateSublessonChallengeArgs = {
  input?: Maybe<CreateSublessonChallengeInput>;
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


export type MutationDeleteSublessonChallengeArgs = {
  input?: Maybe<DeleteSublessonChallengeInput>;
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
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
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


export type MutationUpdateSublessonChallengeArgs = {
  input?: Maybe<UpdateSublessonChallengeInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
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
  sublessonChallenge?: Maybe<SublessonChallenge>;
  sublessonChallenges?: Maybe<Array<Maybe<SublessonChallenge>>>;
  sublessonChallengesConnection?: Maybe<SublessonChallengeConnection>;
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
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCodeChallengesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCourseArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCoursesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCoursesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGetSublessonBySlugsArgs = {
  id: Scalars['ID'];
  lessonSlug: Scalars['String'];
  sublessonSlug: Scalars['String'];
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
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonCompletionsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryModuleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryModulesArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryModulesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMultipleChoiceChallengeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMultipleChoiceChallengesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMultipleChoiceChallengesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySublessonArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySublessonChallengeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySublessonChallengesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySublessonChallengesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySublessonsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySublessonsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Sublesson = {
  __typename?: 'Sublesson';
  challenges?: Maybe<Array<Maybe<ComponentSublessonchallengeChallenge>>>;
  created_at: Scalars['DateTime'];
  descriptions?: Maybe<ComponentSublessonSublessonDescriptions>;
  id: Scalars['ID'];
  lesson?: Maybe<Lesson>;
  minimizeEditor?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  persistCodeBetweenChallenges?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublessonChallenges?: Maybe<Array<Maybe<SublessonChallenge>>>;
  updated_at: Scalars['DateTime'];
};


export type SublessonSublessonChallengesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SublessonAggregator = {
  __typename?: 'SublessonAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SublessonChallenge = {
  __typename?: 'SublessonChallenge';
  challenge?: Maybe<ComponentSublessonchallengeChallenge>;
  created_at: Scalars['DateTime'];
  difficulty?: Maybe<Enum_Sublessonchallenge_Difficulty>;
  id: Scalars['ID'];
  minimumFrequencyPreference?: Maybe<Enum_Sublessonchallenge_Minimumfrequencypreference>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublesson?: Maybe<Sublesson>;
  updated_at: Scalars['DateTime'];
};

export type SublessonChallengeAggregator = {
  __typename?: 'SublessonChallengeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SublessonChallengeConnection = {
  __typename?: 'SublessonChallengeConnection';
  aggregate?: Maybe<SublessonChallengeAggregator>;
  groupBy?: Maybe<SublessonChallengeGroupBy>;
  values?: Maybe<Array<Maybe<SublessonChallenge>>>;
};

export type SublessonChallengeConnectionChallenge = {
  __typename?: 'SublessonChallengeConnectionChallenge';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SublessonChallengeConnectionCreated_At = {
  __typename?: 'SublessonChallengeConnectionCreated_at';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SublessonChallengeConnectionDifficulty = {
  __typename?: 'SublessonChallengeConnectionDifficulty';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SublessonChallengeConnectionId = {
  __typename?: 'SublessonChallengeConnectionId';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SublessonChallengeConnectionMinimumFrequencyPreference = {
  __typename?: 'SublessonChallengeConnectionMinimumFrequencyPreference';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SublessonChallengeConnectionPublished_At = {
  __typename?: 'SublessonChallengeConnectionPublished_at';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SublessonChallengeConnectionSublesson = {
  __typename?: 'SublessonChallengeConnectionSublesson';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SublessonChallengeConnectionUpdated_At = {
  __typename?: 'SublessonChallengeConnectionUpdated_at';
  connection?: Maybe<SublessonChallengeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SublessonChallengeGroupBy = {
  __typename?: 'SublessonChallengeGroupBy';
  challenge?: Maybe<Array<Maybe<SublessonChallengeConnectionChallenge>>>;
  created_at?: Maybe<Array<Maybe<SublessonChallengeConnectionCreated_At>>>;
  difficulty?: Maybe<Array<Maybe<SublessonChallengeConnectionDifficulty>>>;
  id?: Maybe<Array<Maybe<SublessonChallengeConnectionId>>>;
  minimumFrequencyPreference?: Maybe<Array<Maybe<SublessonChallengeConnectionMinimumFrequencyPreference>>>;
  published_at?: Maybe<Array<Maybe<SublessonChallengeConnectionPublished_At>>>;
  sublesson?: Maybe<Array<Maybe<SublessonChallengeConnectionSublesson>>>;
  updated_at?: Maybe<Array<Maybe<SublessonChallengeConnectionUpdated_At>>>;
};

export type SublessonChallengeInput = {
  challenge: ComponentSublessonchallengeChallengeInput;
  created_by?: Maybe<Scalars['ID']>;
  difficulty?: Maybe<Enum_Sublessonchallenge_Difficulty>;
  internalLabel: Scalars['String'];
  minimumFrequencyPreference?: Maybe<Enum_Sublessonchallenge_Minimumfrequencypreference>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublesson?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type SublessonConnection = {
  __typename?: 'SublessonConnection';
  aggregate?: Maybe<SublessonAggregator>;
  groupBy?: Maybe<SublessonGroupBy>;
  values?: Maybe<Array<Maybe<Sublesson>>>;
};

export type SublessonConnectionCreated_At = {
  __typename?: 'SublessonConnectionCreated_at';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SublessonConnectionDescriptions = {
  __typename?: 'SublessonConnectionDescriptions';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SublessonConnectionId = {
  __typename?: 'SublessonConnectionId';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SublessonConnectionLesson = {
  __typename?: 'SublessonConnectionLesson';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type SublessonConnectionMinimizeEditor = {
  __typename?: 'SublessonConnectionMinimizeEditor';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type SublessonConnectionName = {
  __typename?: 'SublessonConnectionName';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['String']>;
};

export type SublessonConnectionPersistCodeBetweenChallenges = {
  __typename?: 'SublessonConnectionPersistCodeBetweenChallenges';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type SublessonConnectionPublished_At = {
  __typename?: 'SublessonConnectionPublished_at';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SublessonConnectionUpdated_At = {
  __typename?: 'SublessonConnectionUpdated_at';
  connection?: Maybe<SublessonConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type SublessonGroupBy = {
  __typename?: 'SublessonGroupBy';
  created_at?: Maybe<Array<Maybe<SublessonConnectionCreated_At>>>;
  descriptions?: Maybe<Array<Maybe<SublessonConnectionDescriptions>>>;
  id?: Maybe<Array<Maybe<SublessonConnectionId>>>;
  lesson?: Maybe<Array<Maybe<SublessonConnectionLesson>>>;
  minimizeEditor?: Maybe<Array<Maybe<SublessonConnectionMinimizeEditor>>>;
  name?: Maybe<Array<Maybe<SublessonConnectionName>>>;
  persistCodeBetweenChallenges?: Maybe<Array<Maybe<SublessonConnectionPersistCodeBetweenChallenges>>>;
  published_at?: Maybe<Array<Maybe<SublessonConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<SublessonConnectionUpdated_At>>>;
};

export type SublessonInput = {
  InternalMaintenanceNotes?: Maybe<Scalars['String']>;
  challenges?: Maybe<Array<Maybe<ComponentSublessonchallengeChallengeInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  descriptions: ComponentSublessonSublessonDescriptionInput;
  lesson?: Maybe<Scalars['ID']>;
  minimizeEditor?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  persistCodeBetweenChallenges?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublessonChallenges?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
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
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
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

export type CreateSublessonChallengeInput = {
  data?: Maybe<SublessonChallengeInput>;
};

export type CreateSublessonChallengePayload = {
  __typename?: 'createSublessonChallengePayload';
  sublessonChallenge?: Maybe<SublessonChallenge>;
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

export type DeleteSublessonChallengeInput = {
  where?: Maybe<InputId>;
};

export type DeleteSublessonChallengePayload = {
  __typename?: 'deleteSublessonChallengePayload';
  sublessonChallenge?: Maybe<SublessonChallenge>;
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
  ChallengeMeta?: Maybe<EditComponentChallengeChallengeInput>;
  Hint?: Maybe<Array<Maybe<EditComponentCodeChallengeHintInput>>>;
  InternalLabel?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  internalNotes?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  prompt?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  startingCode?: Maybe<Scalars['String']>;
  tests?: Maybe<Array<Maybe<EditComponentCodeChallengeTestInput>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentChallengeChallengeInput = {
  difficulty?: Maybe<Enum_Componentchallengechallenge_Difficulty>;
  id?: Maybe<Scalars['ID']>;
  lessonOnly?: Maybe<Scalars['Boolean']>;
};

export type EditComponentCodeChallengeHintInput = {
  id?: Maybe<Scalars['ID']>;
  recommendTimeBeforeViewing?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
};

export type EditComponentCodeChallengeTestInput = {
  furtherExplanation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  internalTest?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type EditComponentModuleModuleLessonInput = {
  id?: Maybe<Scalars['ID']>;
  lesson?: Maybe<Scalars['ID']>;
};

export type EditComponentModuleModuleRowInput = {
  Lesson?: Maybe<Array<Maybe<EditComponentModuleModuleLessonInput>>>;
  id?: Maybe<Scalars['ID']>;
};

export type EditComponentMultipleChoiceChallengeOptionInput = {
  id?: Maybe<Scalars['ID']>;
  incorrectChoiceExplanation?: Maybe<Scalars['String']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type EditComponentSublessonSublessonDescriptionInput = {
  id?: Maybe<Scalars['ID']>;
  long?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
};

export type EditComponentSublessonchallengeChallengeInput = {
  MinimumChallengeFrequency?: Maybe<Enum_Componentsublessonchallengechallenge_Minimumchallengefrequency>;
  codeChallenge?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  multipleChoiceChallenge?: Maybe<Scalars['ID']>;
};

export type EditCourseInput = {
  created_by?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  modules?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditLessonCompletionInput = {
  confidence?: Maybe<Enum_Lessoncompletion_Confidence>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLessonInput = {
  created_by?: Maybe<Scalars['ID']>;
  internalNotes?: Maybe<Scalars['String']>;
  isHard?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  module?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  sublessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditModuleInput = {
  created_by?: Maybe<Scalars['ID']>;
  lessons?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMultipleChoiceChallengeInput = {
  InternalLabel?: Maybe<Scalars['String']>;
  canSelectMultipleOptions?: Maybe<Scalars['Boolean']>;
  challengeMeta?: Maybe<EditComponentChallengeChallengeInput>;
  created_by?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Maybe<EditComponentMultipleChoiceChallengeOptionInput>>>;
  prompt?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
  useMarkdownForOptionsText?: Maybe<Scalars['Boolean']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditSublessonChallengeInput = {
  challenge?: Maybe<EditComponentSublessonchallengeChallengeInput>;
  created_by?: Maybe<Scalars['ID']>;
  difficulty?: Maybe<Enum_Sublessonchallenge_Difficulty>;
  internalLabel?: Maybe<Scalars['String']>;
  minimumFrequencyPreference?: Maybe<Enum_Sublessonchallenge_Minimumfrequencypreference>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublesson?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSublessonInput = {
  InternalMaintenanceNotes?: Maybe<Scalars['String']>;
  challenges?: Maybe<Array<Maybe<EditComponentSublessonchallengeChallengeInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  descriptions?: Maybe<EditComponentSublessonSublessonDescriptionInput>;
  lesson?: Maybe<Scalars['ID']>;
  minimizeEditor?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  persistCodeBetweenChallenges?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  sublessonChallenges?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateCodeChallengeInput = {
  data?: Maybe<EditCodeChallengeInput>;
  where?: Maybe<InputId>;
};

export type UpdateCodeChallengePayload = {
  __typename?: 'updateCodeChallengePayload';
  codeChallenge?: Maybe<CodeChallenge>;
};

export type UpdateCourseInput = {
  data?: Maybe<EditCourseInput>;
  where?: Maybe<InputId>;
};

export type UpdateCoursePayload = {
  __typename?: 'updateCoursePayload';
  course?: Maybe<Course>;
};

export type UpdateLessonCompletionInput = {
  data?: Maybe<EditLessonCompletionInput>;
  where?: Maybe<InputId>;
};

export type UpdateLessonCompletionPayload = {
  __typename?: 'updateLessonCompletionPayload';
  lessonCompletion?: Maybe<LessonCompletion>;
};

export type UpdateLessonInput = {
  data?: Maybe<EditLessonInput>;
  where?: Maybe<InputId>;
};

export type UpdateLessonPayload = {
  __typename?: 'updateLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type UpdateModuleInput = {
  data?: Maybe<EditModuleInput>;
  where?: Maybe<InputId>;
};

export type UpdateModulePayload = {
  __typename?: 'updateModulePayload';
  module?: Maybe<Modules>;
};

export type UpdateMultipleChoiceChallengeInput = {
  data?: Maybe<EditMultipleChoiceChallengeInput>;
  where?: Maybe<InputId>;
};

export type UpdateMultipleChoiceChallengePayload = {
  __typename?: 'updateMultipleChoiceChallengePayload';
  multipleChoiceChallenge?: Maybe<MultipleChoiceChallenge>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSublessonChallengeInput = {
  data?: Maybe<EditSublessonChallengeInput>;
  where?: Maybe<InputId>;
};

export type UpdateSublessonChallengePayload = {
  __typename?: 'updateSublessonChallengePayload';
  sublessonChallenge?: Maybe<SublessonChallenge>;
};

export type UpdateSublessonInput = {
  data?: Maybe<EditSublessonInput>;
  where?: Maybe<InputId>;
};

export type UpdateSublessonPayload = {
  __typename?: 'updateSublessonPayload';
  sublesson?: Maybe<Sublesson>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CodeChallengeDataFragment = { __typename?: 'CodeChallenge', id: string, startingCode?: string | null | undefined, prompt: string, tests?: Array<{ __typename?: 'ComponentCodeChallengeTests', internalTest: string, label: string } | null | undefined> | null | undefined };

export type MultipleChoiceChallengeDataFragment = { __typename?: 'MultipleChoiceChallenge', id: string, prompt: string, canSelectMultipleOptions?: boolean | null | undefined, useMarkdownForOptionsText?: boolean | null | undefined, options?: Array<{ __typename?: 'ComponentMultipleChoiceChallengeOptions', text: string, isCorrect?: boolean | null | undefined, incorrectChoiceExplanation?: string | null | undefined } | null | undefined> | null | undefined };

export type LessonProgressDataFragment = { __typename?: 'Sublesson', name: string, challenges?: Array<{ __typename: 'ComponentSublessonchallengeChallenge' } | null | undefined> | null | undefined };

export type GetCourseMapOverlayDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetCourseMapOverlayDataQuery = { __typename?: 'Query', courses?: Array<{ __typename?: 'Course', name: string, modules?: Array<{ __typename?: 'Modules', name: string, lessons?: Array<{ __typename?: 'Lesson', name: string, slug: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type GetLessonDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLessonDataQuery = { __typename?: 'Query', lessons?: Array<{ __typename?: 'Lesson', name: string, sublessons?: Array<{ __typename?: 'Sublesson', name: string, descriptions?: { __typename?: 'ComponentSublessonSublessonDescriptions', short?: string | null | undefined, medium: string, long?: string | null | undefined } | null | undefined, lesson?: { __typename?: 'Lesson', name: string } | null | undefined, challenges?: Array<{ __typename: 'ComponentSublessonchallengeChallenge', codeChallenge?: { __typename?: 'CodeChallenge', id: string, startingCode?: string | null | undefined, prompt: string, tests?: Array<{ __typename?: 'ComponentCodeChallengeTests', internalTest: string, label: string } | null | undefined> | null | undefined } | null | undefined, multipleChoiceChallenge?: { __typename?: 'MultipleChoiceChallenge', id: string, prompt: string, canSelectMultipleOptions?: boolean | null | undefined, useMarkdownForOptionsText?: boolean | null | undefined, options?: Array<{ __typename?: 'ComponentMultipleChoiceChallengeOptions', text: string, isCorrect?: boolean | null | undefined, incorrectChoiceExplanation?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type GetAllLessonSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLessonSlugsQuery = { __typename?: 'Query', lessons?: Array<{ __typename?: 'Lesson', slug: string } | null | undefined> | null | undefined };

export type SublessonInstructionsDataFragment = { __typename?: 'Sublesson', name: string, descriptions?: { __typename?: 'ComponentSublessonSublessonDescriptions', short?: string | null | undefined, medium: string, long?: string | null | undefined } | null | undefined, lesson?: { __typename?: 'Lesson', name: string } | null | undefined, challenges?: Array<{ __typename?: 'ComponentSublessonchallengeChallenge', codeChallenge?: { __typename?: 'CodeChallenge', id: string, startingCode?: string | null | undefined, prompt: string, tests?: Array<{ __typename?: 'ComponentCodeChallengeTests', internalTest: string, label: string } | null | undefined> | null | undefined } | null | undefined, multipleChoiceChallenge?: { __typename?: 'MultipleChoiceChallenge', id: string, prompt: string, canSelectMultipleOptions?: boolean | null | undefined, useMarkdownForOptionsText?: boolean | null | undefined, options?: Array<{ __typename?: 'ComponentMultipleChoiceChallengeOptions', text: string, isCorrect?: boolean | null | undefined, incorrectChoiceExplanation?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined };

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
  id
  prompt
  options {
    text
    isCorrect
    incorrectChoiceExplanation
  }
  canSelectMultipleOptions
  useMarkdownForOptionsText
}
    `;
export const SublessonInstructionsDataFragmentDoc = gql`
    fragment sublessonInstructionsData on Sublesson {
  descriptions {
    short
    medium
    long
  }
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
export const GetCourseMapOverlayDataDocument = gql`
    query getCourseMapOverlayData($slug: String!) {
  courses(where: {slug: $slug}) {
    name
    modules {
      name
      lessons {
        name
        slug
      }
    }
  }
}
    `;

/**
 * __useGetCourseMapOverlayDataQuery__
 *
 * To run a query within a React component, call `useGetCourseMapOverlayDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseMapOverlayDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseMapOverlayDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCourseMapOverlayDataQuery(baseOptions: Apollo.QueryHookOptions<GetCourseMapOverlayDataQuery, GetCourseMapOverlayDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCourseMapOverlayDataQuery, GetCourseMapOverlayDataQueryVariables>(GetCourseMapOverlayDataDocument, options);
      }
export function useGetCourseMapOverlayDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCourseMapOverlayDataQuery, GetCourseMapOverlayDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCourseMapOverlayDataQuery, GetCourseMapOverlayDataQueryVariables>(GetCourseMapOverlayDataDocument, options);
        }
export type GetCourseMapOverlayDataQueryHookResult = ReturnType<typeof useGetCourseMapOverlayDataQuery>;
export type GetCourseMapOverlayDataLazyQueryHookResult = ReturnType<typeof useGetCourseMapOverlayDataLazyQuery>;
export type GetCourseMapOverlayDataQueryResult = Apollo.QueryResult<GetCourseMapOverlayDataQuery, GetCourseMapOverlayDataQueryVariables>;
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
export const GetAllLessonSlugsDocument = gql`
    query getAllLessonSlugs {
  lessons {
    slug
  }
}
    `;

/**
 * __useGetAllLessonSlugsQuery__
 *
 * To run a query within a React component, call `useGetAllLessonSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLessonSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLessonSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLessonSlugsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLessonSlugsQuery, GetAllLessonSlugsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLessonSlugsQuery, GetAllLessonSlugsQueryVariables>(GetAllLessonSlugsDocument, options);
      }
export function useGetAllLessonSlugsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLessonSlugsQuery, GetAllLessonSlugsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLessonSlugsQuery, GetAllLessonSlugsQueryVariables>(GetAllLessonSlugsDocument, options);
        }
export type GetAllLessonSlugsQueryHookResult = ReturnType<typeof useGetAllLessonSlugsQuery>;
export type GetAllLessonSlugsLazyQueryHookResult = ReturnType<typeof useGetAllLessonSlugsLazyQuery>;
export type GetAllLessonSlugsQueryResult = Apollo.QueryResult<GetAllLessonSlugsQuery, GetAllLessonSlugsQueryVariables>;