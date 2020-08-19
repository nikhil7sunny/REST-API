// to Add update book name
// data should be given in the following format
		// book_id = book_id
		// nook = book_name
const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for updating 
var update = 'update book_author set book = ? where id = ?'

//updating book name
router.post('/',(req,res) => {
	console.log(req.query)
	var values = [req.body.book,req.body.book_id]
	console.log(values)
	res.send(values)
	connection.query(update,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err )
		else
			console.log('book name updated')
			console.log(results.insertId)
			req.send('Book Name updated')
	})
})

//exporting module
module.exports = router
