/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: "Aggregate";
  count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: "Asset";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"];
  /** The file handle */
  handle: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: "AssetConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  imageProjectsCard?: InputMaybe<ProjectsCardCreateManyInlineInput>;
  imageSkills?: InputMaybe<SkillsCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: "AssetEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC"
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  imageProjectsCard?: InputMaybe<ProjectsCardUpdateManyInlineInput>;
  imageSkills?: InputMaybe<SkillsUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Float"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: "Color";
  css: Scalars["String"];
  hex: Scalars["Hex"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx"
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
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: "DocumentVersion";
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export type Home = Node & {
  __typename?: "Home";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Home>;
  /** List of Home versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  projectDescription?: Maybe<Scalars["String"]>;
  projectTitle?: Maybe<Scalars["String"]>;
  projects: Array<HomeprojectsUnion>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rotateText: Array<HomerotateTextUnion>;
  scheduledIn: Array<ScheduledOperation>;
  skills: Array<HomeskillsUnion>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type HomeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type HomeDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type HomeHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: InputMaybe<Stage>;
};

export type HomeProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type HomePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type HomeRotateTextArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type HomeScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type HomeSkillsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type HomeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type HomeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomeWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomeConnection = {
  __typename?: "HomeConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomeCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["RichTextAST"]>;
  projectDescription?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  projects?: InputMaybe<HomeprojectsUnionCreateManyInlineInput>;
  rotateText?: InputMaybe<HomerotateTextUnionCreateManyInlineInput>;
  skills?: InputMaybe<HomeskillsUnionCreateManyInlineInput>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type HomeCreateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Create and connect multiple existing Home documents */
  create?: InputMaybe<Array<HomeCreateInput>>;
};

export type HomeCreateOneInlineInput = {
  /** Connect one existing Home document */
  connect?: InputMaybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: InputMaybe<HomeCreateInput>;
};

/** An edge in a connection. */
export type HomeEdge = {
  __typename?: "HomeEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Home;
};

/** Identifies documents */
export type HomeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  projectDescription?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  projectDescription_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  projectDescription_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  projectDescription_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  projectDescription_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  projectDescription_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  projectDescription_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  projectDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  projectDescription_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  projectDescription_starts_with?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  projectTitle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  projectTitle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  projectTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  projectTitle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  projectTitle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  projectTitle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  projectTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  projectTitle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  projectTitle_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HomeOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  ProjectDescriptionAsc = "projectDescription_ASC",
  ProjectDescriptionDesc = "projectDescription_DESC",
  ProjectTitleAsc = "projectTitle_ASC",
  ProjectTitleDesc = "projectTitle_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type HomeUpdateInput = {
  description?: InputMaybe<Scalars["RichTextAST"]>;
  projectDescription?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  projects?: InputMaybe<HomeprojectsUnionUpdateManyInlineInput>;
  rotateText?: InputMaybe<HomerotateTextUnionUpdateManyInlineInput>;
  skills?: InputMaybe<HomeskillsUnionUpdateManyInlineInput>;
  title?: InputMaybe<Scalars["String"]>;
};

export type HomeUpdateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: InputMaybe<Array<HomeConnectInput>>;
  /** Create and connect multiple Home documents */
  create?: InputMaybe<Array<HomeCreateInput>>;
  /** Delete multiple Home documents */
  delete?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Disconnect multiple Home documents */
  disconnect?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Home documents */
  set?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Update multiple Home documents */
  update?: InputMaybe<Array<HomeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Home documents */
  upsert?: InputMaybe<Array<HomeUpsertWithNestedWhereUniqueInput>>;
};

export type HomeUpdateManyInput = {
  description?: InputMaybe<Scalars["RichTextAST"]>;
  projectDescription?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type HomeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomeUpdateManyInput;
  /** Document search */
  where: HomeWhereInput;
};

export type HomeUpdateOneInlineInput = {
  /** Connect existing Home document */
  connect?: InputMaybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: InputMaybe<HomeCreateInput>;
  /** Delete currently connected Home document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Home document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Home document */
  update?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Home document */
  upsert?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>;
};

export type HomeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomeUpdateInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
};

export type HomeUpsertInput = {
  /** Create document if it didn't exist */
  create: HomeCreateInput;
  /** Update document if it exists */
  update: HomeUpdateInput;
};

export type HomeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomeUpsertInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
};

