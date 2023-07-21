import gql from "graphql-tag"
const Post = gql`
 type Post {
    id: String!
    title: String!
    createdAt: String
    updatedAt: String
 }

 type PostsResponse {
    status: Int!
    message: String!
    data: [Post]
 }

 extend type Query {
    getAllPosts: PostsResponse!
 }
`
export default Post;