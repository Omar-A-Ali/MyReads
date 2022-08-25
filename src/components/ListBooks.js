import React from "react";
import Shelfs from "./Shelfs";
import Header from "./Header";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListBooks = ({ currentBooks, update }) => {
  return (
    <div>
      <Header />
      <div className="list-books-content">
        <div>
          <Shelfs currentBooks={currentBooks} update={update} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  currentBooks: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
};
export default ListBooks;