/** Identifies documents */
export type HomeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  projectDescription?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  projectDescription_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  projectDescription_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  projectDescription_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  projectDescription_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  projectDescription_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  projectDescription_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  projectDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  projectDescription_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  projectDescription_starts_with?: InputMaybe<Scalars["String"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  projectTitle_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  projectTitle_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  projectTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  projectTitle_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  projectTitle_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  projectTitle_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  projectTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  projectTitle_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  projectTitle_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Home record uniquely */
export type HomeWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type HomeprojectsUnion = ProjectsCard;

export type HomeprojectsUnionConnectInput = {
  ProjectsCard?: InputMaybe<ProjectsCardConnectInput>;
};

export type HomeprojectsUnionCreateInput = {
  ProjectsCard?: InputMaybe<ProjectsCardCreateInput>;
};

export type HomeprojectsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing HomeprojectsUnion documents */
  create?: InputMaybe<Array<HomeprojectsUnionCreateInput>>;
};

export type HomeprojectsUnionCreateOneInlineInput = {
  /** Create and connect one HomeprojectsUnion document */
  create?: InputMaybe<HomeprojectsUnionCreateInput>;
};

export type HomeprojectsUnionCreateWithPositionInput = {
  ProjectsCard?: InputMaybe<ProjectsCardCreateWithPositionInput>;
};

export type HomeprojectsUnionUpdateInput = {
  ProjectsCard?: InputMaybe<ProjectsCardUpdateInput>;
};

