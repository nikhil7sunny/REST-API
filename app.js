const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mysql = require('./databaseConnection.js')
const model = require('./Model/model')

//importing routes
const postRoute = require('./Routes/post')
const reviewRoute = require('./Routes/postReview')
const updateBookNameRoute = require('./Routes/updateBookName')
const updateAuthorRoute = require('./Routes/updateAuthor')
const updateReviewRoute = require('./Routes/updateReview')
const deleteBookRoute = require('./Routes/deleteBook')
const deleteReviewRoute = require('./Routes/deleteReview')
const deleteAllReviewRoute = require('./Routes/deleteAllReview')
const getBookRoute = require('./Routes/getBook')
const getReviewRoute = require('./Routes/getReview')
const getAllBooksRoute = require('./Routes/getAllBooks')

//middleware
app.use(bodyParser.json())
app.use('/post',postRoute)
app.use('/postReview',reviewRoute)
app.use('/updateBookName',updateBookNameRoute)
app.use('/updateAuthor',updateAuthorRoute)
app.use('/updateReview',updateReviewRoute)
app.use('/deleteBook',deleteBookRoute)
app.use('/deleteReview',deleteReviewRoute)
app.use('/deleteAllReview',deleteAllReviewRoute)
app.use('/getBook',getBookRoute)
app.use('/getReview',getReviewRoute)
app.use('/getAllBooks',getAllBooksRoute)

//Routes
app.get('/',(req,res) =>{
	res.send('Home page')
})

app.post('/',(req,res) => {
	var ans = req.body
	res.send()
	console.log(ans.author)
})

//port 
app.listen(3000)