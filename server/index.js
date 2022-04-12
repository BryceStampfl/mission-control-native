const { ApolloServer, gql } = require('apollo-server');



// A schema is a collection of type definitions (hence "typeDefs")

// that together define the "shape" of queries that are executed against

// your data.

const typeDefs = gql`

  type User {
    id: ID!
    name: String
    tasks: [Task]

  }

  type Task {
      text: String
      user: User
  }

  

  # The "Query" type is special: it lists all of the available queries that

  # clients can execute, along with the return type for each. In this

  type Query {
    tasks: [Task]
    User(id: String!): User
  }

  type Mutation{
      addTask(text: String): Task
      deleteTask(text: String): Task
  }
`;

const resolvers = {
      Query: {
          tasks: () => initDataTasks,
      }
}


const initDataTasks = [
    {
        id: 1,
        text: 'Mission One',
        finished: false,
    },
    {
        id: 2,
        text: 'Mission Two',
        finished: false,
    },
    {
        id: 3,
        text: 'Mission Three',
        finished: false,
    },
    {
        id: 4,
        text: 'Mission Four',
        finished: false,
    },
    {
        id: 5,
        text: 'Mission Five',
        finished: true,
    },
    {
        id: 6,
        text: 'Mission Six',
        finished: true,
    },];




// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});