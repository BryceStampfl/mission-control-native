const SQL = require('sequelize');


module.exports.createStore = () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './database.db',
    operatorsAliases,
    logging: false,
  });

  const users = db.define('users', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    token: SQL.STRING,
  });

  const trips = db.define('tasks', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: SQL.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });

  return { users, trips };
};