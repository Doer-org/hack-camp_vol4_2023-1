/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createFriend($input: CreateFriendInput!) {\n    createFriend(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n": types.CreateFriendDocument,
    "\n  mutation deleteFriend($input: DeleteFriendInput!) {\n    deleteFriend(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n": types.DeleteFriendDocument,
    "\n  mutation updateFriendAccept($input: UpdateFriendAcceptInput!) {\n    updateFriendAccept(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n": types.UpdateFriendAcceptDocument,
    "\n  mutation createHangout($input: CreateHangoutInput!) {\n    createHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n": types.CreateHangoutDocument,
    "\n  mutation deleteHangout($input: DeleteHangoutInput!) {\n    deleteHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n": types.DeleteHangoutDocument,
    "\n  mutation updateHangout($input: UpdateHangoutInput!) {\n    updateHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n": types.UpdateHangoutDocument,
    "\n  mutation createSchedule($input: CreateScheduleInput!) {\n    createSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n": types.CreateScheduleDocument,
    "\n  mutation deleteSchedule($input: DeleteScheduleInput!) {\n    deleteSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n": types.DeleteScheduleDocument,
    "\n  mutation updateSchedule($input: UpdateScheduleInput!) {\n    updateSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n": types.UpdateScheduleDocument,
    "\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n      description\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation updateUser($input: UpdateUserInput!) {\n    updateUser(input: $input) {\n      id\n      name\n      description\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query getFriendsByUserId($user_id: ID!) {\n    getFriendsByUserId(user_id: $user_id) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n": types.GetFriendsByUserIdDocument,
    "\n  query getHangoutsByUserId($user_id: ID!) {\n    getHangoutsByUserId(user_id: $user_id) {\n      id\n      user_id\n      name\n    }\n  }\n": types.GetHangoutsByUserIdDocument,
    "\n  query getSchedulesByUserId($user_id: ID!) {\n    getSchedulesByUserId(user_id: $user_id) {\n      id\n      user_id\n      date\n    }\n  }\n": types.GetSchedulesByUserIdDocument,
    "\n  query getUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      name\n      description\n    }\n  }\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createFriend($input: CreateFriendInput!) {\n    createFriend(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"): (typeof documents)["\n  mutation createFriend($input: CreateFriendInput!) {\n    createFriend(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteFriend($input: DeleteFriendInput!) {\n    deleteFriend(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"): (typeof documents)["\n  mutation deleteFriend($input: DeleteFriendInput!) {\n    deleteFriend(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateFriendAccept($input: UpdateFriendAcceptInput!) {\n    updateFriendAccept(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"): (typeof documents)["\n  mutation updateFriendAccept($input: UpdateFriendAcceptInput!) {\n    updateFriendAccept(input: $input) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createHangout($input: CreateHangoutInput!) {\n    createHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation createHangout($input: CreateHangoutInput!) {\n    createHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteHangout($input: DeleteHangoutInput!) {\n    deleteHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation deleteHangout($input: DeleteHangoutInput!) {\n    deleteHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateHangout($input: UpdateHangoutInput!) {\n    updateHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation updateHangout($input: UpdateHangoutInput!) {\n    updateHangout(input: $input) {\n      id\n      user_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createSchedule($input: CreateScheduleInput!) {\n    createSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation createSchedule($input: CreateScheduleInput!) {\n    createSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteSchedule($input: DeleteScheduleInput!) {\n    deleteSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation deleteSchedule($input: DeleteScheduleInput!) {\n    deleteSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateSchedule($input: UpdateScheduleInput!) {\n    updateSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n"): (typeof documents)["\n  mutation updateSchedule($input: UpdateScheduleInput!) {\n    updateSchedule(input: $input) {\n      id\n      user_id\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUser($input: UpdateUserInput!) {\n    updateUser(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation updateUser($input: UpdateUserInput!) {\n    updateUser(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFriendsByUserId($user_id: ID!) {\n    getFriendsByUserId(user_id: $user_id) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"): (typeof documents)["\n  query getFriendsByUserId($user_id: ID!) {\n    getFriendsByUserId(user_id: $user_id) {\n      id\n      user_id\n      friend_id\n      accept\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getHangoutsByUserId($user_id: ID!) {\n    getHangoutsByUserId(user_id: $user_id) {\n      id\n      user_id\n      name\n    }\n  }\n"): (typeof documents)["\n  query getHangoutsByUserId($user_id: ID!) {\n    getHangoutsByUserId(user_id: $user_id) {\n      id\n      user_id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSchedulesByUserId($user_id: ID!) {\n    getSchedulesByUserId(user_id: $user_id) {\n      id\n      user_id\n      date\n    }\n  }\n"): (typeof documents)["\n  query getSchedulesByUserId($user_id: ID!) {\n    getSchedulesByUserId(user_id: $user_id) {\n      id\n      user_id\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  query getUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;