CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    name varchar(255)
);

CREATE TABLE tasks(
    id INTEGER PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    content varchar(255) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO
    users(name)
VALUES
    ("One"),
    ("Two"),
    ("Three"),
    ("Four"),
    ("Five");

INSERT INTO
    tasks (user_id, content)
VALUES
    (1, "task one"),
    (1, "task two"),
    (2, "task three"),
    (3, "task one"),
    (4, "task two"),
    (5, "task three");