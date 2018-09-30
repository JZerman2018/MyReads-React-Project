

import React from 'react';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import MainPage from './MainPage';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './footer';

class App extends React.Component {
  state = {
    SearchedBooks: [] // track books
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
    this.updateBookInfo()
  }
 
  //To handle shelf change
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.updateBookInfo()
    })
  }

  //To update the book in state
  updateBookInfo = () => {
    BooksAPI.getAll().then(data => {
            this.setState({
              SearchedBooks: data
            })
           
    });    
  }

/*
   Function to add star rating
  */
 /*rating = (num, item) => {
  const updatedBook = {
    ...item,
    stars: num
  }
 */



  render() {
    return (
      <div className="app">
      <Header/>
      {/*For current books*/}
        <Route exact path="/" render={() => <MainPage current={this.state.SearchedBooks} />} />
     {/*When the user clicks search button*/}
        <Route
        path="/search"
        render={() =>
        <SearchBooks updateShelf={this.updateShelf} current={this.state.SearchedBooks} />}/>
      <Footer/>
      </div>
      
    );
  }
}

export default App;
