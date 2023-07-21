import db from "src/config/db";
import postQueries from "src/db/queries/post";
import Post from "src/models/post";

const { getAllPosts } = postQueries;

class PostService {
    /**
     * Fetches all posts from the database
     * @returns {Promise<Post>}
     */
    static async getAllPosts(): Promise<Post[]> {
        return db.any(getAllPosts);
    }
}

export default PostService;