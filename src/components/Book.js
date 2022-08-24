import React from "react";
import OptionsButton from "./OptionsButton";
const Book = ({ book, update }) => {
  const style = {
    width: 128,
    height: 193,
  };
  //if more than one author will return them with '/' and if there is no authors will return empty string
  const authors = () => {
    const authors = book.authors;
    return authors ? (authors.length > 1 ? authors.join(" / ") : authors) : "";
  };

  const image = () => {
    const check = book.imageLinks ? true : false;
    if (check) {
      style.backgroundImage = `url("${book.imageLinks.thumbnail}"`;
    }
    return { ...style };
  };
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={image()}></div>
        <OptionsButton book={book} update={update} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authors()}</div>
    </div>
  );
};

export default Book;
