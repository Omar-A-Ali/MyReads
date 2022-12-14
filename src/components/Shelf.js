import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ shelf, books }) => {
  const listingShelf = () => {
    return books.map((book) => <li key={book.id}>{<Book book={book} />}</li>);
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

Shelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};
export default Shelf;
