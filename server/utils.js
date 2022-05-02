const SQL = require('sequelize');


module.exports.createStore = () => {
 
//const db2 = new SQL('sqlite::memory:') // Example for sqlite


const db = new SQL({
  dialect: 'sqlite',
  storage: './datasources/database.sqlite3'
});

  const users = db.define('users', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // createdAt: SQL.DATE,
    // updatedAt: SQL.DATE,
    email: SQL.STRING,
  });

  return { users };
};



