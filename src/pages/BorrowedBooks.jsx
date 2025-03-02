import { useContext } from "react";
import { BorrowedBooksContext } from "../context/BorrowedBooksContext";

const BorrowedBooks = () => {
  const { borrowedBooks, returnBook } = useContext(BorrowedBooksContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex flex-col items-center text-white px-6 py-12">
      <h1 className="text-5xl font-extrabold tracking-wide mb-4">
        My <span className="text-yellow-300">Borrowed Books</span>
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl text-center">
        View and manage the books you have borrowed.
      </p>

      <div className="mt-8 w-full max-w-3xl">
        {borrowedBooks.length > 0 ? (
          <ul className="bg-white text-black rounded-lg shadow-lg divide-y divide-gray-300">
            {borrowedBooks.map((book, index) => (
              <li
                key={book.id}
                className={`flex justify-between items-center p-4 hover:bg-gray-100 transition 
                  ${index === 0 ? "first:rounded-t-lg" : ""} 
                  ${index === borrowedBooks.length - 1 ? "last:rounded-b-lg" : ""}`}
              >
                <div>
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-700">by {book.author}</p>
                </div>
                <button
                  onClick={() => returnBook(book.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition duration-300"
                >
                  Return
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-300 text-xl">You haven't borrowed any books yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;
