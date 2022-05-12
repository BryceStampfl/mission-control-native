import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import SqlApi from './datasources/sqlApi.js'
import { resolvers } from './resolvers.js';
import { typeDefs } from './schema.js';
import { createStore } from './utils.js';


async function startApolloServer() {
    const store = createStore();
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => ({
            sqlApi: new SqlApi({ store }),
        }),
        cors: {
            origin: true,
            credentials: true,
        },
        path: 'http://localhost:4000',
        csrfPrevention: true,

        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

    });

    await server.start();
    server.applyMiddleware({
        app,
        path: ['/graphql']
        ,
        cors: {
            origin: true,
            credentials: true,
        }
    });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();