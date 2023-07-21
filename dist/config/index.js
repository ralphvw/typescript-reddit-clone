"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const env_1 = __importDefault(require("./env"));
exports.default = { db: db_1.default, env: env_1.default };
//# sourceMappingURL=index.js.map