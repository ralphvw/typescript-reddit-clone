import UserService from "../../service/user"
import GenericHelper from "../../helpers/generic.helper"
import AuthHelper from "../../helpers/auth.helper";
import argon2 from 'argon2';

const { signup, getUserByUsername } = UserService
const { response } = GenericHelper
const { generateToken } = AuthHelper

const userResolvers = {
    Mutation: {
        signup: async (_: any, { username, password }: SignUpArgs) => {
            try {
                if (password.length < 8) return response(403, 'Password is too short', {})
                if(!username) return response(400, 'Invalid username', {})
                const user = await getUserByUsername(username.toLowerCase())
                if (user) return response(409, 'User already exists!', null)
                await signup(username.toLowerCase(), password);
                return response(201, 'User created successfully', null)
            } catch (error) {
                return response(500, error, {});
            }
        },

        login: async (_: any, { username, password }: SignUpArgs) => {
            try {
                const user = await getUserByUsername(username.toLowerCase());
                if (!user) return response(204, 'User does not exist!', {});
                const valid = await argon2.verify(user.password || '', password);
                if (!valid) return response(401, 'Invalid login', {});
                const token = generateToken({ payload: { id: user.id }, expiresIn: '10hr' })
                const data = {
                    token,
                    id: user.id,
                    username: user.username
                }
                return response(200, `Welcome ${username}`, data)
            } catch (error) {
                return response(500, error.message, {});
            }
        }
    }
}

export default userResolvers;