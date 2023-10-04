
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
var sql = "INSERT INTO customers (name, adress) VALUES ('Company Inc', 'Highway 37')"
con.query(sql, function (err, result) {
if (err) throw err;
console.log("1 record inserted");
});

});
