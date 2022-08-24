import React from "react";
import * as BooksAPI from "../utils/BooksAPI";
import { useState, useEffect } from "react";

const OptionsButton = ({ book, update }) => {
  const [currentShelf, setCurrentShelf] = useState("");
  const [noneOption, setNoneOption] = useState(<></>);

  const firstOptionSetter = () => {
    return currentShelf === "none" ? "Add to..." : "Move to...";
  };

  const updateShelf = async (shelf) => {
    await BooksAPI.update(book, shelf);
    update();
  };

  useEffect(() => {
    setCurrentShelf(() => {
      return book.shelf ? book.shelf : "none";
    });
    book.shelf
      ? setNoneOption(<option value="none">None</option>)
      : setNoneOption(<></>);
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
        <option value="none" disabled>
          {firstOptionSetter()}
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {noneOption}
      </select>
    </div>
  );
};

export default OptionsButton;
