
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
var sql = "UPDATE customers SET adress = 'Canyon 123' WHERE adress = 'Valley345'";
con.query(sql, function (err, result) {
if (err) throw err;
console.log(result.affectedRows + "record(s) updated");
});

});
