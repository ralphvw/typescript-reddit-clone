import db from './config/db';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import graphql from './graphql'

dotenv.config();

const env: NodeJS.ProcessEnv = process.env;

const port = parseInt(env.REDDIT_CLONE_PORT || '');
const { resolvers, typeDefs } = graphql

const main = async () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await db.connect().catch((error) => { console.log(error) });
    const { url } = await startStandaloneServer(server, { listen: { port } });

    console.log(`Server started at ${url}`);
}

main();




