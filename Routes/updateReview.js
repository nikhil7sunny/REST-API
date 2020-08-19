// to update Review
// data should be given in the following format
		// id = book_id
		// review = review
const express = require('express')
const router = express.Router()

//importing sql connection
connection = require('../databaseConnection')

var update = 'update book_review set review = ? where book_id = ?'

//updating Book Review
router.post('/',(req,res) => {
	var values = [req.body.review,req.body.id]
	res.send(values)
	connection.query(update,values,(err,results,fields) => {
		if (err)
			console.log("Error " + err)
		else {
			console.log('Book Review Updated')	
			req.send('Book Review Updated')
		}
	})
})

//exporting 
module.exports = router