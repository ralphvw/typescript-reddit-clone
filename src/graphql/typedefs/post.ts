import gql from "graphql-tag"
const Post = gql`
 type Post {
    id: String
    title: String!
    createdAt: Date
    updatedAt: Date
 }
`
export default Post;