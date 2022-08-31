const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "node-app",
    password: "3Gs454voy.a"
});

module.exports = connection.promise();





