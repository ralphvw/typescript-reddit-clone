import gql from "graphql-tag"
const Post = gql`
 type Post {
   id: String!
   text: String!
   createdAt: String
   updatedAt: String
   user: User
 }

 type PostsResponse {
   status: Int!
   message: String!
   data: [Post]
 }

 type PostResponse {
   status: Int!
   message: String!
   data: Post
 }

 extend type Query {
   getAllPosts: PostsResponse!
 }

 extend type Mutation {
   createPost(text: String!): PostResponse
 }
`
export default Post;