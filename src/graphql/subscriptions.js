/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
export const onCreateUserFriend = /* GraphQL */ `
  subscription OnCreateUserFriend {
    onCreateUserFriend {
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
export const onUpdateUserFriend = /* GraphQL */ `
  subscription OnUpdateUserFriend {
    onUpdateUserFriend {
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
export const onDeleteUserFriend = /* GraphQL */ `
  subscription OnDeleteUserFriend {
    onDeleteUserFriend {
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
