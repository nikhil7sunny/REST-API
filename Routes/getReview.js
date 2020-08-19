//To get the Review of a particular book when 
//book_id is given
// Data should be given in the following format
		//book id should be given as query
const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for deleting
var getQuery = 'select * from book_review where book_id = ?'

//to get the Review of a particular book 
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


