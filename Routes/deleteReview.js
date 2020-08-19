//To Delete the review of a particular book when 
//book id is given 
// Data should be given in the following format
//   id = num (id of the book_review)
const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for deleting
var del = 'delete from book_review where review_id = ?'

//to delete a particular review when review id 
//is given 
router.delete('/',(req,res) => {
	values = [req.body.id]
	connection.query(del,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err)
		else
		 	console.log('Book Review deleted sucessfully')
	})
})

//exporting module
module.exports = router


