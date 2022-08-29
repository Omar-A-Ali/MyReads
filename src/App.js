import "./App.css";
import SearchBooks from "./pages/SearchBooks";
import ListBooks from "./pages/ListBooks";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<SearchBooks />} />
        <Route exact path="/" element={<ListBooks />} />
      </Routes>
    </div>
  );
}

export default App;
