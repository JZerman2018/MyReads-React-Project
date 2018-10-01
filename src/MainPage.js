import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";

class MainPage extends React.Component {
 state = {};
  
//To filter the books depending on a shelf
updateShelf = (bookId, event) => {
//get the book on shelf 
  let current = this.props.current;
  const book = current.filter(book => book.id === bookId)[0];
  book.shelf = event.target.value;
    BooksAPI.update(book, event.target.value).then(response => {
      this.setState({
        SearchedBooks: current
      });
    });
  };

  render() {
    
    return (
      <div className="list-books">
      <div className="list-books-title"></div> 
      <div className="list-books-content">
        {/*Display the current books on the three different shelves in main pages*/}
        <BookShelf
          key="currently"
          SearchedBooks={this.props.current.filter(book => book.shelf === "currentlyReading")}
          updateShelf={this.updateShelf}
          shelfTitle="Currently Reading"    
          />
        <BookShelf
          key="wantToRead"
          SearchedBooks={this.props.current.filter(book => book.shelf === "wantToRead")}
          updateShelf={this.updateShelf}
          shelfTitle="Want to Read"  
          />
        <BookShelf
          key="read"
          SearchedBooks={this.props.current.filter(book => book.shelf === "read")}
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
export default MainPage;
