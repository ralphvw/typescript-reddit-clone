interface Post {
    id: number,
    createdAt?: Date,
    updatedAt?: Date,
    text?: String,
    user?: User
}

export default Post;