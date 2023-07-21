import UserService from "src/service/user"
import GenericHelper from "src/helpers/generic.helper"

const { signup, getUserByUsername } = UserService
const { sendGraphQLResponse } = GenericHelper

const userResolvers = {
    Mutation: {
        signup: async (_: any, { username, password }: SignUpArgs) => {
            try {
                const user = await getUserByUsername(username)
                if(user) return sendGraphQLResponse(409, 'User already exists!', null)
                await signup(username, password);
                return sendGraphQLResponse(201, 'User created successfully', null)
            } catch (error) {
                return
            }
        }
    }
}

export default userResolvers;