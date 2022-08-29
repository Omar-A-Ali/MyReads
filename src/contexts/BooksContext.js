import React, { useState, useEffect, useContext } from "react";
import * as BooksAPI from "../utils/BooksAPI";

const BooksContext = React.createContext();
const UpdateBooksContext = React.createContext();

export const useBooks = () => {
  return useContext(BooksContext);
};
export const useBooksUpdate = () => {
  return useContext(UpdateBooksContext);
};

const BooksProvider = ({ children }) => {
  //array to hold current books
  const [currentBooks, setCurrentBooks] = useState([]);

  //function to get books from api
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setCurrentBooks(res);
  };

  //cheack if books has changed to update it, "using currentBooks in use effect will cause leak of data"
  const [booksChanged, setBooksChanged] = useState(false);
  const update = () => {
    setBooksChanged(!booksChanged);
  };

  //getting books first time and will update if booksChanged has been changed "using update() in OptionButtons"
  useEffect(() => {
    getBooks();
  }, [booksChanged]);

  return (
    <BooksContext.Provider value={currentBooks}>
      <UpdateBooksContext.Provider value={update}>
        {children}
      </UpdateBooksContext.Provider>
    </BooksContext.Provider>
  );
};

export default BooksProvider;
