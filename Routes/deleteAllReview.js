//To Delete all Reviews of a particular Book
//Data should be  given in the following format
//     id = number(id of the book to be deleted)

const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for deleting
var del = 'delete from book_review where book_id = ?'

//to delete a particular review when book id 
//is given 
router.delete('/',(req,res) => {
	values = [req.body.id]
	console.log(req.body)
	console.log(values)
	connection.query(del,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err)
		else
		 	{console.log(`All Reviews of book with id ${req.body.id} deleted sucessfully`)
			req.send(`All Reviews of book with id ${req.body.id} deleted sucessfully`)}
	})
})

//exporting 
module.exports = router


