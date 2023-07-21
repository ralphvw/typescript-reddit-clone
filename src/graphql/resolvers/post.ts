import PostService from "src/service/post";
import GenericHelper from "src/helpers/generic.helper";

const { getAllPosts } = PostService;
const { sendGraphQLResponse } = GenericHelper

const postResolvers = {
    Query: {
        getAllPosts: async () => {
            try {
                const data = await getAllPosts();
                return sendGraphQLResponse(200, 'Posts fetched successfully', data);
            } catch (error) {
                return sendGraphQLResponse(500, error.message, {});
            }
        }
    }
}

export default postResolvers;