//To delete the name and author when the book 
//name  is given
//Data should be given in the following format
//       book = name (name of the Book to be Deleted)

const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for deleting
var del = 'delete from book_author where book = ?'

//To delete a Book from database
router.delete('/',(req,res) => {
	values = [req.body.book]
	console.log(values)
	connection.query(del,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err)
		else
		 	{console.log('Book name deleted sucessfully')
		 	req.send('Book name deleted sucessfully')
			}
	})
})


//exporting module
module.exports = router


