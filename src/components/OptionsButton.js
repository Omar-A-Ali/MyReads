import React from "react";
import * as BooksAPI from "../utils/BooksAPI";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useBooksUpdate } from "../contexts/BooksContext";

const OptionsButton = ({ book }) => {
  const update = useBooksUpdate();
  const [currentShelf, setCurrentShelf] = useState("");

  //this is a state to show or hide the none button based on if the book have shelf or not
  const [noneOption, setNoneOption] = useState(false);

  const updateShelf = async (shelf) => {
    await BooksAPI.update(book, shelf);

    //calling tha App.js update() to notify that books has been updated
    update();
  };

  useEffect(() => {
    //setting current shelf here based on book if it has one or no
    setCurrentShelf(() => {
      return book.shelf ? book.shelf : "none";
    });

    //setting the 4th option "none" if there is a shelf on a book
    book.shelf ? setNoneOption(true) : setNoneOption(false);
  }, [book]);
  return (
    <div className="book-shelf-changer">
      <select
        value={currentShelf}
        onChange={(event) => {
          setCurrentShelf(event.target.value);
          updateShelf(event.target.value);
        }}
      >
        {/* //determine which text to show based on shelf (Add to // Move to)  */}
        <option value="none" disabled>
          {!noneOption ? "Add to..." : "Move to..."}
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {/* determine to show or not to show the last option none */}
        {noneOption && <option value="none">None</option>}
      </select>
    </div>
  );
};

OptionsButton.propTypes = {
  book: PropTypes.object.isRequired,
};
export default OptionsButton;
