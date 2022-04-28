const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createStore } = require("./utils");
const resolvers = require("./resolvers")

const UserAPI = require("./datasources/user");

const store = createStore();

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => {
        userApi: new UserAPI({store})
    }
 });


server.listen().then(() => {

    console.log(`
  
      Server is running!
  
      Listening on port 4000
  
      Explore at https://studio.apollographql.com/sandbox
  
    `);
  
  });