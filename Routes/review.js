const express = require('express')
const router = express.Router()

connection = require('../databaseConnection')

router.get('/',(req,res) => {
	if (typeof req.query.bookID === 'undefined')
	{
			const sql = 'select * from Review'
			values = []
			connection.query(sql,values,(err,results,fields) => {
			if (err){
				console.log(err)
				res.send(err)
			}
			else{
				console.log(results)
				res.send(results)
			}
		})}
		else{
			const sql = 'select * from Review where book_id = ?'
			values = [req.query.bookID]
			connection.query(sql,values,(err,results,fields) => {
			if (err){
				console.log(err)
				res.send(err)
			}
			else{
				console.log(results.id)
				res.send(results)
			}
		})
		}
})

router.get('/:reviewID',(req,res) => {
	const sql = 'select review from Review where review_id =?'
	values = [req.params.reviewID]
	connection.query(sql,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results.id)
			res.send(results)
		}
	})
})

router.post('/',(req,res) => {
	const sql = 'insert into Review (book_id ,review) values (?,?)'
	values = [req.body.bookID,req.body.review]
	connection.query(sql,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results.id)
			res.send(results)
		}
	})
})

router.put('/:reviewID',(req,res) => {
	const sql = 'update Review set review = ? where review_id = ?'
	values = [req.body.review,req.params.reviewID]
	connection.query(sql,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results.id)
			res.send(results)
		}
	})
})

router.delete('/:reviewID',(req,res) => {
	const sql = 'delete from Review where review_id = ?'
	values = [req.params.reviewID]
	connection.query(sql,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results.id)
			res.send(results)
		}
	})
})

module.exports = router