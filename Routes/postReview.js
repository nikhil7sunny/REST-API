// to Add new reviews of a book
// data should be given in the following format
		// book_id = book_id
		// review = review
const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql statement for adding row
var addRow = 'insert into book_review (book_id,review) values (?,?)'

router.post('/',(req,res) => {
	// console.log(req)
	var values = [req.body.book_id,req.body.review]
	console.log(values)
	connection.query(addRow,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err)
		else{
			console.log('Added values to table book_review')
			console.log(results.insertId)
			req.send('New Review Added')
		}
	})

})

//exporting module
module.exports = router