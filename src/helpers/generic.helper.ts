import { nanoid } from "nanoid";

class GenericHelper {
    /**
     * Generates a unique id
     * @returns {string} 
     */
    static generateId(): string {
        return nanoid()
    }

    /**
     * Sends a graphql response
     * @param {number} status - http status code
     * @param {string} message - response message
     * @param {any} data - JSON response
     * @returns {any}
     */
    static response(status: number, message: string, data: any): any {
        return {
            status,
            message,
            data
        }
    }
}

export default GenericHelper