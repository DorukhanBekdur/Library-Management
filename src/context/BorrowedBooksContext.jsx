import { createContext, useState } from "react";

export const BorrowedBooksContext = createContext();

export const BorrowedBooksProvider = ({ children }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const borrowBook = (book) => {
    setBorrowedBooks([...borrowedBooks, book]);
  };

  const returnBook = (id) => {
    setBorrowedBooks(borrowedBooks.filter((book) => book.id !== id));
  };

  return (
    <BorrowedBooksContext.Provider value={{ borrowedBooks, borrowBook, returnBook }}>
      {children}
    </BorrowedBooksContext.Provider>
  );
};
