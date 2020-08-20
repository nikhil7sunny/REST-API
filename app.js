const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mysql = require('./databaseConnection.js')
const model = require('./Model/model')

//importing routes
const bookRoute = require('./Routes/book')
const authorRoute = require('./Routes/author')
const reviewRoute = require('./Routes/review')

//middleware
app.use(bodyParser.json())
app.use('/book',bookRoute)
app.use('/author',authorRoute)
app.use('/review',reviewRoute)

//Routes
app.get('/',(req,res) =>{
	res.send('Home page')
})

app.post('/:id',(req,res) => {
	var ans = req.body
	res.send(req.params)
	console.log(ans.author)
})
app.post('/',(req,res) => {
	var ans = req.body
	res.send('no params')
	console.log(ans.author)
})

//port 
app.listen(3000)