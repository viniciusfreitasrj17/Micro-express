// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  article: (where?: ArticleWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  article: (where: ArticleWhereUniqueInput) => ArticleNullablePromise;
  articles: (args?: {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Article>;
  articlesConnection: (args?: {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ArticleConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createArticle: (data: ArticleCreateInput) => ArticlePromise;
  updateArticle: (args: {
    data: ArticleUpdateInput;
    where: ArticleWhereUniqueInput;
  }) => ArticlePromise;
  updateManyArticles: (args: {
    data: ArticleUpdateManyMutationInput;
    where?: ArticleWhereInput;
  }) => BatchPayloadPromise;
  upsertArticle: (args: {
    where: ArticleWhereUniqueInput;
    create: ArticleCreateInput;
    update: ArticleUpdateInput;
  }) => ArticlePromise;
  deleteArticle: (where: ArticleWhereUniqueInput) => ArticlePromise;
  deleteManyArticles: (where?: ArticleWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  article: (
    where?: ArticleSubscriptionWhereInput
  ) => ArticleSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ArticleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "stock_ASC"
  | "stock_DESC"
  | "price_ASC"
  | "price_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ArticleCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  stock: Int;
  price: Float;
}

export interface ArticleWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  stock?: Maybe<Int>;
  stock_not?: Maybe<Int>;
  stock_in?: Maybe<Int[] | Int>;
  stock_not_in?: Maybe<Int[] | Int>;
  stock_lt?: Maybe<Int>;
  stock_lte?: Maybe<Int>;
  stock_gt?: Maybe<Int>;
  stock_gte?: Maybe<Int>;
  price?: Maybe<Float>;
  price_not?: Maybe<Float>;
  price_in?: Maybe<Float[] | Float>;
  price_not_in?: Maybe<Float[] | Float>;
  price_lt?: Maybe<Float>;
  price_lte?: Maybe<Float>;
  price_gt?: Maybe<Float>;
  price_gte?: Maybe<Float>;
  AND?: Maybe<ArticleWhereInput[] | ArticleWhereInput>;
  OR?: Maybe<ArticleWhereInput[] | ArticleWhereInput>;
  NOT?: Maybe<ArticleWhereInput[] | ArticleWhereInput>;
}

export interface ArticleUpdateInput {
  name?: Maybe<String>;
  stock?: Maybe<Int>;
  price?: Maybe<Float>;
}

export interface ArticleUpdateManyMutationInput {
  name?: Maybe<String>;
  stock?: Maybe<Int>;
  price?: Maybe<Float>;
}

export interface ArticleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ArticleWhereInput>;
  AND?: Maybe<ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput>;
  OR?: Maybe<ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput>;
  NOT?: Maybe<ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput>;
}

export type ArticleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface ArticleEdge {
  node: Article;
  cursor: String;
}

export interface ArticleEdgePromise extends Promise<ArticleEdge>, Fragmentable {
  node: <T = ArticlePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ArticleEdgeSubscription
  extends Promise<AsyncIterator<ArticleEdge>>,
    Fragmentable {
  node: <T = ArticleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Article {
  id: ID_Output;
  name: String;
  stock: Int;
  price: Float;
}

export interface ArticlePromise extends Promise<Article>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  stock: () => Promise<Int>;
  price: () => Promise<Float>;
}

export interface ArticleSubscription
  extends Promise<AsyncIterator<Article>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  stock: () => Promise<AsyncIterator<Int>>;
  price: () => Promise<AsyncIterator<Float>>;
}

export interface ArticleNullablePromise
  extends Promise<Article | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  stock: () => Promise<Int>;
  price: () => Promise<Float>;
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType;
  node: Article;
  updatedFields: String[];
  previousValues: ArticlePreviousValues;
}

export interface ArticleSubscriptionPayloadPromise
  extends Promise<ArticleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ArticlePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ArticlePreviousValuesPromise>() => T;
}

export interface ArticleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ArticleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ArticleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ArticlePreviousValuesSubscription>() => T;
}

export interface ArticleConnection {
  pageInfo: PageInfo;
  edges: ArticleEdge[];
}

export interface ArticleConnectionPromise
  extends Promise<ArticleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ArticleEdge>>() => T;
  aggregate: <T = AggregateArticlePromise>() => T;
}

export interface ArticleConnectionSubscription
  extends Promise<AsyncIterator<ArticleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ArticleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateArticleSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateArticle {
  count: Int;
}

export interface AggregateArticlePromise
  extends Promise<AggregateArticle>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateArticleSubscription
  extends Promise<AsyncIterator<AggregateArticle>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ArticlePreviousValues {
  id: ID_Output;
  name: String;
  stock: Int;
  price: Float;
}

export interface ArticlePreviousValuesPromise
  extends Promise<ArticlePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  stock: () => Promise<Int>;
  price: () => Promise<Float>;
}

export interface ArticlePreviousValuesSubscription
  extends Promise<AsyncIterator<ArticlePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  stock: () => Promise<AsyncIterator<Int>>;
  price: () => Promise<AsyncIterator<Float>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Article",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;