import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./utils/BooksAPI";

function App() {
  //array to hold current books
  const [currentBooks, setCurrentBooks] = useState([]);

  //cheack if books has changed to update it "using it in use effect will cause leak of data"
  const [booksChanged, setBooksChanged] = useState(false);
  const update = () => {
    setBooksChanged(!booksChanged);
  };

  //function to get books from api
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setCurrentBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, [booksChanged]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={<SearchBooks currentBooks={currentBooks} update={update} />}
        />
        <Route
          exact
          path="/"
          element={<ListBooks currentBooks={currentBooks} update={update} />}
        />
      </Routes>
    </div>
  );
}

export default App;
