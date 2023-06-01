/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateFriendInput = {
  friend_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateHangoutInput = {
  name: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateScheduleInput = {
  date: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateUserInput = {
  description: Scalars['String']['input'];
  firebase_id: Scalars['ID']['input'];
  group_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type DeleteFriendInput = {
  id: Scalars['ID']['input'];
};

export type DeleteHangoutInput = {
  id: Scalars['ID']['input'];
};

export type DeleteScheduleInput = {
  id: Scalars['ID']['input'];
};

export type Friend = {
  __typename?: 'Friend';
  accept: Scalars['Boolean']['output'];
  friend_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  user_id: Scalars['ID']['output'];
};

export type Hangout = {
  __typename?: 'Hangout';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFriend: Friend;
  createHangout: Hangout;
  createSchedule: Schedule;
  createUser: User;
  deleteFriend: Friend;
  deleteHangout: Hangout;
  deleteSchedule: Schedule;
  updateFriendAccept: Friend;
  updateHangout: Hangout;
  updateSchedule: Schedule;
};


export type MutationCreateFriendArgs = {
  input?: InputMaybe<CreateFriendInput>;
};


export type MutationCreateHangoutArgs = {
  input: CreateHangoutInput;
};


export type MutationCreateScheduleArgs = {
  input: CreateScheduleInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteFriendArgs = {
  input?: InputMaybe<DeleteFriendInput>;
};


export type MutationDeleteHangoutArgs = {
  input: DeleteHangoutInput;
};


export type MutationDeleteScheduleArgs = {
  input: DeleteScheduleInput;
};


export type MutationUpdateFriendAcceptArgs = {
  input?: InputMaybe<UpdateFriendAcceptInput>;
};


export type MutationUpdateHangoutArgs = {
  input: UpdateHangoutInput;
};


export type MutationUpdateScheduleArgs = {
  input: UpdateScheduleInput;
};

export type Query = {
  __typename?: 'Query';
  getFriendsByUserId: Array<Friend>;
  getHangoutsByuserId: Array<Hangout>;
  getSchedulesByUserId: Array<Schedule>;
  getUserById: User;
};


export type QueryGetFriendsByUserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetHangoutsByuserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetSchedulesByUserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Schedule = {
  __typename?: 'Schedule';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user_id: Scalars['ID']['output'];
};

export type UpdateFriendAcceptInput = {
  accept: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateHangoutInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateScheduleInput = {
  date: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  description: Scalars['String']['output'];
  firebase_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', id: string, firebase_id: string, name: string, description: string } };


export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firebase_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateFriendInput = {
  friend_id: Scalars['ID']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateHangoutInput = {
  name: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateScheduleInput = {
  date: Scalars['String']['input'];
  user_id: Scalars['ID']['input'];
};

export type CreateUserInput = {
  description: Scalars['String']['input'];
  firebase_id: Scalars['ID']['input'];
  group_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type DeleteFriendInput = {
  id: Scalars['ID']['input'];
};

export type DeleteHangoutInput = {
  id: Scalars['ID']['input'];
};

export type DeleteScheduleInput = {
  id: Scalars['ID']['input'];
};

export type Friend = {
  __typename?: 'Friend';
  accept: Scalars['Boolean']['output'];
  friend_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  user_id: Scalars['ID']['output'];
};

export type Hangout = {
  __typename?: 'Hangout';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFriend: Friend;
  createHangout: Hangout;
  createSchedule: Schedule;
  createUser: User;
  deleteFriend: Friend;
  deleteHangout: Hangout;
  deleteSchedule: Schedule;
  updateFriendAccept: Friend;
  updateHangout: Hangout;
  updateSchedule: Schedule;
};


export type MutationCreateFriendArgs = {
  input?: InputMaybe<CreateFriendInput>;
};


export type MutationCreateHangoutArgs = {
  input: CreateHangoutInput;
};


export type MutationCreateScheduleArgs = {
  input: CreateScheduleInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteFriendArgs = {
  input?: InputMaybe<DeleteFriendInput>;
};


export type MutationDeleteHangoutArgs = {
  input: DeleteHangoutInput;
};


export type MutationDeleteScheduleArgs = {
  input: DeleteScheduleInput;
};


export type MutationUpdateFriendAcceptArgs = {
  input?: InputMaybe<UpdateFriendAcceptInput>;
};


export type MutationUpdateHangoutArgs = {
  input: UpdateHangoutInput;
};


export type MutationUpdateScheduleArgs = {
  input: UpdateScheduleInput;
};

export type Query = {
  __typename?: 'Query';
  getFriendsByUserId: Array<Friend>;
  getHangoutsByuserId: Array<Hangout>;
  getSchedulesByUserId: Array<Schedule>;
  getUserById: User;
};


export type QueryGetFriendsByUserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetHangoutsByuserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetSchedulesByUserIdArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Schedule = {
  __typename?: 'Schedule';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user_id: Scalars['ID']['output'];
};

export type UpdateFriendAcceptInput = {
  accept: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateHangoutInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateScheduleInput = {
  date: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  description: Scalars['String']['output'];
  firebase_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', id: string, firebase_id: string, name: string, description: string } };
