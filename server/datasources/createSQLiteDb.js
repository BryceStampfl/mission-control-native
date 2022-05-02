const sqlite3 = require('sqlite3')

let db = new sqlite3.Database("./database.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        /* Put code to create table(s) here */
        createTable() 
    } 
})

const createTable = () => {
    console.log("create database table users");
    db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT)",  insertUsersData);
    db.run("CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, userId INTEGER, FOREIGN KEY(userId) REFERENCES users(id) )",  insertTasksData);

}

const insertUsersData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO users (email) VALUES (?)', ["testOne@email.com"]);
    db.run('INSERT INTO users (email) VALUES (?)', ["testTwo@email.com"]);
    db.run('INSERT INTO users (email) VALUES (?)', ["testThree@email.com"]);
}

const insertTasksData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO tasks (content, userId) VALUES ("content 1 for id1", 1)');
    db.run('INSERT INTO tasks (content, userId) VALUES ("content 2 for id1", 1)');
    db.run('INSERT INTO tasks (content, userId) VALUES ("content 1 for id2", 2)');
    db.run('INSERT INTO tasks (content, userId) VALUES ("content 1 for id3", 3)');
}



read = () => {
    console.log("Read data from contacts");
    db.all("SELECT rowid AS id, email FROM users", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name);
        });
    });
}

db.close();