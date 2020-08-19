// To Get the details of the author and book Name
//when the book id is given
// Data should be given in the format
		//book id should be given as a query
const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for  getting perticular book
var getQuery = 'select * from book_author where id = ?'

//To get the book Details
router.get('/',(req,res) => {
	values = [req.query.id]
	console.log(req.query)
	connection.query(getQuery,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err)
		else{
			console.log('Book Name Displayed')
			res.send(results[0])
			}
	})
})

//exporting module
module.exports = router


