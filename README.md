# REST-API
Basic functioning of REST API in Node Js

Structure of the Backend API.

    1. Database has Three Tables. Books, Reviews and Authors.
    2. Books have Author as a Foreign Key. We use Primary Key to avoid duplication of Author names.
    3. Reviews have Book as a Foreign Key.
    4. When an Author is deleted, all his Books are deleted using CASCADE.
    5. Similarly when a Book is deleted, all their Reviews are deleted.

The API routes implemented are ....

BOOKS :

1. GET /book - Get all Books
2. GET /book?authorID=x - Get All Books of authorID x
3. GET /book/:bookid - Get one Book
4. POST /book - Create Book
5. PUT /book/:bookid - Update Book
6. DELETE /book/:bookid - Delete Book


AUTHORS :

1. GET /author - Get all Author
2. GET /author/:authorid - Get one Author
3. POST /author - Create Author
4. PUT /author/:authorid - Update Author
5. DELETE /author/:authorid - Delete Author

REVIEWS :

1. GET /review - Get all Review
2. GET /review?bookId=x - Get All reviews of Book x
3. GET /review/:reviewid - Get one Review
4. POST /review - Create Review
5. PUT /review/:reviewid - Update Review
6. DELETE /review/:reviewid - Delete Review