export type HomeprojectsUnionUpdateManyInlineInput = {
  /** Create and connect multiple HomeprojectsUnion component instances */
  create?: InputMaybe<Array<HomeprojectsUnionCreateWithPositionInput>>;
  /** Delete multiple HomeprojectsUnion documents */
  delete?: InputMaybe<Array<HomeprojectsUnionWhereUniqueInput>>;
  /** Update multiple HomeprojectsUnion component instances */
  update?: InputMaybe<
    Array<HomeprojectsUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple HomeprojectsUnion component instances */
  upsert?: InputMaybe<
    Array<HomeprojectsUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type HomeprojectsUnionUpdateManyWithNestedWhereInput = {
  ProjectsCard?: InputMaybe<ProjectsCardUpdateManyWithNestedWhereInput>;
};

export type HomeprojectsUnionUpdateOneInlineInput = {
  /** Create and connect one HomeprojectsUnion document */
  create?: InputMaybe<HomeprojectsUnionCreateInput>;
  /** Delete currently connected HomeprojectsUnion document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Update single HomeprojectsUnion document */
  update?: InputMaybe<HomeprojectsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomeprojectsUnion document */
  upsert?: InputMaybe<HomeprojectsUnionUpsertWithNestedWhereUniqueInput>;
};

export type HomeprojectsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  ProjectsCard?: InputMaybe<ProjectsCardUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HomeprojectsUnionUpdateWithNestedWhereUniqueInput = {
  ProjectsCard?: InputMaybe<ProjectsCardUpdateWithNestedWhereUniqueInput>;
};

export type HomeprojectsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  ProjectsCard?: InputMaybe<ProjectsCardUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HomeprojectsUnionUpsertWithNestedWhereUniqueInput = {
  ProjectsCard?: InputMaybe<ProjectsCardUpsertWithNestedWhereUniqueInput>;
};

export type HomeprojectsUnionWhereInput = {
  ProjectsCard?: InputMaybe<ProjectsCardWhereInput>;
};

export type HomeprojectsUnionWhereUniqueInput = {
  ProjectsCard?: InputMaybe<ProjectsCardWhereUniqueInput>;
};

export type HomerotateTextUnion = RotateText;

export type HomerotateTextUnionConnectInput = {
  RotateText?: InputMaybe<RotateTextConnectInput>;
};

export type HomerotateTextUnionCreateInput = {
  RotateText?: InputMaybe<RotateTextCreateInput>;
};

export type HomerotateTextUnionCreateManyInlineInput = {
  /** Create and connect multiple existing HomerotateTextUnion documents */
  create?: InputMaybe<Array<HomerotateTextUnionCreateInput>>;
};

export type HomerotateTextUnionCreateOneInlineInput = {
  /** Create and connect one HomerotateTextUnion document */
  create?: InputMaybe<HomerotateTextUnionCreateInput>;
};

export type HomerotateTextUnionCreateWithPositionInput = {
  RotateText?: InputMaybe<RotateTextCreateWithPositionInput>;
};

export type HomerotateTextUnionUpdateInput = {
  RotateText?: InputMaybe<RotateTextUpdateInput>;
};

export type HomerotateTextUnionUpdateManyInlineInput = {
  /** Create and connect multiple HomerotateTextUnion component instances */
  create?: InputMaybe<Array<HomerotateTextUnionCreateWithPositionInput>>;
  /** Delete multiple HomerotateTextUnion documents */
  delete?: InputMaybe<Array<HomerotateTextUnionWhereUniqueInput>>;
  /** Update multiple HomerotateTextUnion component instances */
  update?: InputMaybe<
    Array<HomerotateTextUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple HomerotateTextUnion component instances */
  upsert?: InputMaybe<
    Array<HomerotateTextUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type HomerotateTextUnionUpdateManyWithNestedWhereInput = {
  RotateText?: InputMaybe<RotateTextUpdateManyWithNestedWhereInput>;
};

export type HomerotateTextUnionUpdateOneInlineInput = {
  /** Create and connect one HomerotateTextUnion document */
  create?: InputMaybe<HomerotateTextUnionCreateInput>;
  /** Delete currently connected HomerotateTextUnion document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Update single HomerotateTextUnion document */
  update?: InputMaybe<HomerotateTextUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomerotateTextUnion document */
  upsert?: InputMaybe<HomerotateTextUnionUpsertWithNestedWhereUniqueInput>;
};

export type HomerotateTextUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  RotateText?: InputMaybe<RotateTextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HomerotateTextUnionUpdateWithNestedWhereUniqueInput = {
  RotateText?: InputMaybe<RotateTextUpdateWithNestedWhereUniqueInput>;
};

export type HomerotateTextUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  RotateText?: InputMaybe<RotateTextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HomerotateTextUnionUpsertWithNestedWhereUniqueInput = {
  RotateText?: InputMaybe<RotateTextUpsertWithNestedWhereUniqueInput>;
};

export type HomerotateTextUnionWhereInput = {
  RotateText?: InputMaybe<RotateTextWhereInput>;
};

export type HomerotateTextUnionWhereUniqueInput = {
  RotateText?: InputMaybe<RotateTextWhereUniqueInput>;
};

export type HomeskillsUnion = Skills;

export type HomeskillsUnionConnectInput = {
  Skills?: InputMaybe<SkillsConnectInput>;
};

export type HomeskillsUnionCreateInput = {
  Skills?: InputMaybe<SkillsCreateInput>;
};

export type HomeskillsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing HomeskillsUnion documents */
  create?: InputMaybe<Array<HomeskillsUnionCreateInput>>;
};

export type HomeskillsUnionCreateOneInlineInput = {
  /** Create and connect one HomeskillsUnion document */
  create?: InputMaybe<HomeskillsUnionCreateInput>;
};

export type HomeskillsUnionCreateWithPositionInput = {
  Skills?: InputMaybe<SkillsCreateWithPositionInput>;
};

export type HomeskillsUnionUpdateInput = {
  Skills?: InputMaybe<SkillsUpdateInput>;
};

export type HomeskillsUnionUpdateManyInlineInput = {
  /** Create and connect multiple HomeskillsUnion component instances */
  create?: InputMaybe<Array<HomeskillsUnionCreateWithPositionInput>>;
  /** Delete multiple HomeskillsUnion documents */
  delete?: InputMaybe<Array<HomeskillsUnionWhereUniqueInput>>;
  /** Update multiple HomeskillsUnion component instances */
  update?: InputMaybe<
    Array<HomeskillsUnionUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple HomeskillsUnion component instances */
  upsert?: InputMaybe<
    Array<HomeskillsUnionUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type HomeskillsUnionUpdateManyWithNestedWhereInput = {
  Skills?: InputMaybe<SkillsUpdateManyWithNestedWhereInput>;
};

export type HomeskillsUnionUpdateOneInlineInput = {
  /** Create and connect one HomeskillsUnion document */
  create?: InputMaybe<HomeskillsUnionCreateInput>;
  /** Delete currently connected HomeskillsUnion document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Update single HomeskillsUnion document */
  update?: InputMaybe<HomeskillsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HomeskillsUnion document */
  upsert?: InputMaybe<HomeskillsUnionUpsertWithNestedWhereUniqueInput>;
};

export type HomeskillsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Skills?: InputMaybe<SkillsUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type HomeskillsUnionUpdateWithNestedWhereUniqueInput = {
  Skills?: InputMaybe<SkillsUpdateWithNestedWhereUniqueInput>;
};

export type HomeskillsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Skills?: InputMaybe<SkillsUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type HomeskillsUnionUpsertWithNestedWhereUniqueInput = {
  Skills?: InputMaybe<SkillsUpsertWithNestedWhereUniqueInput>;
};

export type HomeskillsUnionWhereInput = {
  Skills?: InputMaybe<SkillsWhereInput>;
};

export type HomeskillsUnionWhereUniqueInput = {
  Skills?: InputMaybe<SkillsWhereUniqueInput>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale"
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = "en"
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: "Location";
  distance: Scalars["Float"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one home */
  createHome?: Maybe<Home>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one home from _all_ existing stages. Returns deleted document. */
  deleteHome?: Maybe<Home>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Home documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomesConnection)
   */
  deleteManyHomes: BatchPayload;
  /** Delete many Home documents, return deleted documents */
  deleteManyHomesConnection: HomeConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one home */
  publishHome?: Maybe<Home>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Home documents
   * @deprecated Please use the new paginated many mutation (publishManyHomesConnection)
   */
  publishManyHomes: BatchPayload;
  /** Publish many Home documents */
  publishManyHomesConnection: HomeConnection;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one home */
  schedulePublishHome?: Maybe<Home>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHome?: Maybe<Home>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHome?: Maybe<Home>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Home documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomesConnection)
   */
  unpublishManyHomes: BatchPayload;
  /** Find many Home documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomesConnection: HomeConnection;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one home */
  updateHome?: Maybe<Home>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many homes
   * @deprecated Please use the new paginated many mutation (updateManyHomesConnection)
   */
  updateManyHomes: BatchPayload;
  /** Update many Home documents */
  updateManyHomesConnection: HomeConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one home */
  upsertHome?: Maybe<Home>;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateHomeArgs = {
  data: HomeCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteHomeArgs = {
  where: HomeWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyHomesArgs = {
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationDeleteManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishHomeArgs = {
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyHomesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationPublishManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishHomeArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishHomeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  releaseId?: InputMaybe<Scalars["String"]>;
  where: HomeWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishHomeArgs = {
  from?: Array<Stage>;
  where: HomeWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyHomesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationUnpublishManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateHomeArgs = {
  data: HomeUpdateInput;
  where: HomeWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyHomesArgs = {
  data: HomeUpdateManyInput;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationUpdateManyHomesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]>;
  before?: InputMaybe<Scalars["ID"]>;
  data: HomeUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HomeManyWhereInput>;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertHomeArgs = {
  upsert: HomeUpsertInput;
  where: HomeWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type ProjectsCard = {
  __typename?: "ProjectsCard";
  /** The unique identifier */
  id: Scalars["ID"];
  image?: Maybe<Asset>;
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  /** System stage field */
  stage: Stage;
};

export type ProjectsCardImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProjectsCardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProjectsCardWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProjectsCardConnection = {
  __typename?: "ProjectsCardConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProjectsCardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProjectsCardCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ProjectsCardCreateManyInlineInput = {
  /** Create and connect multiple existing ProjectsCard documents */
  create?: InputMaybe<Array<ProjectsCardCreateInput>>;
};

export type ProjectsCardCreateOneInlineInput = {
  /** Create and connect one ProjectsCard document */
  create?: InputMaybe<ProjectsCardCreateInput>;
};

export type ProjectsCardCreateWithPositionInput = {
  /** Document to create */
  data: ProjectsCardCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProjectsCardEdge = {
  __typename?: "ProjectsCardEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ProjectsCard;
};

/** Identifies documents */
export type ProjectsCardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectsCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectsCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectsCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
};

export enum ProjectsCardOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export type ProjectsCardParent = Home;

export type ProjectsCardParentConnectInput = {
  Home?: InputMaybe<HomeConnectInput>;
};

export type ProjectsCardParentCreateInput = {
  Home?: InputMaybe<HomeCreateInput>;
};

export type ProjectsCardParentCreateManyInlineInput = {
  /** Connect multiple existing ProjectsCardParent documents */
  connect?: InputMaybe<Array<ProjectsCardParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProjectsCardParent documents */
  create?: InputMaybe<Array<ProjectsCardParentCreateInput>>;
};

export type ProjectsCardParentCreateOneInlineInput = {
  /** Connect one existing ProjectsCardParent document */
  connect?: InputMaybe<ProjectsCardParentWhereUniqueInput>;
  /** Create and connect one ProjectsCardParent document */
  create?: InputMaybe<ProjectsCardParentCreateInput>;
};

export type ProjectsCardParentUpdateInput = {
  Home?: InputMaybe<HomeUpdateInput>;
};

export type ProjectsCardParentUpdateManyInlineInput = {
  /** Connect multiple existing ProjectsCardParent documents */
  connect?: InputMaybe<Array<ProjectsCardParentConnectInput>>;
  /** Create and connect multiple ProjectsCardParent documents */
  create?: InputMaybe<Array<ProjectsCardParentCreateInput>>;
  /** Delete multiple ProjectsCardParent documents */
  delete?: InputMaybe<Array<ProjectsCardParentWhereUniqueInput>>;
  /** Disconnect multiple ProjectsCardParent documents */
  disconnect?: InputMaybe<Array<ProjectsCardParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProjectsCardParent documents */
  set?: InputMaybe<Array<ProjectsCardParentWhereUniqueInput>>;
  /** Update multiple ProjectsCardParent documents */
  update?: InputMaybe<
    Array<ProjectsCardParentUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple ProjectsCardParent documents */
  upsert?: InputMaybe<
    Array<ProjectsCardParentUpsertWithNestedWhereUniqueInput>
  >;
};

export type ProjectsCardParentUpdateManyWithNestedWhereInput = {
  Home?: InputMaybe<HomeUpdateManyWithNestedWhereInput>;
};

export type ProjectsCardParentUpdateOneInlineInput = {
  /** Connect existing ProjectsCardParent document */
  connect?: InputMaybe<ProjectsCardParentWhereUniqueInput>;
  /** Create and connect one ProjectsCardParent document */
  create?: InputMaybe<ProjectsCardParentCreateInput>;
  /** Delete currently connected ProjectsCardParent document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ProjectsCardParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ProjectsCardParent document */
  update?: InputMaybe<ProjectsCardParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectsCardParent document */
  upsert?: InputMaybe<ProjectsCardParentUpsertWithNestedWhereUniqueInput>;
};

export type ProjectsCardParentUpdateWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>;
};

export type ProjectsCardParentUpsertWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>;
};

export type ProjectsCardParentWhereInput = {
  Home?: InputMaybe<HomeWhereInput>;
};

export type ProjectsCardParentWhereUniqueInput = {
  Home?: InputMaybe<HomeWhereUniqueInput>;
};

export type ProjectsCardUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ProjectsCardUpdateManyInlineInput = {
  /** Create and connect multiple ProjectsCard component instances */
  create?: InputMaybe<Array<ProjectsCardCreateWithPositionInput>>;
  /** Delete multiple ProjectsCard documents */
  delete?: InputMaybe<Array<ProjectsCardWhereUniqueInput>>;
  /** Update multiple ProjectsCard component instances */
  update?: InputMaybe<
    Array<ProjectsCardUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple ProjectsCard component instances */
  upsert?: InputMaybe<
    Array<ProjectsCardUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type ProjectsCardUpdateManyInput = {
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ProjectsCardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectsCardUpdateManyInput;
  /** Document search */
  where: ProjectsCardWhereInput;
};

export type ProjectsCardUpdateOneInlineInput = {
  /** Create and connect one ProjectsCard document */
  create?: InputMaybe<ProjectsCardCreateInput>;
  /** Delete currently connected ProjectsCard document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ProjectsCard document */
  update?: InputMaybe<ProjectsCardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProjectsCard document */
  upsert?: InputMaybe<ProjectsCardUpsertWithNestedWhereUniqueInput>;
};

export type ProjectsCardUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProjectsCardUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectsCardWhereUniqueInput;
};

export type ProjectsCardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectsCardUpdateInput;
  /** Unique document search */
  where: ProjectsCardWhereUniqueInput;
};

export type ProjectsCardUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectsCardCreateInput;
  /** Update document if it exists */
  update: ProjectsCardUpdateInput;
};

export type ProjectsCardUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProjectsCardUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProjectsCardWhereUniqueInput;
};

export type ProjectsCardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectsCardUpsertInput;
  /** Unique document search */
  where: ProjectsCardWhereUniqueInput;
};

/** Identifies documents */
export type ProjectsCardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectsCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectsCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectsCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  link?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
};

/** References ProjectsCard record uniquely */
export type ProjectsCardWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: "Query";
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single home */
  home?: Maybe<Home>;
  /** Retrieve document version */
  homeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homes */
  homes: Array<Home>;
  /** Retrieve multiple homes using the Relay connection interface */
  homesConnection: HomeConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryHomeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomeWhereUniqueInput;
};

export type QueryHomeVersionArgs = {
  where: VersionWhereInput;
};

export type QueryHomesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<HomeWhereInput>;
};

