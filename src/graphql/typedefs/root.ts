import gql from "graphql-tag";

const root = gql`
  scalar JSON
  scalar Upload
  type User {
    root: String
  }
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
  type Subscription {
    root: String
  }
`;

export default root;