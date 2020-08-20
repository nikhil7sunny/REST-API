const express = require('express')
const router = express.Router()

connection = require('../databaseConnection')

router.get('/',(req,res) => {
	const sql = 'select * from Author'
	values = []
	connection.query(sql ,values,(err,results,fields) => {
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

router.get('/:authorID',(req,res) => {
	const sql = 'select author from Author where author_id = ?'
	values = [req.params.authorID]
	connection.query(sql ,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(req.params)
			res.send(results)
		}
	})
})

router.post('/',(req,res) => {
	const sql = 'insert into Author (author) values (?)'
	values = [req.body.author]
	connection.query(sql ,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results)
			res.send(results)
		}
	})
})

router.put('/:authorID',(req,res) => {
	const sql = 'update Author set author = ? where author_id = ?'
	values = [req.body.author,req.params.authorID]
	connection.query(sql ,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results)
			res.send(results)
		}
	})
})

router.delete('/:authorID',(req,res) => {
	const sql = 'delete from Author where author_id = ?'
	values = [req.params.authorID]
	connection.query(sql ,values,(err,results,fields) => {
		if (err){
			console.log(err)
			res.send(err)
		}
		else{
			console.log(results)
			res.send(results)
		}
	})
})


module.exports = router