# MyReads Project (A Book Tracking App)

## Overview

This is a book tracking app that utilizes shelves to categorize books the user is: Currently Reading, Wants to Read, and have Read. The user can move books between shelves and search for more books to add to the categories. This App was built using [Reactjs](https://reactjs.org/) and the starter code and API server were provided by Udacity at https://github.com/udacity/reactnd-project-myreads-starter.

 


## Running this App
To run this app: 

* Make sure Node.js is installed on your local machine

* You can clone or download the repository

* Navigate to the downloaded file run the following commands:

    npm install

        then
    
    npm start

* These commands install the dependencies needed for the project and the browser automatically opens the app. If the app doesn't open in the browser go to localhost:3000 in your browser

## Run the App in Production mode:

* The App can be ran in production mode by running the following in the command prompt

    npm run build

* Then:

    python -m SimpleHTTPServer 8000

* You can then run the app on local port 8000 at localhost:8000


## Backend Server

To simplify your development process, a backend server was provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Acknowledgements

Resources consulted during this project include walkthroughs by:

* Forrest Walker at https://www.youtube.com/watch?v=bpKI3R0nf7E

* Ryan Waite at https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be

* Maeva at https://www.youtube.com/watch?v=i6L2jLHV9j8




