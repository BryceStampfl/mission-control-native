import { gql } from 'apollo-server'

export const typeDefs = gql`
type User {
  id: ID!
  email: String!
  tasks: [Task]
}

type Task {
    id: ID!
    content: String!
    userId: ID!
    finished: Boolean
}

type Query {
  getUserById(id: ID): User
  getTasksById(id: ID): [Task]
  getStatus: String

}

# Mutation return type recommended defining special obj
type Mutation{
  createUser(email: String): User
  createTask(userId: ID!, content: String!): Task
}
`;