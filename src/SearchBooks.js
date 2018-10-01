import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class SearchBooks extends React.Component {
  constructor() {
    super();
    this.state = {  
    query: "",
    SearchedBooks: []
    }
  }
/* 
  	Update the shelf for each book, 
  	none if the book is not on any shelf and 
  	if the id book founds on book shelf 
  	then set the current book shelf
  */
updateBookInfo = (SearchedBooks) => {
  let newBooks = SearchedBooks.map(book => {
  book.shelf = "none";
  this.props.current.forEach(book2 => {
    if (book.id === book2.id) {
    book.shelf = book2.shelf;
  }
})
return book
})
this.setState({
  SearchedBooks: newBooks
  })
}
  /* 
  	Call search method on BookAPI.js when user types query and display books
  */
updateTheQuery = (query) => {
  this.setState({ query: query })
  if(query) {
    BooksAPI.search(query).then((SearchedBooks) => {
      SearchedBooks.length > 0 ? this.updateBookInfo(SearchedBooks):this.setState({SearchedBooks:[]})
  })
} else
   {this.setState({SearchedBooks:[]})} //if there are any errors
}
  /* 
  	Update the shelf when shelf changes after shelf changer button is clicked 
  */
updateTheBooks = (book, shelf)=> {
  let present = this.state.SearchedBooks;
  let updateToBooks = present.filter(newBooks => newBooks.id === book.id)[0];
  updateToBooks.shelf = shelf;
  this.setState({
  SearchedBooks: present
})  
this.props.updateShelf(book, shelf);
}

render() 
 {
  return ( 
  <div className="search-books">
  <div className="search-books-bar">
    <Link to="/" className="close-search">     
      Close
    </Link>
  <div className="search-books-input-wrapper">
    <input
      type="text"
      placeholder="Search by title or author"
      value={this.state.query}
      onChange={event => this.updateTheQuery(event.target.value)}
      />
    </div>
  </div>
  <div className="search-books-results">
    <ol className="books-grid">
    {this.state.SearchedBooks.filter((book) => (book.imageLinks)).map(book =>
    <li key={book.id} className="book">
  <div className="book-top">
  <div
    className="book-cover"
      style={{
      width: 128,
      height: 193,
      backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
      }}
    />
  <div className="book-shelf-changer">
    <select
      value={book.shelf}
      onChange={e => {
       this.updateTheBooks(book, e.target.value);
      }}
      >
    <option disabled>
      Move to...
    </option>               
    <option value="currentlyReading">Currently Reading</option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
    </select>
        </div>
      </div>
    <div className="book-title">
      {book.title}
    </div>
      {book.authors &&
    <div className="book-authors">
      {book.authors[0]}
            </div>}
          </li>
        )}
        </ol>
      </div>
    </div>  
  );
  }
}
export default SearchBooks  