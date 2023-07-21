import argon2 from 'argon2'
import GenericHelper from 'src/helpers/generic.helper'
import userQueries from '../db/queries/user'
import db from 'src/config/db';

const { generateId } = GenericHelper;
const { addUser, getUserByUsername } = userQueries;

class UserService {
    /**
     * Adds a user
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<null>}
     */
    static async signup(username: string, password: string): Promise<null> {
        const id = generateId();
        const hashedPassword = await argon2.hash(password);
        return db.none(addUser, [id, username, hashedPassword]);
    }

    /**
     * Gets a user by their username
     * @param {string} username 
     * @returns {Promise<User | null>}
     */
    static async getUserByUsername(username: string): Promise<User | null> {
        return db.oneOrNone(getUserByUsername, [username])
    }
}

export default UserService;