export type QueryHomesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<HomeWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: "RGBA";
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: "RichText";
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

export type RotateText = {
  __typename?: "RotateText";
  /** The unique identifier */
  id: Scalars["ID"];
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars["String"]>;
};

export type RotateTextConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RotateTextWhereUniqueInput;
};

/** A connection to a list of items. */
export type RotateTextConnection = {
  __typename?: "RotateTextConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RotateTextEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RotateTextCreateInput = {
  text?: InputMaybe<Scalars["String"]>;
};

export type RotateTextCreateManyInlineInput = {
  /** Create and connect multiple existing RotateText documents */
  create?: InputMaybe<Array<RotateTextCreateInput>>;
};

export type RotateTextCreateOneInlineInput = {
  /** Create and connect one RotateText document */
  create?: InputMaybe<RotateTextCreateInput>;
};

export type RotateTextCreateWithPositionInput = {
  /** Document to create */
  data: RotateTextCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type RotateTextEdge = {
  __typename?: "RotateTextEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: RotateText;
};

/** Identifies documents */
export type RotateTextManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RotateTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RotateTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RotateTextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  text?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  text_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars["String"]>;
};

export enum RotateTextOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  TextAsc = "text_ASC",
  TextDesc = "text_DESC"
}

export type RotateTextParent = Home;

