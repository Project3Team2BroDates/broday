const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    hobbies: [Hobby]!
  }
  type Auth {
    token: ID!
    profile: Profile
  }

  type Hobby {
    _id: ID
    name: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    hobbies(username: String): [Hobby]
    hobby(hobbyId: ID!): Hobby
  }

  type Mutation {
    addProfile(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addHobby(name: String!): Hobby
    removeProfile(profileId: ID!): Profile
    removeHobby(profileId: ID!, hobby: Hobby!): Profile
  }
`;

module.exports = typeDefs;
