const { gql } = require("apollo-server");

const typeDefs = gql`


type User {
  id: ID!
  email: String!
  tasks: [Task]
  token: String
}

type Task {
    id: ID!
    content: String
    user: User
}

# The "Query" type is special: it lists all of the available queries that

# clients can execute, along with the return type for each. In this

type Query {
  tasks: [Task]
  user(email: String!): User
}

# Mutation return time recommended defining special obj
type Mutation{
  
  createUser(email: String): User
  login(email: String): User
  addTask(content: String): Task
  deleteTask(id: ID!): Task
}
`;

module.exports = typeDefs;