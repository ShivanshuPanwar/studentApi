const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool ({
    host:'localhost',
    user: 'root',
    password: 'Password',
    database: 'student_db'
});



module.exports = mysqlPool;    
