import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BooksContext from "./contexts/BooksContext";

ReactDOM.render(
  <BrowserRouter>
    <BooksContext>
      <App />
    </BooksContext>
  </BrowserRouter>,
  document.getElementById("root")
);
