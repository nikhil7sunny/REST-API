// to Add new book and Author
// data should be given in the following format
		// book = bookname
		// author = authorname
const express = require('express')
const router = express.Router()

// importing the sql connection
const connection = require('../databaseConnection.js')

//sql command for adding new data
var addRow = `insert into book_author(book,author) values(?,?)`

//posting of data
router.post('/',(req,res) => {
	var values = [req.body.book,req.body.author]
	console.log(values)
	connection.query(addRow,values,(err,results,fields) => {
		if (err)
			console.log('Error ' + err)
		else{
			console.log('Added values to table book_author')
			req.send('Data added to database')
			console.log(results.insertId)
		}
	})

})


//exporting 
module.exports = router