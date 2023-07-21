import db from './config/db';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server'
import AuthHelper from './helpers/auth.helper';
import graphql from './graphql'
import MyContext from './types/context';
import express from 'express'
import { createServer } from 'http';
import bodyParser from 'body-parser'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'

dotenv.config();

const env: NodeJS.ProcessEnv = process.env;

const port = parseInt(env.REDDIT_CLONE_PORT || '');
const { resolvers, typeDefs } = graphql
const { authenticate } = AuthHelper

const main = async () => {

    const app = express();

    const httpServer = createServer(app);

    const server = new ApolloServer<MyContext>({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })

    app.use('/', bodyParser.json(), expressMiddleware(server, {
        context: async ({req}) => ({
            user: authenticate(req)
        })
    }))
    await server.start();
    db.connect()
    .then(() => {
      httpServer.listen(port, async () => {
        console.info(
          `🚀🚀 Server ready at http://localhost:${port}/api/v1/graphql`
        );
      });
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
};

main();




