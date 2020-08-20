// importing the connection from sql
const connection = require('../databaseConnection.js')

//checking if the connection was sucessful
connection.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected!!");
});

var create_author = "create table if not exists Author(author_id int primary key auto_increment,author varchar(30))"

var create_books = "create table if not exists Books(book_id int primary key auto_increment,author_id int not null,book varchar(30),foreign key (author_id) references Author(author_id) on delete cascade)"

var create_review = "create table if not exists Review (review_id int primary key auto_increment, book_id int not null,review varchar(300),foreign key (book_id) references Books (book_id) on delete cascade)"

//creating table Author
connection.query(create_author,function(err,results,fields){
	if (err)
		console.log('error'+err)
	else{
	console.log('created table Author')
	// console.log('results'+results)
	// console.log('fields'+fields)
		}
})

//creating table Books
connection.query(create_books,function(err,results,fields){
	if (err)
		console.log('error ' + err)
	else
		console.log('created table Books')
})

//creating table Review
connection.query(create_review,function(err,results,fields){
	if (err)
		console.log('error ' + err)
	else
		console.log('created table Review')
})