export type RotateTextParentConnectInput = {
  Home?: InputMaybe<HomeConnectInput>;
};

export type RotateTextParentCreateInput = {
  Home?: InputMaybe<HomeCreateInput>;
};

export type RotateTextParentCreateManyInlineInput = {
  /** Connect multiple existing RotateTextParent documents */
  connect?: InputMaybe<Array<RotateTextParentWhereUniqueInput>>;
  /** Create and connect multiple existing RotateTextParent documents */
  create?: InputMaybe<Array<RotateTextParentCreateInput>>;
};

export type RotateTextParentCreateOneInlineInput = {
  /** Connect one existing RotateTextParent document */
  connect?: InputMaybe<RotateTextParentWhereUniqueInput>;
  /** Create and connect one RotateTextParent document */
  create?: InputMaybe<RotateTextParentCreateInput>;
};

export type RotateTextParentUpdateInput = {
  Home?: InputMaybe<HomeUpdateInput>;
};

export type RotateTextParentUpdateManyInlineInput = {
  /** Connect multiple existing RotateTextParent documents */
  connect?: InputMaybe<Array<RotateTextParentConnectInput>>;
  /** Create and connect multiple RotateTextParent documents */
  create?: InputMaybe<Array<RotateTextParentCreateInput>>;
  /** Delete multiple RotateTextParent documents */
  delete?: InputMaybe<Array<RotateTextParentWhereUniqueInput>>;
  /** Disconnect multiple RotateTextParent documents */
  disconnect?: InputMaybe<Array<RotateTextParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RotateTextParent documents */
  set?: InputMaybe<Array<RotateTextParentWhereUniqueInput>>;
  /** Update multiple RotateTextParent documents */
  update?: InputMaybe<Array<RotateTextParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RotateTextParent documents */
  upsert?: InputMaybe<Array<RotateTextParentUpsertWithNestedWhereUniqueInput>>;
};

