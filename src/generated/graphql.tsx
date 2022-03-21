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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  between: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  contains: Maybe<Scalars['Boolean']>;
  containsi: Maybe<Scalars['Boolean']>;
  endsWith: Maybe<Scalars['Boolean']>;
  eq: Maybe<Scalars['Boolean']>;
  gt: Maybe<Scalars['Boolean']>;
  gte: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt: Maybe<Scalars['Boolean']>;
  lte: Maybe<Scalars['Boolean']>;
  ne: Maybe<Scalars['Boolean']>;
  not: Maybe<BooleanFilterInput>;
  notContains: Maybe<Scalars['Boolean']>;
  notContainsi: Maybe<Scalars['Boolean']>;
  notIn: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  startsWith: Maybe<Scalars['Boolean']>;
};

export type CodeChallenge = {
  __typename?: 'CodeChallenge';
  MetaTest: Maybe<Array<Maybe<ComponentChallengeMetaTest>>>;
  category: Maybe<SublessonEntityResponse>;
  createdAt: Maybe<Scalars['DateTime']>;
  getStartingCodeFromPreviousChallenge: Maybe<Scalars['Boolean']>;
  hints: Maybe<Array<Maybe<ComponentChallengeChallengeHints>>>;
  prompt: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  startingCode: Maybe<Scalars['String']>;
  tests: Maybe<Array<Maybe<ComponentChallengeCodeChallengeTest>>>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type CodeChallengeMetaTestArgs = {
  filters: Maybe<ComponentChallengeMetaTestFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CodeChallengeHintsArgs = {
  filters: Maybe<ComponentChallengeChallengeHintsFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CodeChallengeTestsArgs = {
  filters: Maybe<ComponentChallengeCodeChallengeTestFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CodeChallengeEntity = {
  __typename?: 'CodeChallengeEntity';
  attributes: Maybe<CodeChallenge>;
  id: Maybe<Scalars['ID']>;
};

export type CodeChallengeEntityResponse = {
  __typename?: 'CodeChallengeEntityResponse';
  data: Maybe<CodeChallengeEntity>;
};

export type CodeChallengeEntityResponseCollection = {
  __typename?: 'CodeChallengeEntityResponseCollection';
  data: Array<CodeChallengeEntity>;
  meta: ResponseCollectionMeta;
};

export type CodeChallengeFiltersInput = {
  and: Maybe<Array<Maybe<CodeChallengeFiltersInput>>>;
  category: Maybe<SublessonFiltersInput>;
  createdAt: Maybe<DateTimeFilterInput>;
  getStartingCodeFromPreviousChallenge: Maybe<BooleanFilterInput>;
  id: Maybe<IdFilterInput>;
  internalLabel: Maybe<StringFilterInput>;
  internalNotes: Maybe<StringFilterInput>;
  not: Maybe<CodeChallengeFiltersInput>;
  or: Maybe<Array<Maybe<CodeChallengeFiltersInput>>>;
  prompt: Maybe<StringFilterInput>;
  publishedAt: Maybe<DateTimeFilterInput>;
  startingCode: Maybe<StringFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type CodeChallengeInput = {
  MetaTest: Maybe<Array<Maybe<ComponentChallengeMetaTestInput>>>;
  category: Maybe<Scalars['ID']>;
  getStartingCodeFromPreviousChallenge: Maybe<Scalars['Boolean']>;
  hints: Maybe<Array<Maybe<ComponentChallengeChallengeHintsInput>>>;
  internalLabel: Maybe<Scalars['String']>;
  internalNotes: Maybe<Scalars['String']>;
  prompt: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  startingCode: Maybe<Scalars['String']>;
  tests: Maybe<Array<Maybe<ComponentChallengeCodeChallengeTestInput>>>;
};

export type ComponentChallengeChallengeHints = {
  __typename?: 'ComponentChallengeChallengeHints';
  id: Scalars['ID'];
  recommendedTimeBeforeViewing: Maybe<Scalars['Float']>;
  text: Scalars['String'];
};

export type ComponentChallengeChallengeHintsFiltersInput = {
  and: Maybe<Array<Maybe<ComponentChallengeChallengeHintsFiltersInput>>>;
  not: Maybe<ComponentChallengeChallengeHintsFiltersInput>;
  or: Maybe<Array<Maybe<ComponentChallengeChallengeHintsFiltersInput>>>;
  recommendedTimeBeforeViewing: Maybe<FloatFilterInput>;
  text: Maybe<StringFilterInput>;
};

export type ComponentChallengeChallengeHintsInput = {
  id: Maybe<Scalars['ID']>;
  recommendedTimeBeforeViewing: Maybe<Scalars['Float']>;
  text: Maybe<Scalars['String']>;
};

export type ComponentChallengeCodeChallengeTest = {
  __typename?: 'ComponentChallengeCodeChallengeTest';
  furtherExplanation: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internalTest: Scalars['String'];
  label: Scalars['String'];
};

export type ComponentChallengeCodeChallengeTestFiltersInput = {
  and: Maybe<Array<Maybe<ComponentChallengeCodeChallengeTestFiltersInput>>>;
  furtherExplanation: Maybe<StringFilterInput>;
  internalTest: Maybe<StringFilterInput>;
  label: Maybe<StringFilterInput>;
  not: Maybe<ComponentChallengeCodeChallengeTestFiltersInput>;
  or: Maybe<Array<Maybe<ComponentChallengeCodeChallengeTestFiltersInput>>>;
};

export type ComponentChallengeCodeChallengeTestInput = {
  furtherExplanation: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  internalTest: Maybe<Scalars['String']>;
  label: Maybe<Scalars['String']>;
};

export type ComponentChallengeMetaTest = {
  __typename?: 'ComponentChallengeMetaTest';
  caseCode: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label: Maybe<Scalars['String']>;
  passes: Maybe<Scalars['Boolean']>;
};

export type ComponentChallengeMetaTestFiltersInput = {
  and: Maybe<Array<Maybe<ComponentChallengeMetaTestFiltersInput>>>;
  caseCode: Maybe<StringFilterInput>;
  label: Maybe<StringFilterInput>;
  not: Maybe<ComponentChallengeMetaTestFiltersInput>;
  or: Maybe<Array<Maybe<ComponentChallengeMetaTestFiltersInput>>>;
  passes: Maybe<BooleanFilterInput>;
};

export type ComponentChallengeMetaTestInput = {
  caseCode: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  label: Maybe<Scalars['String']>;
  passes: Maybe<Scalars['Boolean']>;
};

export type ComponentChallengeMultipleChoiceOptions = {
  __typename?: 'ComponentChallengeMultipleChoiceOptions';
  id: Scalars['ID'];
  incorrectChoiceExplanation: Maybe<Scalars['String']>;
  isCorrect: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type ComponentChallengeMultipleChoiceOptionsFiltersInput = {
  and: Maybe<Array<Maybe<ComponentChallengeMultipleChoiceOptionsFiltersInput>>>;
  incorrectChoiceExplanation: Maybe<StringFilterInput>;
  isCorrect: Maybe<BooleanFilterInput>;
  not: Maybe<ComponentChallengeMultipleChoiceOptionsFiltersInput>;
  or: Maybe<Array<Maybe<ComponentChallengeMultipleChoiceOptionsFiltersInput>>>;
  text: Maybe<StringFilterInput>;
};

export type ComponentChallengeMultipleChoiceOptionsInput = {
  id: Maybe<Scalars['ID']>;
  incorrectChoiceExplanation: Maybe<Scalars['String']>;
  isCorrect: Maybe<Scalars['Boolean']>;
  text: Maybe<Scalars['String']>;
};

export type ComponentContentChallenges = {
  __typename?: 'ComponentContentChallenges';
  codeChallenge: Maybe<CodeChallengeEntityResponse>;
  id: Scalars['ID'];
  multipleChoiceChallenge: Maybe<MultipleChoiceChallengeEntityResponse>;
  playground: Maybe<PlaygroundEntityResponse>;
};

export type ComponentContentChallengesFiltersInput = {
  and: Maybe<Array<Maybe<ComponentContentChallengesFiltersInput>>>;
  codeChallenge: Maybe<CodeChallengeFiltersInput>;
  multipleChoiceChallenge: Maybe<MultipleChoiceChallengeFiltersInput>;
  not: Maybe<ComponentContentChallengesFiltersInput>;
  or: Maybe<Array<Maybe<ComponentContentChallengesFiltersInput>>>;
  playground: Maybe<PlaygroundFiltersInput>;
};

export type ComponentContentChallengesInput = {
  codeChallenge: Maybe<Scalars['ID']>;
  id: Maybe<Scalars['ID']>;
  multipleChoiceChallenge: Maybe<Scalars['ID']>;
  playground: Maybe<Scalars['ID']>;
};

export type ComponentContentExternalResource = {
  __typename?: 'ComponentContentExternalResource';
  id: Scalars['ID'];
  link: Scalars['String'];
  name: Maybe<Scalars['String']>;
  type: Maybe<Enum_Componentcontentexternalresource_Type>;
};

export type ComponentContentExternalResourceFiltersInput = {
  and: Maybe<Array<Maybe<ComponentContentExternalResourceFiltersInput>>>;
  link: Maybe<StringFilterInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<ComponentContentExternalResourceFiltersInput>;
  or: Maybe<Array<Maybe<ComponentContentExternalResourceFiltersInput>>>;
  type: Maybe<StringFilterInput>;
};

export type ComponentContentExternalResourceInput = {
  id: Maybe<Scalars['ID']>;
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  type: Maybe<Enum_Componentcontentexternalresource_Type>;
};

export type ComponentContentSteps = {
  __typename?: 'ComponentContentSteps';
  codeChallenge: Maybe<CodeChallengeEntityResponse>;
  id: Scalars['ID'];
  multipleChoiceChallenge: Maybe<MultipleChoiceChallengeEntityResponse>;
  playground: Maybe<PlaygroundEntityResponse>;
};

export type ComponentContentStepsFiltersInput = {
  and: Maybe<Array<Maybe<ComponentContentStepsFiltersInput>>>;
  codeChallenge: Maybe<CodeChallengeFiltersInput>;
  multipleChoiceChallenge: Maybe<MultipleChoiceChallengeFiltersInput>;
  not: Maybe<ComponentContentStepsFiltersInput>;
  or: Maybe<Array<Maybe<ComponentContentStepsFiltersInput>>>;
  playground: Maybe<PlaygroundFiltersInput>;
};

export type ComponentContentStepsInput = {
  codeChallenge: Maybe<Scalars['ID']>;
  id: Maybe<Scalars['ID']>;
  multipleChoiceChallenge: Maybe<Scalars['ID']>;
  playground: Maybe<Scalars['ID']>;
};

export type ComponentMiscModuleLesson = {
  __typename?: 'ComponentMiscModuleLesson';
  id: Scalars['ID'];
  lesson: Maybe<LessonEntityResponse>;
};

export type ComponentMiscModuleLessonFiltersInput = {
  and: Maybe<Array<Maybe<ComponentMiscModuleLessonFiltersInput>>>;
  lesson: Maybe<LessonFiltersInput>;
  not: Maybe<ComponentMiscModuleLessonFiltersInput>;
  or: Maybe<Array<Maybe<ComponentMiscModuleLessonFiltersInput>>>;
};

export type ComponentMiscModuleLessonInput = {
  id: Maybe<Scalars['ID']>;
  lesson: Maybe<Scalars['ID']>;
};

export type ComponentTranslationsAboutPage = {
  __typename?: 'ComponentTranslationsAboutPage';
  id: Scalars['ID'];
  title: Maybe<Scalars['String']>;
};

export type ComponentTranslationsAboutPageInput = {
  id: Maybe<Scalars['ID']>;
  title: Maybe<Scalars['String']>;
};

export type ComponentTranslationsCoreComponents = {
  __typename?: 'ComponentTranslationsCoreComponents';
  backButton: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  nextButton: Maybe<Scalars['String']>;
  wefwe: Maybe<ComponentTranslationsWithinComponent>;
};

export type ComponentTranslationsCoreComponentsInput = {
  backButton: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  nextButton: Maybe<Scalars['String']>;
  wefwe: Maybe<ComponentTranslationsWithinComponentInput>;
};

export type ComponentTranslationsWithinComponent = {
  __typename?: 'ComponentTranslationsWithinComponent';
  id: Scalars['ID'];
};

export type ComponentTranslationsWithinComponentInput = {
  id: Maybe<Scalars['ID']>;
};

export type Course = {
  __typename?: 'Course';
  createdAt: Maybe<Scalars['DateTime']>;
  modules: Maybe<ModuleRelationResponseCollection>;
  name: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type CourseModulesArgs = {
  filters: Maybe<ModuleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CourseEntity = {
  __typename?: 'CourseEntity';
  attributes: Maybe<Course>;
  id: Maybe<Scalars['ID']>;
};

export type CourseEntityResponse = {
  __typename?: 'CourseEntityResponse';
  data: Maybe<CourseEntity>;
};

export type CourseEntityResponseCollection = {
  __typename?: 'CourseEntityResponseCollection';
  data: Array<CourseEntity>;
  meta: ResponseCollectionMeta;
};

export type CourseFiltersInput = {
  and: Maybe<Array<Maybe<CourseFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  modules: Maybe<ModuleFiltersInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<CourseFiltersInput>;
  or: Maybe<Array<Maybe<CourseFiltersInput>>>;
  publishedAt: Maybe<DateTimeFilterInput>;
  slug: Maybe<StringFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type CourseInput = {
  modules: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  between: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  contains: Maybe<Scalars['DateTime']>;
  containsi: Maybe<Scalars['DateTime']>;
  endsWith: Maybe<Scalars['DateTime']>;
  eq: Maybe<Scalars['DateTime']>;
  gt: Maybe<Scalars['DateTime']>;
  gte: Maybe<Scalars['DateTime']>;
  in: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt: Maybe<Scalars['DateTime']>;
  lte: Maybe<Scalars['DateTime']>;
  ne: Maybe<Scalars['DateTime']>;
  not: Maybe<DateTimeFilterInput>;
  notContains: Maybe<Scalars['DateTime']>;
  notContainsi: Maybe<Scalars['DateTime']>;
  notIn: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  startsWith: Maybe<Scalars['DateTime']>;
};

export enum Enum_Componentcontentexternalresource_Type {
  Image = 'image',
  Text = 'text',
  Video = 'video'
}

export type FileInfoInput = {
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and: Maybe<Array<Maybe<Scalars['Float']>>>;
  between: Maybe<Array<Maybe<Scalars['Float']>>>;
  contains: Maybe<Scalars['Float']>;
  containsi: Maybe<Scalars['Float']>;
  endsWith: Maybe<Scalars['Float']>;
  eq: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  not: Maybe<FloatFilterInput>;
  notContains: Maybe<Scalars['Float']>;
  notContainsi: Maybe<Scalars['Float']>;
  notIn: Maybe<Array<Maybe<Scalars['Float']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['Float']>>>;
  startsWith: Maybe<Scalars['Float']>;
};

export type GenericMorph = CodeChallenge | ComponentChallengeChallengeHints | ComponentChallengeCodeChallengeTest | ComponentChallengeMetaTest | ComponentChallengeMultipleChoiceOptions | ComponentContentChallenges | ComponentContentExternalResource | ComponentContentSteps | ComponentMiscModuleLesson | ComponentTranslationsAboutPage | ComponentTranslationsCoreComponents | ComponentTranslationsWithinComponent | Course | I18NLocale | Lesson | Module | MultipleChoiceChallenge | Playground | Sublesson | SyntaxEntry | TranslationGroup | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  code: Maybe<StringFilterInput>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<I18NLocaleFiltersInput>;
  or: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: Maybe<Array<Maybe<Scalars['ID']>>>;
  between: Maybe<Array<Maybe<Scalars['ID']>>>;
  contains: Maybe<Scalars['ID']>;
  containsi: Maybe<Scalars['ID']>;
  endsWith: Maybe<Scalars['ID']>;
  eq: Maybe<Scalars['ID']>;
  gt: Maybe<Scalars['ID']>;
  gte: Maybe<Scalars['ID']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  lt: Maybe<Scalars['ID']>;
  lte: Maybe<Scalars['ID']>;
  ne: Maybe<Scalars['ID']>;
  not: Maybe<IdFilterInput>;
  notContains: Maybe<Scalars['ID']>;
  notContainsi: Maybe<Scalars['ID']>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['ID']>>>;
  startsWith: Maybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and: Maybe<Array<Maybe<Scalars['Int']>>>;
  between: Maybe<Array<Maybe<Scalars['Int']>>>;
  contains: Maybe<Scalars['Int']>;
  containsi: Maybe<Scalars['Int']>;
  endsWith: Maybe<Scalars['Int']>;
  eq: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  not: Maybe<IntFilterInput>;
  notContains: Maybe<Scalars['Int']>;
  notContainsi: Maybe<Scalars['Int']>;
  notIn: Maybe<Array<Maybe<Scalars['Int']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['Int']>>>;
  startsWith: Maybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and: Maybe<Array<Maybe<Scalars['JSON']>>>;
  between: Maybe<Array<Maybe<Scalars['JSON']>>>;
  contains: Maybe<Scalars['JSON']>;
  containsi: Maybe<Scalars['JSON']>;
  endsWith: Maybe<Scalars['JSON']>;
  eq: Maybe<Scalars['JSON']>;
  gt: Maybe<Scalars['JSON']>;
  gte: Maybe<Scalars['JSON']>;
  in: Maybe<Array<Maybe<Scalars['JSON']>>>;
  lt: Maybe<Scalars['JSON']>;
  lte: Maybe<Scalars['JSON']>;
  ne: Maybe<Scalars['JSON']>;
  not: Maybe<JsonFilterInput>;
  notContains: Maybe<Scalars['JSON']>;
  notContainsi: Maybe<Scalars['JSON']>;
  notIn: Maybe<Array<Maybe<Scalars['JSON']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['JSON']>>>;
  startsWith: Maybe<Scalars['JSON']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  createdAt: Maybe<Scalars['DateTime']>;
  externalResources: Maybe<Array<Maybe<ComponentContentExternalResource>>>;
  internalNotes: Maybe<Scalars['String']>;
  isHard: Maybe<Scalars['Boolean']>;
  module: Maybe<ModuleEntityResponse>;
  name: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  sublessons: Maybe<SublessonRelationResponseCollection>;
  syntaxEntry: Maybe<SyntaxEntryEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type LessonExternalResourcesArgs = {
  filters: Maybe<ComponentContentExternalResourceFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LessonSublessonsArgs = {
  filters: Maybe<SublessonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LessonEntity = {
  __typename?: 'LessonEntity';
  attributes: Maybe<Lesson>;
  id: Maybe<Scalars['ID']>;
};

export type LessonEntityResponse = {
  __typename?: 'LessonEntityResponse';
  data: Maybe<LessonEntity>;
};

export type LessonEntityResponseCollection = {
  __typename?: 'LessonEntityResponseCollection';
  data: Array<LessonEntity>;
  meta: ResponseCollectionMeta;
};

export type LessonFiltersInput = {
  and: Maybe<Array<Maybe<LessonFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  internalNotes: Maybe<StringFilterInput>;
  isHard: Maybe<BooleanFilterInput>;
  module: Maybe<ModuleFiltersInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<LessonFiltersInput>;
  or: Maybe<Array<Maybe<LessonFiltersInput>>>;
  publishedAt: Maybe<DateTimeFilterInput>;
  slug: Maybe<StringFilterInput>;
  sublessons: Maybe<SublessonFiltersInput>;
  syntaxEntry: Maybe<SyntaxEntryFiltersInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type LessonInput = {
  externalResources: Maybe<Array<Maybe<ComponentContentExternalResourceInput>>>;
  internalNotes: Maybe<Scalars['String']>;
  isHard: Maybe<Scalars['Boolean']>;
  module: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  slug: Maybe<Scalars['String']>;
  sublessons: Maybe<Array<Maybe<Scalars['ID']>>>;
  syntaxEntry: Maybe<Scalars['ID']>;
};

export type LessonRelationResponseCollection = {
  __typename?: 'LessonRelationResponseCollection';
  data: Array<LessonEntity>;
};

export type Module = {
  __typename?: 'Module';
  createdAt: Maybe<Scalars['DateTime']>;
  lessons: Maybe<LessonRelationResponseCollection>;
  moduleLessons: Maybe<Array<Maybe<ComponentMiscModuleLesson>>>;
  name: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type ModuleLessonsArgs = {
  filters: Maybe<LessonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ModuleModuleLessonsArgs = {
  filters: Maybe<ComponentMiscModuleLessonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModuleEntity = {
  __typename?: 'ModuleEntity';
  attributes: Maybe<Module>;
  id: Maybe<Scalars['ID']>;
};

export type ModuleEntityResponse = {
  __typename?: 'ModuleEntityResponse';
  data: Maybe<ModuleEntity>;
};

export type ModuleEntityResponseCollection = {
  __typename?: 'ModuleEntityResponseCollection';
  data: Array<ModuleEntity>;
  meta: ResponseCollectionMeta;
};

export type ModuleFiltersInput = {
  and: Maybe<Array<Maybe<ModuleFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  lessons: Maybe<LessonFiltersInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<ModuleFiltersInput>;
  or: Maybe<Array<Maybe<ModuleFiltersInput>>>;
  publishedAt: Maybe<DateTimeFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type ModuleInput = {
  lessons: Maybe<Array<Maybe<Scalars['ID']>>>;
  moduleLessons: Maybe<Array<Maybe<ComponentMiscModuleLessonInput>>>;
  name: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
};

export type ModuleRelationResponseCollection = {
  __typename?: 'ModuleRelationResponseCollection';
  data: Array<ModuleEntity>;
};

export type MultipleChoiceChallenge = {
  __typename?: 'MultipleChoiceChallenge';
  canSelectMultipleOptions: Maybe<Scalars['Boolean']>;
  createdAt: Maybe<Scalars['DateTime']>;
  internalLabel: Scalars['String'];
  options: Maybe<Array<Maybe<ComponentChallengeMultipleChoiceOptions>>>;
  optionsInitiallyHidden: Maybe<Scalars['Boolean']>;
  prompt: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type MultipleChoiceChallengeOptionsArgs = {
  filters: Maybe<ComponentChallengeMultipleChoiceOptionsFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MultipleChoiceChallengeEntity = {
  __typename?: 'MultipleChoiceChallengeEntity';
  attributes: Maybe<MultipleChoiceChallenge>;
  id: Maybe<Scalars['ID']>;
};

export type MultipleChoiceChallengeEntityResponse = {
  __typename?: 'MultipleChoiceChallengeEntityResponse';
  data: Maybe<MultipleChoiceChallengeEntity>;
};

export type MultipleChoiceChallengeEntityResponseCollection = {
  __typename?: 'MultipleChoiceChallengeEntityResponseCollection';
  data: Array<MultipleChoiceChallengeEntity>;
  meta: ResponseCollectionMeta;
};

export type MultipleChoiceChallengeFiltersInput = {
  and: Maybe<Array<Maybe<MultipleChoiceChallengeFiltersInput>>>;
  canSelectMultipleOptions: Maybe<BooleanFilterInput>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  internalLabel: Maybe<StringFilterInput>;
  not: Maybe<MultipleChoiceChallengeFiltersInput>;
  optionsInitiallyHidden: Maybe<BooleanFilterInput>;
  or: Maybe<Array<Maybe<MultipleChoiceChallengeFiltersInput>>>;
  prompt: Maybe<StringFilterInput>;
  publishedAt: Maybe<DateTimeFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type MultipleChoiceChallengeInput = {
  canSelectMultipleOptions: Maybe<Scalars['Boolean']>;
  internalLabel: Maybe<Scalars['String']>;
  options: Maybe<Array<Maybe<ComponentChallengeMultipleChoiceOptionsInput>>>;
  optionsInitiallyHidden: Maybe<Scalars['Boolean']>;
  prompt: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCodeChallenge: Maybe<CodeChallengeEntityResponse>;
  createCourse: Maybe<CourseEntityResponse>;
  createLesson: Maybe<LessonEntityResponse>;
  createModule: Maybe<ModuleEntityResponse>;
  createMultipleChoiceChallenge: Maybe<MultipleChoiceChallengeEntityResponse>;
  createPlayground: Maybe<PlaygroundEntityResponse>;
  createSublesson: Maybe<SublessonEntityResponse>;
  createSyntaxEntry: Maybe<SyntaxEntryEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteCodeChallenge: Maybe<CodeChallengeEntityResponse>;
  deleteCourse: Maybe<CourseEntityResponse>;
  deleteLesson: Maybe<LessonEntityResponse>;
  deleteModule: Maybe<ModuleEntityResponse>;
  deleteMultipleChoiceChallenge: Maybe<MultipleChoiceChallengeEntityResponse>;
  deletePlayground: Maybe<PlaygroundEntityResponse>;
  deleteSublesson: Maybe<SublessonEntityResponse>;
  deleteSyntaxEntry: Maybe<SyntaxEntryEntityResponse>;
  deleteTranslationGroup: Maybe<TranslationGroupEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateCodeChallenge: Maybe<CodeChallengeEntityResponse>;
  updateCourse: Maybe<CourseEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateLesson: Maybe<LessonEntityResponse>;
  updateModule: Maybe<ModuleEntityResponse>;
  updateMultipleChoiceChallenge: Maybe<MultipleChoiceChallengeEntityResponse>;
  updatePlayground: Maybe<PlaygroundEntityResponse>;
  updateSublesson: Maybe<SublessonEntityResponse>;
  updateSyntaxEntry: Maybe<SyntaxEntryEntityResponse>;
  updateTranslationGroup: Maybe<TranslationGroupEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateCodeChallengeArgs = {
  data: CodeChallengeInput;
};


export type MutationCreateCourseArgs = {
  data: CourseInput;
};


export type MutationCreateLessonArgs = {
  data: LessonInput;
};


export type MutationCreateModuleArgs = {
  data: ModuleInput;
};


export type MutationCreateMultipleChoiceChallengeArgs = {
  data: MultipleChoiceChallengeInput;
};


export type MutationCreatePlaygroundArgs = {
  data: PlaygroundInput;
};


export type MutationCreateSublessonArgs = {
  data: SublessonInput;
};


export type MutationCreateSyntaxEntryArgs = {
  data: SyntaxEntryInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCodeChallengeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMultipleChoiceChallengeArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePlaygroundArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSublessonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSyntaxEntryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
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
  field: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref: Maybe<Scalars['String']>;
  refId: Maybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCodeChallengeArgs = {
  data: CodeChallengeInput;
  id: Scalars['ID'];
};


export type MutationUpdateCourseArgs = {
  data: CourseInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: Maybe<FileInfoInput>;
};


export type MutationUpdateLessonArgs = {
  data: LessonInput;
  id: Scalars['ID'];
};


export type MutationUpdateModuleArgs = {
  data: ModuleInput;
  id: Scalars['ID'];
};


export type MutationUpdateMultipleChoiceChallengeArgs = {
  data: MultipleChoiceChallengeInput;
  id: Scalars['ID'];
};


export type MutationUpdatePlaygroundArgs = {
  data: PlaygroundInput;
  id: Scalars['ID'];
};


export type MutationUpdateSublessonArgs = {
  data: SublessonInput;
  id: Scalars['ID'];
};


export type MutationUpdateSyntaxEntryArgs = {
  data: SyntaxEntryInput;
  id: Scalars['ID'];
};


export type MutationUpdateTranslationGroupArgs = {
  data: TranslationGroupInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info: Maybe<FileInfoInput>;
  ref: Maybe<Scalars['String']>;
  refId: Maybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit: Maybe<Scalars['Int']>;
  page: Maybe<Scalars['Int']>;
  pageSize: Maybe<Scalars['Int']>;
  start: Maybe<Scalars['Int']>;
};

export type Playground = {
  __typename?: 'Playground';
  createdAt: Maybe<Scalars['DateTime']>;
  internalLabel: Scalars['String'];
  internalNotes: Maybe<Scalars['String']>;
  prompt: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type PlaygroundEntity = {
  __typename?: 'PlaygroundEntity';
  attributes: Maybe<Playground>;
  id: Maybe<Scalars['ID']>;
};

export type PlaygroundEntityResponse = {
  __typename?: 'PlaygroundEntityResponse';
  data: Maybe<PlaygroundEntity>;
};

export type PlaygroundEntityResponseCollection = {
  __typename?: 'PlaygroundEntityResponseCollection';
  data: Array<PlaygroundEntity>;
  meta: ResponseCollectionMeta;
};

export type PlaygroundFiltersInput = {
  and: Maybe<Array<Maybe<PlaygroundFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  internalLabel: Maybe<StringFilterInput>;
  internalNotes: Maybe<StringFilterInput>;
  not: Maybe<PlaygroundFiltersInput>;
  or: Maybe<Array<Maybe<PlaygroundFiltersInput>>>;
  prompt: Maybe<StringFilterInput>;
  publishedAt: Maybe<DateTimeFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type PlaygroundInput = {
  internalLabel: Maybe<Scalars['String']>;
  internalNotes: Maybe<Scalars['String']>;
  prompt: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  codeChallenge: Maybe<CodeChallengeEntityResponse>;
  codeChallenges: Maybe<CodeChallengeEntityResponseCollection>;
  course: Maybe<CourseEntityResponse>;
  courses: Maybe<CourseEntityResponseCollection>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  lesson: Maybe<LessonEntityResponse>;
  lessons: Maybe<LessonEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  module: Maybe<ModuleEntityResponse>;
  modules: Maybe<ModuleEntityResponseCollection>;
  multipleChoiceChallenge: Maybe<MultipleChoiceChallengeEntityResponse>;
  multipleChoiceChallenges: Maybe<MultipleChoiceChallengeEntityResponseCollection>;
  nextLessonSlug: Maybe<Scalars['String']>;
  playground: Maybe<PlaygroundEntityResponse>;
  playgrounds: Maybe<PlaygroundEntityResponseCollection>;
  sublesson: Maybe<SublessonEntityResponse>;
  sublessons: Maybe<SublessonEntityResponseCollection>;
  syntaxEntries: Maybe<SyntaxEntryEntityResponseCollection>;
  syntaxEntry: Maybe<SyntaxEntryEntityResponse>;
  translationGroup: Maybe<TranslationGroupEntityResponse>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryCodeChallengeArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryCodeChallengesArgs = {
  filters: Maybe<CodeChallengeFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCourseArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryCoursesArgs = {
  filters: Maybe<CourseFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters: Maybe<I18NLocaleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLessonArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryLessonsArgs = {
  filters: Maybe<LessonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryModuleArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryModulesArgs = {
  filters: Maybe<ModuleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryMultipleChoiceChallengeArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryMultipleChoiceChallengesArgs = {
  filters: Maybe<MultipleChoiceChallengeFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNextLessonSlugArgs = {
  currentLessonId: Maybe<Scalars['Int']>;
};


export type QueryPlaygroundArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryPlaygroundsArgs = {
  filters: Maybe<PlaygroundFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySublessonArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QuerySublessonsArgs = {
  filters: Maybe<SublessonFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySyntaxEntriesArgs = {
  filters: Maybe<SyntaxEntryFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySyntaxEntryArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryTranslationGroupArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: Maybe<UsersPermissionsRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and: Maybe<Array<Maybe<Scalars['String']>>>;
  between: Maybe<Array<Maybe<Scalars['String']>>>;
  contains: Maybe<Scalars['String']>;
  containsi: Maybe<Scalars['String']>;
  endsWith: Maybe<Scalars['String']>;
  eq: Maybe<Scalars['String']>;
  gt: Maybe<Scalars['String']>;
  gte: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  lt: Maybe<Scalars['String']>;
  lte: Maybe<Scalars['String']>;
  ne: Maybe<Scalars['String']>;
  not: Maybe<StringFilterInput>;
  notContains: Maybe<Scalars['String']>;
  notContainsi: Maybe<Scalars['String']>;
  notIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notNull: Maybe<Scalars['Boolean']>;
  null: Maybe<Scalars['Boolean']>;
  or: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith: Maybe<Scalars['String']>;
};

export type Sublesson = {
  __typename?: 'Sublesson';
  challenges: Maybe<Array<Maybe<ComponentContentChallenges>>>;
  createdAt: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  lesson: Maybe<LessonEntityResponse>;
  name: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  steps: Maybe<Array<Maybe<ComponentContentSteps>>>;
  syntaxEntry: Maybe<SyntaxEntryEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type SublessonChallengesArgs = {
  filters: Maybe<ComponentContentChallengesFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SublessonStepsArgs = {
  filters: Maybe<ComponentContentStepsFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SublessonEntity = {
  __typename?: 'SublessonEntity';
  attributes: Maybe<Sublesson>;
  id: Maybe<Scalars['ID']>;
};

export type SublessonEntityResponse = {
  __typename?: 'SublessonEntityResponse';
  data: Maybe<SublessonEntity>;
};

export type SublessonEntityResponseCollection = {
  __typename?: 'SublessonEntityResponseCollection';
  data: Array<SublessonEntity>;
  meta: ResponseCollectionMeta;
};

export type SublessonFiltersInput = {
  and: Maybe<Array<Maybe<SublessonFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  description: Maybe<StringFilterInput>;
  id: Maybe<IdFilterInput>;
  internalNotes: Maybe<StringFilterInput>;
  lesson: Maybe<LessonFiltersInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<SublessonFiltersInput>;
  or: Maybe<Array<Maybe<SublessonFiltersInput>>>;
  publishedAt: Maybe<DateTimeFilterInput>;
  syntaxEntry: Maybe<SyntaxEntryFiltersInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type SublessonInput = {
  challenges: Maybe<Array<Maybe<ComponentContentChallengesInput>>>;
  description: Maybe<Scalars['String']>;
  internalNotes: Maybe<Scalars['String']>;
  lesson: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  steps: Maybe<Array<Maybe<ComponentContentStepsInput>>>;
  syntaxEntry: Maybe<Scalars['ID']>;
};

export type SublessonRelationResponseCollection = {
  __typename?: 'SublessonRelationResponseCollection';
  data: Array<SublessonEntity>;
};

export type SyntaxEntry = {
  __typename?: 'SyntaxEntry';
  content: Scalars['String'];
  createdAt: Maybe<Scalars['DateTime']>;
  internalNotes: Maybe<Scalars['String']>;
  lesson: Maybe<LessonEntityResponse>;
  maxWidth: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  sublesson: Maybe<SublessonEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type SyntaxEntryEntity = {
  __typename?: 'SyntaxEntryEntity';
  attributes: Maybe<SyntaxEntry>;
  id: Maybe<Scalars['ID']>;
};

export type SyntaxEntryEntityResponse = {
  __typename?: 'SyntaxEntryEntityResponse';
  data: Maybe<SyntaxEntryEntity>;
};

export type SyntaxEntryEntityResponseCollection = {
  __typename?: 'SyntaxEntryEntityResponseCollection';
  data: Array<SyntaxEntryEntity>;
  meta: ResponseCollectionMeta;
};

export type SyntaxEntryFiltersInput = {
  and: Maybe<Array<Maybe<SyntaxEntryFiltersInput>>>;
  content: Maybe<StringFilterInput>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  internalNotes: Maybe<StringFilterInput>;
  lesson: Maybe<LessonFiltersInput>;
  maxWidth: Maybe<IntFilterInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<SyntaxEntryFiltersInput>;
  or: Maybe<Array<Maybe<SyntaxEntryFiltersInput>>>;
  publishedAt: Maybe<DateTimeFilterInput>;
  sublesson: Maybe<SublessonFiltersInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type SyntaxEntryInput = {
  content: Maybe<Scalars['String']>;
  internalNotes: Maybe<Scalars['String']>;
  lesson: Maybe<Scalars['ID']>;
  maxWidth: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  sublesson: Maybe<Scalars['ID']>;
};

export type TranslationGroup = {
  __typename?: 'TranslationGroup';
  aboutPage: Maybe<ComponentTranslationsAboutPage>;
  coreComponents: Maybe<ComponentTranslationsCoreComponents>;
  createdAt: Maybe<Scalars['DateTime']>;
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type TranslationGroupEntity = {
  __typename?: 'TranslationGroupEntity';
  attributes: Maybe<TranslationGroup>;
  id: Maybe<Scalars['ID']>;
};

export type TranslationGroupEntityResponse = {
  __typename?: 'TranslationGroupEntityResponse';
  data: Maybe<TranslationGroupEntity>;
};

export type TranslationGroupInput = {
  aboutPage: Maybe<ComponentTranslationsAboutPageInput>;
  coreComponents: Maybe<ComponentTranslationsCoreComponentsInput>;
  publishedAt: Maybe<Scalars['DateTime']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText: Maybe<StringFilterInput>;
  and: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  caption: Maybe<StringFilterInput>;
  createdAt: Maybe<DateTimeFilterInput>;
  ext: Maybe<StringFilterInput>;
  formats: Maybe<JsonFilterInput>;
  hash: Maybe<StringFilterInput>;
  height: Maybe<IntFilterInput>;
  id: Maybe<IdFilterInput>;
  mime: Maybe<StringFilterInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<UploadFileFiltersInput>;
  or: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  previewUrl: Maybe<StringFilterInput>;
  provider: Maybe<StringFilterInput>;
  provider_metadata: Maybe<JsonFilterInput>;
  size: Maybe<FloatFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
  url: Maybe<StringFilterInput>;
  width: Maybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  mime: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  previewUrl: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  provider_metadata: Maybe<Scalars['JSON']>;
  size: Maybe<Scalars['Float']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt: Maybe<Scalars['DateTime']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: Maybe<StringFilterInput>;
  and: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  id: Maybe<IdFilterInput>;
  not: Maybe<UsersPermissionsPermissionFiltersInput>;
  or: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  role: Maybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: Maybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: Maybe<DateTimeFilterInput>;
  description: Maybe<StringFilterInput>;
  id: Maybe<IdFilterInput>;
  name: Maybe<StringFilterInput>;
  not: Maybe<UsersPermissionsRoleFiltersInput>;
  or: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: Maybe<UsersPermissionsPermissionFiltersInput>;
  type: Maybe<StringFilterInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
  users: Maybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  permissions: Maybe<Array<Maybe<Scalars['ID']>>>;
  type: Maybe<Scalars['String']>;
  users: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  createdAt: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider: Maybe<Scalars['String']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  blocked: Maybe<BooleanFilterInput>;
  confirmationToken: Maybe<StringFilterInput>;
  confirmed: Maybe<BooleanFilterInput>;
  createdAt: Maybe<DateTimeFilterInput>;
  email: Maybe<StringFilterInput>;
  id: Maybe<IdFilterInput>;
  not: Maybe<UsersPermissionsUserFiltersInput>;
  or: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  password: Maybe<StringFilterInput>;
  provider: Maybe<StringFilterInput>;
  resetPasswordToken: Maybe<StringFilterInput>;
  role: Maybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: Maybe<DateTimeFilterInput>;
  username: Maybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: Maybe<Scalars['Boolean']>;
  confirmationToken: Maybe<Scalars['String']>;
  confirmed: Maybe<Scalars['Boolean']>;
  email: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  provider: Maybe<Scalars['String']>;
  resetPasswordToken: Maybe<Scalars['String']>;
  role: Maybe<Scalars['ID']>;
  username: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt: string | null } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt: string | null } };

export type ChallengeHintFragment = { __typename?: 'ComponentChallengeChallengeHints', text: string, recommendedTimeBeforeViewing: number | null };

export type CodeChallengeDataFragment = { __typename?: 'CodeChallengeEntity', id: string | null, attributes: { __typename?: 'CodeChallenge', getStartingCodeFromPreviousChallenge: boolean | null, startingCode: string | null, prompt: string, tests: Array<{ __typename?: 'ComponentChallengeCodeChallengeTest', internalTest: string, label: string } | null> | null, hints: Array<{ __typename?: 'ComponentChallengeChallengeHints', text: string, recommendedTimeBeforeViewing: number | null } | null> | null } | null };

export type MultipleChoiceChallengeDataFragment = { __typename?: 'MultipleChoiceChallengeEntity', id: string | null, attributes: { __typename?: 'MultipleChoiceChallenge', prompt: string, canSelectMultipleOptions: boolean | null, optionsInitiallyHidden: boolean | null, options: Array<{ __typename?: 'ComponentChallengeMultipleChoiceOptions', text: string, isCorrect: boolean | null, incorrectChoiceExplanation: string | null } | null> | null } | null };

export type GetLessonExternalResourcesDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLessonExternalResourcesDataQuery = { __typename?: 'Query', lessons: { __typename?: 'LessonEntityResponseCollection', data: Array<{ __typename?: 'LessonEntity', attributes: { __typename?: 'Lesson', externalResources: Array<{ __typename?: 'ComponentContentExternalResource', name: string | null, link: string, type: Enum_Componentcontentexternalresource_Type | null } | null> | null } | null }> } | null };

export type LessonSidebarDataFragment = { __typename?: 'SublessonEntity', attributes: { __typename?: 'Sublesson', name: string, steps: Array<{ __typename?: 'ComponentContentSteps', codeChallenge: { __typename?: 'CodeChallengeEntityResponse', data: { __typename?: 'CodeChallengeEntity', id: string | null, attributes: { __typename?: 'CodeChallenge', getStartingCodeFromPreviousChallenge: boolean | null, startingCode: string | null, prompt: string, tests: Array<{ __typename?: 'ComponentChallengeCodeChallengeTest', internalTest: string, label: string } | null> | null, hints: Array<{ __typename?: 'ComponentChallengeChallengeHints', text: string, recommendedTimeBeforeViewing: number | null } | null> | null } | null } | null } | null, multipleChoiceChallenge: { __typename?: 'MultipleChoiceChallengeEntityResponse', data: { __typename?: 'MultipleChoiceChallengeEntity', id: string | null, attributes: { __typename?: 'MultipleChoiceChallenge', prompt: string, canSelectMultipleOptions: boolean | null, optionsInitiallyHidden: boolean | null, options: Array<{ __typename?: 'ComponentChallengeMultipleChoiceOptions', text: string, isCorrect: boolean | null, incorrectChoiceExplanation: string | null } | null> | null } | null } | null } | null, playground: { __typename?: 'PlaygroundEntityResponse', data: { __typename?: 'PlaygroundEntity', id: string | null, attributes: { __typename?: 'Playground', prompt: string | null } | null } | null } | null } | null> | null } | null };

export type GetCourseMapOverlayDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetCourseMapOverlayDataQuery = { __typename?: 'Query', courses: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', attributes: { __typename?: 'Course', name: string, modules: { __typename?: 'ModuleRelationResponseCollection', data: Array<{ __typename?: 'ModuleEntity', attributes: { __typename?: 'Module', name: string, moduleLessons: Array<{ __typename?: 'ComponentMiscModuleLesson', lesson: { __typename?: 'LessonEntityResponse', data: { __typename?: 'LessonEntity', attributes: { __typename?: 'Lesson', name: string, slug: string } | null } | null } | null } | null> | null } | null }> } | null } | null }> } | null };

export type PlaygroundDataFragment = { __typename?: 'PlaygroundEntity', id: string | null, attributes: { __typename?: 'Playground', prompt: string | null } | null };

export type GetSyntaxHandbookDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetSyntaxHandbookDataQuery = { __typename?: 'Query', courses: { __typename?: 'CourseEntityResponseCollection', data: Array<{ __typename?: 'CourseEntity', attributes: { __typename?: 'Course', modules: { __typename?: 'ModuleRelationResponseCollection', data: Array<{ __typename?: 'ModuleEntity', attributes: { __typename?: 'Module', moduleLessons: Array<{ __typename?: 'ComponentMiscModuleLesson', lesson: { __typename?: 'LessonEntityResponse', data: { __typename?: 'LessonEntity', attributes: { __typename?: 'Lesson', syntaxEntry: { __typename?: 'SyntaxEntryEntityResponse', data: { __typename?: 'SyntaxEntryEntity', attributes: { __typename?: 'SyntaxEntry', content: string, name: string, maxWidth: number | null } | null } | null } | null, sublessons: { __typename?: 'SublessonRelationResponseCollection', data: Array<{ __typename?: 'SublessonEntity', attributes: { __typename?: 'Sublesson', syntaxEntry: { __typename?: 'SyntaxEntryEntityResponse', data: { __typename?: 'SyntaxEntryEntity', attributes: { __typename?: 'SyntaxEntry', content: string, name: string, maxWidth: number | null } | null } | null } | null } | null }> } | null } | null } | null } | null } | null> | null } | null }> } | null } | null }> } | null };

export type GetLessonDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLessonDataQuery = { __typename?: 'Query', lessons: { __typename?: 'LessonEntityResponseCollection', data: Array<{ __typename?: 'LessonEntity', id: string | null, attributes: { __typename?: 'Lesson', name: string, sublessons: { __typename?: 'SublessonRelationResponseCollection', data: Array<{ __typename?: 'SublessonEntity', id: string | null, attributes: { __typename?: 'Sublesson', name: string, description: string, lesson: { __typename?: 'LessonEntityResponse', data: { __typename?: 'LessonEntity', id: string | null, attributes: { __typename?: 'Lesson', name: string } | null } | null } | null, steps: Array<{ __typename?: 'ComponentContentSteps', id: string, codeChallenge: { __typename?: 'CodeChallengeEntityResponse', data: { __typename?: 'CodeChallengeEntity', id: string | null, attributes: { __typename?: 'CodeChallenge', getStartingCodeFromPreviousChallenge: boolean | null, startingCode: string | null, prompt: string, tests: Array<{ __typename?: 'ComponentChallengeCodeChallengeTest', internalTest: string, label: string } | null> | null, hints: Array<{ __typename?: 'ComponentChallengeChallengeHints', text: string, recommendedTimeBeforeViewing: number | null } | null> | null } | null } | null } | null, multipleChoiceChallenge: { __typename?: 'MultipleChoiceChallengeEntityResponse', data: { __typename?: 'MultipleChoiceChallengeEntity', id: string | null, attributes: { __typename?: 'MultipleChoiceChallenge', prompt: string, canSelectMultipleOptions: boolean | null, optionsInitiallyHidden: boolean | null, options: Array<{ __typename?: 'ComponentChallengeMultipleChoiceOptions', text: string, isCorrect: boolean | null, incorrectChoiceExplanation: string | null } | null> | null } | null } | null } | null, playground: { __typename?: 'PlaygroundEntityResponse', data: { __typename?: 'PlaygroundEntity', id: string | null, attributes: { __typename?: 'Playground', prompt: string | null } | null } | null } | null } | null> | null } | null }> } | null } | null }> } | null };

export type SublessonDataFragment = { __typename?: 'SublessonEntity', id: string | null, attributes: { __typename?: 'Sublesson', name: string, description: string, lesson: { __typename?: 'LessonEntityResponse', data: { __typename?: 'LessonEntity', id: string | null, attributes: { __typename?: 'Lesson', name: string } | null } | null } | null, steps: Array<{ __typename?: 'ComponentContentSteps', id: string, codeChallenge: { __typename?: 'CodeChallengeEntityResponse', data: { __typename?: 'CodeChallengeEntity', id: string | null, attributes: { __typename?: 'CodeChallenge', getStartingCodeFromPreviousChallenge: boolean | null, startingCode: string | null, prompt: string, tests: Array<{ __typename?: 'ComponentChallengeCodeChallengeTest', internalTest: string, label: string } | null> | null, hints: Array<{ __typename?: 'ComponentChallengeChallengeHints', text: string, recommendedTimeBeforeViewing: number | null } | null> | null } | null } | null } | null, multipleChoiceChallenge: { __typename?: 'MultipleChoiceChallengeEntityResponse', data: { __typename?: 'MultipleChoiceChallengeEntity', id: string | null, attributes: { __typename?: 'MultipleChoiceChallenge', prompt: string, canSelectMultipleOptions: boolean | null, optionsInitiallyHidden: boolean | null, options: Array<{ __typename?: 'ComponentChallengeMultipleChoiceOptions', text: string, isCorrect: boolean | null, incorrectChoiceExplanation: string | null } | null> | null } | null } | null } | null, playground: { __typename?: 'PlaygroundEntityResponse', data: { __typename?: 'PlaygroundEntity', id: string | null, attributes: { __typename?: 'Playground', prompt: string | null } | null } | null } | null } | null> | null } | null };

export type GetSublessonNavigationDataQueryVariables = Exact<{
  currentLessonId: Scalars['Int'];
}>;


export type GetSublessonNavigationDataQuery = { __typename?: 'Query', nextLessonSlug: string | null };

export const ChallengeHintFragmentDoc = gql`
    fragment challengeHint on ComponentChallengeChallengeHints {
  text
  recommendedTimeBeforeViewing
}
    `;
export const CodeChallengeDataFragmentDoc = gql`
    fragment codeChallengeData on CodeChallengeEntity {
  id
  attributes {
    tests {
      internalTest
      label
    }
    hints {
      ...challengeHint
    }
    getStartingCodeFromPreviousChallenge
    startingCode
    prompt
  }
}
    ${ChallengeHintFragmentDoc}`;
export const MultipleChoiceChallengeDataFragmentDoc = gql`
    fragment multipleChoiceChallengeData on MultipleChoiceChallengeEntity {
  id
  attributes {
    prompt
    options {
      text
      isCorrect
      incorrectChoiceExplanation
    }
    canSelectMultipleOptions
    optionsInitiallyHidden
  }
}
    `;
export const PlaygroundDataFragmentDoc = gql`
    fragment playgroundData on PlaygroundEntity {
  id
  attributes {
    prompt
  }
}
    `;
export const LessonSidebarDataFragmentDoc = gql`
    fragment lessonSidebarData on SublessonEntity {
  attributes {
    name
    steps {
      codeChallenge {
        data {
          ...codeChallengeData
        }
      }
      multipleChoiceChallenge {
        data {
          ...multipleChoiceChallengeData
        }
      }
      playground {
        data {
          ...playgroundData
        }
      }
    }
  }
}
    ${CodeChallengeDataFragmentDoc}
${MultipleChoiceChallengeDataFragmentDoc}
${PlaygroundDataFragmentDoc}`;
export const SublessonDataFragmentDoc = gql`
    fragment sublessonData on SublessonEntity {
  id
  attributes {
    name
    description
    lesson {
      data {
        id
        attributes {
          name
        }
      }
    }
    steps {
      id
      codeChallenge {
        data {
          ...codeChallengeData
        }
      }
      multipleChoiceChallenge {
        data {
          ...multipleChoiceChallengeData
        }
      }
      playground {
        data {
          ...playgroundData
        }
      }
    }
  }
}
    ${CodeChallengeDataFragmentDoc}
${MultipleChoiceChallengeDataFragmentDoc}
${PlaygroundDataFragmentDoc}`;
export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetLessonExternalResourcesDataDocument = gql`
    query getLessonExternalResourcesData($slug: String!) {
  lessons(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        externalResources {
          name
          link
          type
        }
      }
    }
  }
}
    `;

/**
 * __useGetLessonExternalResourcesDataQuery__
 *
 * To run a query within a React component, call `useGetLessonExternalResourcesDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonExternalResourcesDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonExternalResourcesDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLessonExternalResourcesDataQuery(baseOptions: Apollo.QueryHookOptions<GetLessonExternalResourcesDataQuery, GetLessonExternalResourcesDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLessonExternalResourcesDataQuery, GetLessonExternalResourcesDataQueryVariables>(GetLessonExternalResourcesDataDocument, options);
      }
export function useGetLessonExternalResourcesDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonExternalResourcesDataQuery, GetLessonExternalResourcesDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLessonExternalResourcesDataQuery, GetLessonExternalResourcesDataQueryVariables>(GetLessonExternalResourcesDataDocument, options);
        }
export type GetLessonExternalResourcesDataQueryHookResult = ReturnType<typeof useGetLessonExternalResourcesDataQuery>;
export type GetLessonExternalResourcesDataLazyQueryHookResult = ReturnType<typeof useGetLessonExternalResourcesDataLazyQuery>;
export type GetLessonExternalResourcesDataQueryResult = Apollo.QueryResult<GetLessonExternalResourcesDataQuery, GetLessonExternalResourcesDataQueryVariables>;
export const GetCourseMapOverlayDataDocument = gql`
    query getCourseMapOverlayData($slug: String!) {
  courses(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        name
        modules {
          data {
            attributes {
              name
              moduleLessons {
                lesson {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
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
export const GetSyntaxHandbookDataDocument = gql`
    query getSyntaxHandbookData($slug: String!) {
  courses(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        modules {
          data {
            attributes {
              moduleLessons {
                lesson {
                  data {
                    attributes {
                      syntaxEntry {
                        data {
                          attributes {
                            content
                            name
                            maxWidth
                          }
                        }
                      }
                      sublessons {
                        data {
                          attributes {
                            syntaxEntry {
                              data {
                                attributes {
                                  content
                                  name
                                  maxWidth
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSyntaxHandbookDataQuery__
 *
 * To run a query within a React component, call `useGetSyntaxHandbookDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSyntaxHandbookDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSyntaxHandbookDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetSyntaxHandbookDataQuery(baseOptions: Apollo.QueryHookOptions<GetSyntaxHandbookDataQuery, GetSyntaxHandbookDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSyntaxHandbookDataQuery, GetSyntaxHandbookDataQueryVariables>(GetSyntaxHandbookDataDocument, options);
      }
export function useGetSyntaxHandbookDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSyntaxHandbookDataQuery, GetSyntaxHandbookDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSyntaxHandbookDataQuery, GetSyntaxHandbookDataQueryVariables>(GetSyntaxHandbookDataDocument, options);
        }
export type GetSyntaxHandbookDataQueryHookResult = ReturnType<typeof useGetSyntaxHandbookDataQuery>;
export type GetSyntaxHandbookDataLazyQueryHookResult = ReturnType<typeof useGetSyntaxHandbookDataLazyQuery>;
export type GetSyntaxHandbookDataQueryResult = Apollo.QueryResult<GetSyntaxHandbookDataQuery, GetSyntaxHandbookDataQueryVariables>;
export const GetLessonDataDocument = gql`
    query getLessonData($slug: String!) {
  lessons(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        name
        sublessons {
          data {
            ...sublessonData
            ...lessonSidebarData
          }
        }
      }
    }
  }
}
    ${SublessonDataFragmentDoc}
${LessonSidebarDataFragmentDoc}`;

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
export const GetSublessonNavigationDataDocument = gql`
    query getSublessonNavigationData($currentLessonId: Int!) {
  nextLessonSlug(currentLessonId: $currentLessonId)
}
    `;

/**
 * __useGetSublessonNavigationDataQuery__
 *
 * To run a query within a React component, call `useGetSublessonNavigationDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSublessonNavigationDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSublessonNavigationDataQuery({
 *   variables: {
 *      currentLessonId: // value for 'currentLessonId'
 *   },
 * });
 */
export function useGetSublessonNavigationDataQuery(baseOptions: Apollo.QueryHookOptions<GetSublessonNavigationDataQuery, GetSublessonNavigationDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSublessonNavigationDataQuery, GetSublessonNavigationDataQueryVariables>(GetSublessonNavigationDataDocument, options);
      }
export function useGetSublessonNavigationDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSublessonNavigationDataQuery, GetSublessonNavigationDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSublessonNavigationDataQuery, GetSublessonNavigationDataQueryVariables>(GetSublessonNavigationDataDocument, options);
        }
export type GetSublessonNavigationDataQueryHookResult = ReturnType<typeof useGetSublessonNavigationDataQuery>;
export type GetSublessonNavigationDataLazyQueryHookResult = ReturnType<typeof useGetSublessonNavigationDataLazyQuery>;
export type GetSublessonNavigationDataQueryResult = Apollo.QueryResult<GetSublessonNavigationDataQuery, GetSublessonNavigationDataQueryVariables>;