interface Post {
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    text?: String,
    userId?: String,
    user?: User
}

export default Post;