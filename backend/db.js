const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '369damnyourfine',
    database: 'todo'
})

module.exports = connection;