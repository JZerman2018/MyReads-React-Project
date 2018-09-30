import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";


//import PropTypes from 'prop-types'

//import 'semantic-ui-css/semantic.min.css';



class MainPage extends React.Component {
 state = {};
  


  //To filter the books depending on a shelf
  updateShelf = (bookId, event) => {
    //get the book on shelf from app
    let currentBooks = this.props.currentBooks;
    const book = currentBooks.filter(book => book.id === bookId)[0];
    book.shelf = event.target.value;
    BooksAPI.update(book, event.target.value).then(response => {
      this.setState({
        SearchedBooks: currentBooks
      });
    });
  };

  render() {
    
    return (
      <div className="list-books">
       <div className="list-books-title"></div> 
        <div className="list-books-content">
        {/*Display the three different shelves in main pages with its current books*/}
           <BookShelf
            key="currently"
            SearchedBooks={this.props.currentBooks.filter(book => book.shelf === "currentlyReading")}
            updateShelf={this.updateShelf}
            shelfTitle="Currently Reading"
            
          />
          <BookShelf
            key="wantToRead"
            SearchedBooks={this.props.currentBooks.filter(book => book.shelf === "wantToRead")}
            updateShelf={this.updateShelf}
            shelfTitle="Want to Read"
            
          />
          <BookShelf
            key="read"
            SearchedBooks={this.props.currentBooks.filter(book => book.shelf === "read")}
            updateShelf={this.updateShelf}
            shelfTitle="Read" 
                    
            />
            
           </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>

    );
  }
}
export default MainPage
