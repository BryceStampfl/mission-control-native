require('dotenv').config();
const { ApolloServer } = require("apollo-server");
const { createStore } = require("./utils");
const typeDefs = require("./schema");
const resolvers = require("./resolvers")


const SqlApi = require("./datasources/sqlApi");

//Setups the SQLite database
const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    sqlApi: new SqlApi({ store }),
  })
});


server.listen().then(() => {

  console.log(`
  
      Server is running!
  
      Listening on port 4000
  
      Explore at https://studio.apollographql.com/sandbox
  
    `);

});