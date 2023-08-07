import db from "../config/db";
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

    /**
   * Fetches a pagination collection of a resource.
   * @static
   * @param {Object} options - configuration options.
   * @param {number} options.page - Current page e.g: 1 represents first
   * 30 records by default and 2 represents the next 30 records.
   * @param {number} options.limit - Max number of records.
   * @param {string} options.getCount - query for getting count.
   * @param {string} options.getResources - query for getting resources
   * @param {Array} options.params - Extra parameters for the get resources query.
   * @param {Array} options.countParams - Extra parameters for the get count query.
   * @memberof GenericHelper
   * @returns {Promise} - Returns a promise array of the count and the resources
   */
    static async fetchResourceByPage({
        page = 1,
        limit = 10,
        getCount = '',
        getResources = '',
        params = [],
        countParams = [],
    }) {
        const offSet = (+page - 1) * +limit;
        const fetchCount = db.oneOrNone(getCount, [...countParams]);
        const fetchCountResource = db.any(getResources, [
            offSet,
            +limit,
            ...params,
        ]);
        return Promise.all([fetchCount, fetchCountResource]);
    }
}

export default GenericHelper