// importing the connection from sql
const connection = require('../databaseConnection.js')

//checking if the connection was sucessful
connection.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected!!");
});

var create_book_author = "create table if not exists book_author(id int primary key auto_increment,book varchar(30) not null ,author varchar(30) not null)"

var create_book_review = "create table if not exists book_review(review_id int primary key auto_increment,book_id int not null, review  varchar(200),foreign key (book_id) references book_author(id) on delete cascade)"

//creating table book_author
connection.query(create_book_author,function(err,results,fields){
	if (err)
		console.log('error'+err)
	else{
	console.log('created table book_author')
	// console.log('results'+results)
	// console.log('fields'+fields)
		}
})

//creating table book_review
connection.query(create_book_review,function(err,results,fields){
	if (err)
		console.log('error ' + err)
	else
		console.log('created table book_review')
})
