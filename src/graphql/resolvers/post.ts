import PostService from "../../service/post";
import GenericHelper from "../../helpers/generic.helper";
import Post from "../../models/post";

const { getAllPosts, createPost } = PostService;
const { response } = GenericHelper

const postResolvers = {
    Query: {
        getAllPosts: async (_: any, { page, limit }: any) => {
            try {
                const data = await getAllPosts({ page, limit });
                return response(200, 'Posts fetched successfully', data);
            } catch (error) {
                return response(500, error.message, {});
            }
        }
    },

    Mutation: {
        createPost: async (_: any, { text }: Post, { user }: any) => {
            try {
                if(!user) return response(401, 'Unauthorized', null);
                if (!text) return response(400, 'Invalid input', null)
                await createPost({ text, userId: user.id })
                return response(200, 'Post created successfully', null)
            } catch (error) {
                return response(500, error.message, {})
            }
        }
    }
}

export default postResolvers;