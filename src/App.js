//https://www.youtube.com/watch?v=bpKI3R0nf7E Walkthrough with Forrest Walker

import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookSearch from './BookSearch';
import BookList from './BookList';
import {Route} from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [] // track books
  };
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
  

 //Call BookAPI.js to retrieve all books
  componentDidMount() {
    this.updateBookData()
  }

  //To handle shelf change
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.updateBookData()
    })
  }

  //To update the book in state
  updateBookData = () => {
    BooksAPI.getAll().then(data => {
            this.setState({
              books: data
            })
    });    
  }

  render() {
    return (
      <div className="app">
      {/*For current app*/}
        <Route exact path="/" render={() => <BookList currentBooks={this.state.books} />} />
     {/*When the user clicks on search button*/}
        <Route
        path="/search"
        render={() =>
        <BookSearch updateShelf={this.updateShelf} currentBooks={this.state.books} />}/>
      </div>
    );
  }
}

export default BooksApp;
