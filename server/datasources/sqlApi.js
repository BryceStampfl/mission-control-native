// const { DataSource } = require('apollo-datasource');
import { DataSource } from 'apollo-datasource';

 class SqlApi extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */

  initialize(config) {
    this.context = config.context;
  }

  async retrieveUser(id) {
    const user = await this.store.users.findByPk(id)
    if (user == null) {
      console.log('User not found')
    }

    return user;
  }

  async retrieveTasks(id) {
    console.log("retrieveTasks id is ", id)
    const tasks = await this.store.tasks.findAll({
      where: {
        userId: id
      }
    })
    return tasks;
  }

  // Modified from Apollo GraphQL tutorial
  async createUser({ email: emailArg } = {}) {
    console.log("Creating user with email", emailArg)
    const email =
      this.context && this.context.user ? this.context.user.email : emailArg;
    if (!email) return null;

    const users = await this.store.users.findOrCreate({ where: { email } });
    return users && users[0] ? users[0] : null;
  }

  async createTask(userIdInput, contentInput) {
    console.log("createTask id:", userIdInput, " content:", contentInput);
    const task = await this.store.tasks.create({ content: contentInput, userId: userIdInput })
    return task;
  }
}

export default SqlApi;