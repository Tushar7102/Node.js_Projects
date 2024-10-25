import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book"; // Import the Book component

const fetchHandler = async () => {
  return await axios.get("http://localhost:8080/user/product")
  .then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="books-container">
      <h1 className="books-title" style={{textAlign:"center"}}>Book List</h1>
      <ul className="books-list">
        {books &&
          books.map((book, el) => (
            <li key={el} className="book-item">
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
