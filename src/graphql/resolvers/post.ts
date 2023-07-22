import PostService from "../../service/post";
import GenericHelper from "../../helpers/generic.helper";

const { getAllPosts } = PostService;
const { response } = GenericHelper

const postResolvers = {
    Query: {
        getAllPosts: async () => {
            try {
                const data = await getAllPosts();
                return response(200, 'Posts fetched successfully', data);
            } catch (error) {
                return response(500, error.message, {});
            }
        }
    }
}

export default postResolvers;