export type RotateTextParentUpdateManyWithNestedWhereInput = {
  Home?: InputMaybe<HomeUpdateManyWithNestedWhereInput>;
};

export type RotateTextParentUpdateOneInlineInput = {
  /** Connect existing RotateTextParent document */
  connect?: InputMaybe<RotateTextParentWhereUniqueInput>;
  /** Create and connect one RotateTextParent document */
  create?: InputMaybe<RotateTextParentCreateInput>;
  /** Delete currently connected RotateTextParent document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected RotateTextParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single RotateTextParent document */
  update?: InputMaybe<RotateTextParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RotateTextParent document */
  upsert?: InputMaybe<RotateTextParentUpsertWithNestedWhereUniqueInput>;
};

export type RotateTextParentUpdateWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>;
};

export type RotateTextParentUpsertWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>;
};

export type RotateTextParentWhereInput = {
  Home?: InputMaybe<HomeWhereInput>;
};

export type RotateTextParentWhereUniqueInput = {
  Home?: InputMaybe<HomeWhereUniqueInput>;
};

export type RotateTextUpdateInput = {
  text?: InputMaybe<Scalars["String"]>;
};

export type RotateTextUpdateManyInlineInput = {
  /** Create and connect multiple RotateText component instances */
  create?: InputMaybe<Array<RotateTextCreateWithPositionInput>>;
  /** Delete multiple RotateText documents */
  delete?: InputMaybe<Array<RotateTextWhereUniqueInput>>;
  /** Update multiple RotateText component instances */
  update?: InputMaybe<
    Array<RotateTextUpdateWithNestedWhereUniqueAndPositionInput>
  >;
  /** Upsert multiple RotateText component instances */
  upsert?: InputMaybe<
    Array<RotateTextUpsertWithNestedWhereUniqueAndPositionInput>
  >;
};

