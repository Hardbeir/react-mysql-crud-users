const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Topruha1",
    database: "mysql-crud"
});

conn.connect((err) =>{
    if(err) throw err;
    console.log("DB connected");
});

module.exports = conn;