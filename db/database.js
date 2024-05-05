// db/database.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'grand-teton.liara.cloud', 
    user: 'root',
    password: 'a7acmFvZy4W7qKv0A0xF7avm',
    database: 'api',
    port: 33440
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('\x1b[32mConnected to MySQL database as id ' + connection.threadId + '\x1b[0m');

});

module.exports = connection;
