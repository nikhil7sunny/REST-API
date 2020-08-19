const mysql = require('mysql')

//cestablishing connection to sql
const connection = mysql.createPool({
	connectionLimit : 10,
	host : "localhost",
	user : "root",
	password : "******",
	database : "BOOKS"
})


//checking if connection is correct
connection.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// ending connection to sql
// connection.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   });

//exporting sql
module.exports = connection
 