export type RotateTextUpdateManyInput = {
  text?: InputMaybe<Scalars["String"]>;
};

export type RotateTextUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RotateTextUpdateManyInput;
  /** Document search */
  where: RotateTextWhereInput;
};

export type RotateTextUpdateOneInlineInput = {
  /** Create and connect one RotateText document */
  create?: InputMaybe<RotateTextCreateInput>;
  /** Delete currently connected RotateText document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Update single RotateText document */
  update?: InputMaybe<RotateTextUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RotateText document */
  upsert?: InputMaybe<RotateTextUpsertWithNestedWhereUniqueInput>;
};

export type RotateTextUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RotateTextUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RotateTextWhereUniqueInput;
};

export type RotateTextUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RotateTextUpdateInput;
  /** Unique document search */
  where: RotateTextWhereUniqueInput;
};

export type RotateTextUpsertInput = {
  /** Create document if it didn't exist */
  create: RotateTextCreateInput;
  /** Update document if it exists */
  update: RotateTextUpdateInput;
};

export type RotateTextUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RotateTextUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RotateTextWhereUniqueInput;
};

export type RotateTextUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RotateTextUpsertInput;
  /** Unique document search */
  where: RotateTextWhereUniqueInput;
};

/** Identifies documents */
export type RotateTextWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RotateTextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RotateTextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RotateTextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  text?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  text_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars["String"]>;
};

/** References RotateText record uniquely */
export type RotateTextWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: "ScheduledOperation";
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Home;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: "ScheduledOperationConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: "ScheduledOperationEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING"
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: "ScheduledRelease";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars["String"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: "ScheduledReleaseConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: "ScheduledReleaseEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING"
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]>;
  errorMessage?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Skills = {
  __typename?: "Skills";
  /** The unique identifier */
  id: Scalars["ID"];
  image?: Maybe<Asset>;
  name?: Maybe<Scalars["String"]>;
  /** System stage field */
  stage: Stage;
};

export type SkillsImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SkillsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SkillsWhereUniqueInput;
};

/** A connection to a list of items. */
export type SkillsConnection = {
  __typename?: "SkillsConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SkillsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SkillsCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name?: InputMaybe<Scalars["String"]>;
};

export type SkillsCreateManyInlineInput = {
  /** Create and connect multiple existing Skills documents */
  create?: InputMaybe<Array<SkillsCreateInput>>;
};

export type SkillsCreateOneInlineInput = {
  /** Create and connect one Skills document */
  create?: InputMaybe<SkillsCreateInput>;
};

export type SkillsCreateWithPositionInput = {
  /** Document to create */
  data: SkillsCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type SkillsEdge = {
  __typename?: "SkillsEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Skills;
};

/** Identifies documents */
export type SkillsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
};

export enum SkillsOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export type SkillsParent = Home;

export type SkillsParentConnectInput = {
  Home?: InputMaybe<HomeConnectInput>;
};

export type SkillsParentCreateInput = {
  Home?: InputMaybe<HomeCreateInput>;
};

export type SkillsParentCreateManyInlineInput = {
  /** Connect multiple existing SkillsParent documents */
  connect?: InputMaybe<Array<SkillsParentWhereUniqueInput>>;
  /** Create and connect multiple existing SkillsParent documents */
  create?: InputMaybe<Array<SkillsParentCreateInput>>;
};

export type SkillsParentCreateOneInlineInput = {
  /** Connect one existing SkillsParent document */
  connect?: InputMaybe<SkillsParentWhereUniqueInput>;
  /** Create and connect one SkillsParent document */
  create?: InputMaybe<SkillsParentCreateInput>;
};

export type SkillsParentUpdateInput = {
  Home?: InputMaybe<HomeUpdateInput>;
};

export type SkillsParentUpdateManyInlineInput = {
  /** Connect multiple existing SkillsParent documents */
  connect?: InputMaybe<Array<SkillsParentConnectInput>>;
  /** Create and connect multiple SkillsParent documents */
  create?: InputMaybe<Array<SkillsParentCreateInput>>;
  /** Delete multiple SkillsParent documents */
  delete?: InputMaybe<Array<SkillsParentWhereUniqueInput>>;
  /** Disconnect multiple SkillsParent documents */
  disconnect?: InputMaybe<Array<SkillsParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SkillsParent documents */
  set?: InputMaybe<Array<SkillsParentWhereUniqueInput>>;
  /** Update multiple SkillsParent documents */
  update?: InputMaybe<Array<SkillsParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SkillsParent documents */
  upsert?: InputMaybe<Array<SkillsParentUpsertWithNestedWhereUniqueInput>>;
};

