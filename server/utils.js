import { Sequelize as SQL }  from 'sequelize';

export const createStore = () => {

  const db = new SQL({
    dialect: 'sqlite',
    storage: './datasources/database.sqlite3',
    define: {
      timestamps: false
    }
  });

  const users = db.define('users', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: SQL.STRING,
  });

  const tasks = db.define('tasks', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: SQL.STRING,
    userId: {
      type: SQL.INTEGER,
      foreignKey: true,
    },
    finished: {
      type: SQL.BOOLEAN,
      defaultValue: false,
    }
  })

  return { users, tasks };
};



