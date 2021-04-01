/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      displayName
      email
      owner
      friends {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        displayName
        email
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserFriend = /* GraphQL */ `
  query GetUserFriend($id: ID!) {
    getUserFriend(id: $id) {
      id
      userID
      friendID
      user {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserFriends = /* GraphQL */ `
  query ListUserFriends(
    $filter: ModelUserFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        friendID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
