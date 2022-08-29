import React from "react";
import Shelfs from "../components/Shelfs";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ListBooks = () => {
  return (
    <div>
      <Header />
      <div className="list-books-content">
        <div>
          <Shelfs />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
