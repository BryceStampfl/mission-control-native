

// Resolvers signature fieldName: (parent, args, context, info) => data;
// parent: Return value of the resolver for this fields parent(the resolvers for a parent field always executes first)
// args: This object contains all GraphQL arguments
// context: This object is shared across all resolvers that execute for a particular operation, useful for auth and access to data sources
// info: This contains information about the execution state of the operation ~ used only in advanced cases


// Resolvers return either Data ofrequired type,
// or A promise that fulfills with data of the required type
module.exports = {
  Query: {
    user: (_, __, { dataSources }) => dataSources.userApi.createUser(),
  },
  Mutation: {
    createUser: async (_, { email }, { dataSources }) => {
      const user = await dataSources.userApi.createUser({email});
      console.log("\nUser found is \n" + user)
      return user;
  }

  },

};
