const { gql } = require("apollo-server");

const typeDefs = gql`


type User {
  id: ID!
  email: String!
  tasks: [Task]
}

type Task {
    id: ID!
    content: String
    userId: ID!
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this

type Query {
  getUserById(id: ID): User
  getTasksById(id: ID): [Task]
}

# Mutation return type recommended defining special obj
type Mutation{
  createUser(email: String): User
}
`;

module.exports = typeDefs;