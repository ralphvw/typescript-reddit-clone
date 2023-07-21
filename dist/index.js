"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const graphql_1 = __importDefault(require("./graphql"));
dotenv_1.default.config();
const env = process.env;
const port = parseInt(env.REDDIT_CLONE_PORT || '');
const { resolvers, typeDefs } = graphql_1.default;
const main = async () => {
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers
    });
    await db_1.default.connect().catch((error) => { console.log(error); });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, { listen: { port } });
    console.log(`Server started at ${url}`);
};
main();
//# sourceMappingURL=index.js.map