// to Update the authors name
// data should be given in the following format
		// id = book _id
		// author = authorname
const express = require('express')
const router = express.Router()

//importing sql connection
connection = require('../databaseConnection')

var update = 'update book_author set author = ? where id = ?'

//updating authors name 
router.post('/',(req,res) => {
	var values = [req.body.author,req.body.id]
	res.send(values)
	connection.query(update,values,(err,results,fields) => {
		if (err)
			console.log("Error " + err)
		else {
					console.log('Author Name Updated')
					req.send('Author Updated')
				}	
	})
})

//exporting 
module.exports = router