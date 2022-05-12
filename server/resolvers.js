// Resolvers signature fieldName: (parent, args, context, info) => data;
// parent: Return value of the resolver for this fields parent(the resolvers for a parent field always executes first)
// args: This object contains all GraphQL arguments
// context: This object is shared across all resolvers that execute for a particular operation, useful for auth and access to data sources
// info: This contains information about the execution state of the operation ~ used only in advanced cases


// Resolvers return either Data ofrequired type,
// or A promise that fulfills with data of the required type

export const resolvers = {
  Query: {
    getUserById: async (_, { id }, { dataSources }) => {
      const result = await dataSources.sqlApi.retrieveUser(id);
      return result;
    },
    getTasksById: async (_, { id }, { dataSources }) => {
      console.log("getTasksById queried")
      const result = await dataSources.sqlApi.retrieveTasks(id);
      console.log("getTasksById result ", result[0])
      return result;
    },
    getStatus: (_, __, ___) => {
      return "true"
    }
  },
  Mutation: {
    createUser: async (_, { email }, { dataSources }) => {
      const user = await dataSources.sqlApi.createUser(email);
      return user;
    },
    createTask: async (_, { userId, content }, { dataSources }) => {
      const task = await dataSources.sqlApi.createTask(userId, content);
      return task;
    },
  },
};
