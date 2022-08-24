import React from "react";
import Shelf from "./Shelf";

const Shelfs = ({ currentBooks, update }) => {
  const currentlyReading = currentBooks.filter(
    (b) => b.shelf === "currentlyReading"
  );
  const wantToRead = currentBooks.filter((b) => b.shelf === "wantToRead");
  const read = currentBooks.filter((b) => b.shelf === "read");

  const shelfs = [
    { name: "Currently Reading", id: 1, books: currentlyReading },
    { name: "Want to Read", id: 2, books: wantToRead },
    { name: "Read", id: 3, books: read },
  ];
  const listingShilfs = () => {
    return shelfs.map((shelf) => (
      <Shelf
        key={shelf.id}
        shelf={shelf.name}
        books={shelf.books}
        update={update}
      />
    ));
  };
  return <div>{listingShilfs()}</div>;
};

export default Shelfs;
