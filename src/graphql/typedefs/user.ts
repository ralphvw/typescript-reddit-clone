import gql from "graphql-tag";

const User = gql`
    type User {
        id: String
        username: String
        password: String
        createdAt: String
    }

    input SignUp {
        username: String
        password: String
    }

    type UserResponse {
        status: Int!
        message: String!
        data: User
    }

    extend type Mutation {
        signup(username: String, password: String): UserResponse
    }
`

export default User;