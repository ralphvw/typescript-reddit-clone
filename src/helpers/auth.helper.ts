import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Request } from 'express';

dotenv.config();

const SECRET: Secret = process.env.SECRET || '';

class AuthHelper {
    /**
     * Generates a token
     * @param {GenerateToken} named params 
     * @returns {string}
     */
    static generateToken({ payload, expiresIn = '10hr' }: GenerateToken): string {
        return jwt.sign(payload, SECRET, { expiresIn });
    }

    /**
     * Verifes token
     * @param {string} token 
     * @returns {string | JwtPayload}
     */
    static verifyToken(token: string): string | JwtPayload {
        return jwt.verify(token, SECRET)
    }

    /**
    * checkAuthorizationToken - check authorization
    * @param {Object} authorization - authorization header
     * @returns {string | null} - token
    */
    static checkAuthorizationToken(authorization: string | undefined): string | null {
        let bearerToken = null;
        if (authorization) {
            const token = authorization.split(' ')[1];
            bearerToken = token || authorization;
        }
        return bearerToken;
    }

    /**
     * checkToken
     * @param {Request} req - request object
     * @returns {String} - Token
     */
    static checkToken(req: Request): string {
        const {
            headers: { authorization },
        } = req;
        const bearerToken = AuthHelper.checkAuthorizationToken(authorization);
        return (
            bearerToken ||
            req.headers['x-access-token'] ||
            req.headers.token ||
            req.body.token ||
            req.query.access_token
        );
    }

    /**
    * authenticate
    * @param {Request} req - object request
    * @returns {string | JwtPayload | null}
    */
    static authenticate(req: Request): string | JwtPayload | null {
        try {
            const token = AuthHelper.checkToken(req);
            if (!token) {
                return null
            } else {
                const decoded = AuthHelper.verifyToken(token);
                return decoded
            }
        } catch (error) {
            return null
        }
    }
}

export default AuthHelper;