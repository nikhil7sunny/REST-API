const express = require('express')
const router = express.Router()

connection = require('../databaseConnection')

router.get('/',(req,res) => {
	console.log(req.query)
	if (typeof req.query.authorID === "undefined"){
		const sql = 'select * from Books'
		values = []
		connection.query(sql,values,(err,result,fields) => {
			if (err){
				console.log(err)
				res.send(err)
			}
			else{
				console.log(result)
				console.log('this')
				res.send(result)
			}
		})}
	else{
		const sql = 'select * from Books where author_id = ?'
		values = [req.query.authorID]
		connection.query(sql,values,(err,result,fields) => {
			if (err){
				console.log(err)
				res.send(err)
			}
			else{
				console.log(req.query)
				res.send(result)
			}
		})
	}	
})

router.get('/:bookID',(req,res) => {
	const sql = 'select * from Books where book_id = ?'
	values = [req.params.bookID]
	connection.query(sql,values,(err,result,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(req.params)
			res.send(result)
		}
	})
})

router.post('/',(req,res) => {
	const sql = 'insert into Books (author_id,book) values (?,?) '
	values = [req.body.authorID,req.body.book]
	connection.query(sql,values,(err,result,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(req.params)
			res.send(result)
		}
	})
})

router.put('/:bookID',(req,res) => {
	const sql = 'update books set book = ? where book_id = ? '
	values = [req.body.book,req.params.bookID]
	connection.query(sql,values,(err,result,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(req.params)
			res.send(result)
		}
	})
})

router.delete('/:bookID',(req,res) => {
	const sql = 'delete from Books where book_id = ? '
	values = [req.params.bookID]
	connection.query(sql,values,(err,result,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(req.params)
			res.send(result)
		}
	})
})



module.exports = router