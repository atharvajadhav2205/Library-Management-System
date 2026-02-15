# Library-Management-System

    This is a Library Managemnt API backend for the managemnt of user and the books

# Roots and endpoints

## /users
GET: To get all the list of users.
POST: To create/register new user.

## /users/{id}
GET: To get users by id.
PUT: To update user by theri id.
DELTE: To delete user by thier id.(check is the user still has an issued book)&&(check if user has any fine or penalty to be collected)

## /users/subscription-details/{id}
GET: Get user subscription detail by their ID
    >> Date of subscription
    >> Valid till?
    >> Fine if any?

## /books
GET: Get all the books in system.
POST: To add new book to system.

## /books/{id}
GET: Get a book by its ID.
PUT: To update book by its ID.
DELETE: To delete a book by its ID.

## /books/issued
GET: Get all the issued books.

## /books/issued/withFine
GET: Get all issued books with their fine amount.

## subscription type
    >> basic (3 months)
    >> standard (6 months)
    >> premium (12 months)

>> if user misses renewal date, then user should be collected with $100
>> if user misses subscription, then user should be collected with $100
>> if user misses both, then user should be collected with $200


## commands:

npm init
npm i express
npm i nodemon

npm run dev

to restore node_modules and package-lock.json --> npm i