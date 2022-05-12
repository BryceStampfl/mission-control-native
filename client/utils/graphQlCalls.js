import { gql } from '@apollo/client';

export const POST_TASK = gql`
mutation Mutation($userId: ID!, $content: String!) {
  createTask(userId: $userId, content: $content) {
    id
    content
  }
}`

export const GET_TASKS = gql`
query GetTasksById($userId: ID) {
  getTasksById(id: $userId) {
    id
    content
    finished
  }
}`

export const GET_STATUS = gql`
query Query {
  getStatus
}`