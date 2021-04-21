const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL username,
        user: 'root',
        // your mySQL password
        password: 'Password',
        database: 'election'
    });

module.exports = db;