export type SkillsParentUpdateManyWithNestedWhereInput = {
  Home?: InputMaybe<HomeUpdateManyWithNestedWhereInput>;
};

export type SkillsParentUpdateOneInlineInput = {
  /** Connect existing SkillsParent document */
  connect?: InputMaybe<SkillsParentWhereUniqueInput>;
  /** Create and connect one SkillsParent document */
  create?: InputMaybe<SkillsParentCreateInput>;
  /** Delete currently connected SkillsParent document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Disconnect currently connected SkillsParent document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  /** Update single SkillsParent document */
  update?: InputMaybe<SkillsParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SkillsParent document */
  upsert?: InputMaybe<SkillsParentUpsertWithNestedWhereUniqueInput>;
};

export type SkillsParentUpdateWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>;
};

export type SkillsParentUpsertWithNestedWhereUniqueInput = {
  Home?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>;
};

export type SkillsParentWhereInput = {
  Home?: InputMaybe<HomeWhereInput>;
};

export type SkillsParentWhereUniqueInput = {
  Home?: InputMaybe<HomeWhereUniqueInput>;
};

export type SkillsUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars["String"]>;
};

export type SkillsUpdateManyInlineInput = {
  /** Create and connect multiple Skills component instances */
  create?: InputMaybe<Array<SkillsCreateWithPositionInput>>;
  /** Delete multiple Skills documents */
  delete?: InputMaybe<Array<SkillsWhereUniqueInput>>;
  /** Update multiple Skills component instances */
  update?: InputMaybe<Array<SkillsUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Skills component instances */
  upsert?: InputMaybe<Array<SkillsUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SkillsUpdateManyInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type SkillsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SkillsUpdateManyInput;
  /** Document search */
  where: SkillsWhereInput;
};

export type SkillsUpdateOneInlineInput = {
  /** Create and connect one Skills document */
  create?: InputMaybe<SkillsCreateInput>;
  /** Delete currently connected Skills document */
  delete?: InputMaybe<Scalars["Boolean"]>;
  /** Update single Skills document */
  update?: InputMaybe<SkillsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Skills document */
  upsert?: InputMaybe<SkillsUpsertWithNestedWhereUniqueInput>;
};

export type SkillsUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SkillsUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SkillsWhereUniqueInput;
};

export type SkillsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SkillsUpdateInput;
  /** Unique document search */
  where: SkillsWhereUniqueInput;
};

export type SkillsUpsertInput = {
  /** Create document if it didn't exist */
  create: SkillsCreateInput;
  /** Update document if it exists */
  update: SkillsUpdateInput;
};

export type SkillsUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SkillsUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: SkillsWhereUniqueInput;
};

export type SkillsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SkillsUpsertInput;
  /** Unique document search */
  where: SkillsWhereUniqueInput;
};

/** Identifies documents */
export type SkillsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SkillsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SkillsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SkillsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
};

/** References Skills record uniquely */
export type SkillsWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED"
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION"
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: "User";
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: "UserConnection";
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK"
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC"
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type Version = {
  __typename?: "Version";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with"
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual"
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert"
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc"
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one"
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update"
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union"
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization"
}

export type GetHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeQuery = {
  __typename?: "Query";
  home?: {
    __typename?: "Home";
    title?: string | null;
    projectDescription?: string | null;
    rotateText: Array<{ __typename?: "RotateText"; text?: string | null }>;
    skills: Array<{
      __typename?: "Skills";
      id: string;
      name?: string | null;
      image?: { __typename?: "Asset"; url: string } | null;
    }>;
    projects: Array<{
      __typename?: "ProjectsCard";
      name?: string | null;
      link?: string | null;
      image?: { __typename?: "Asset"; url: string } | null;
    }>;
  } | null;
};

export const GetHomeDocument = gql`
  query getHome {
    home(where: { id: "cl7zi9gu56kug0bkdjo7ej2zz" }) {
      title
      rotateText {
        ... on RotateText {
          text
        }
      }
      skills {
        ... on Skills {
          id
          name
          image {
            url
          }
        }
      }
      projectDescription
      projects {
        ... on ProjectsCard {
          name
          link
          image {
            url
          }
        }
      }
    }
  }
`;

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetHomeQuery, GetHomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetHomeQuery, GetHomeQueryVariables>(
    GetHomeDocument,
    options
  );
}
export function useGetHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetHomeQuery, GetHomeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(
    GetHomeDocument,
    options
  );
}
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>;
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>;
export type GetHomeQueryResult = Apollo.QueryResult<
  GetHomeQuery,
  GetHomeQueryVariables
>;
