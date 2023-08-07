import db from "../config/db";
import postQueries from "../db/queries/post";
import Post from "../models/post";
import GenericHelper from "../helpers/generic.helper";

const { getAllPosts, createPost, countPosts } = postQueries;
const { generateId, fetchResourceByPage } = GenericHelper

class PostService {
    /**
     * Fetches all posts from the database paginated
     * @returns {Promise<Post>}
     */
    static async getAllPosts({ page, limit }: any): Promise<Post[]> {
        const [_, posts] = await fetchResourceByPage({
            page,
            limit,
            getResources: getAllPosts,
            getCount: countPosts,
            params: [],
            countParams: []
        })

        return posts;
    }

    /**
     * Creates a post
     * @param args 
     * @returns {Promise<null>}
     */
    static async createPost({ text, userId }: Post): Promise<null> {
        const postId = generateId()
        return db.none(createPost, [postId, text, userId])
    }
}

export default PostService;