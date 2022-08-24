import React from "react";
import { useState, useEffect } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

const SearchBooks = ({ currentBooks, update }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchNotFound, setSeachNotFound] = useState(<></>);
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query);
  };

  const booksExist = () => {
    return Array.isArray(searchResults) && searchResults.length > 0;
  };

  useEffect(() => {
    const getSearchResults = async (q, maxRes) => {
      if (q !== "") {
        const res = await BooksAPI.search(q, maxRes);
        if (!res.error) {
          setSearchResults(res);
          setSeachNotFound(<></>);
        } else {
          setSearchResults([]);
          setSeachNotFound(<p id="item-not-found">No Books Matching</p>);
        }
      }
    };

    getSearchResults(query, 10);
  }, [query]);

  const listBooks = () => {
    const doubled = searchResults.map(
      (searchedBook) =>
        currentBooks.find((current) => current.id === searchedBook.id) ||
        searchedBook
    );
    if (booksExist() && query) {
      return doubled.map((searchedBook) => (
        <li key={searchedBook.id}>
          {<Book book={searchedBook} update={update} />}
        </li>
      ));
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            onChange={(event) => {
              updateQuery(event.target.value);
            }}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      {query && (
        <div className="search-books-results">
          {searchNotFound}
          {searchResults.length > 0 && (
            <ol className="books-grid">{listBooks()}</ol>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBooks;
