let mysql = require('mysql');

let connection = mysql.createConnection ({

    host : 'localhost',

    user : 'root',

    password : 'Sanytol04',

    database : 'tuto'
});

connection.connect()

module.exports = connection