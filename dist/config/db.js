"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const pgp = (0, pg_promise_1.default)();
const db = pgp({
    host: process.env.REDDIT_CLONE_DATABSE_HOST,
    port: process.env.REDDIT_CLONE_DATABASE_PORT ? parseInt(process.env.REDDIT_CLONE_DATABASE_PORT) : undefined,
    database: process.env.REDDIT_CLONE_DATABASE_NAME,
    user: process.env.REDDIT_CLONE_DATABASE_USER,
    password: process.env.REDDIT_CLONE_DATABASE_PASSWORD
});
exports.default = db;
//# sourceMappingURL=db.js.map