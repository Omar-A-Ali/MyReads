import React from "react";
import Book from "./Book";

const Shelf = ({ shelf, books, update }) => {
  const listingShelf = () => {
    return books.map((book) => (
      <li key={book.id}>{<Book book={book} update={update} />}</li>
    ));
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{listingShelf()}</ol>
      </div>
    </div>
  );
};

export default Shelf;
