CREATE TABLE users(
    id SERIAL NOT NULL primary key,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(10) NOT NULL
);