//To Get the list of Books and Authors in the database

const express = require('express')
const router = express.Router()

//importing the sql connection
connection = require('../databaseConnection')

//sql command for deleting
var getQuery = 'select * from book_author'

//to display all the elements in the table 
//book_author
router.get('/',(req,res) => {
	values = []
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


