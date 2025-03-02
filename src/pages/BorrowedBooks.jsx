import { useContext } from "react";
import { BorrowedBooksContext } from "../context/BorrowedBooksContext";

const BorrowedBooks = () => {
  const { borrowedBooks, returnBook } = useContext(BorrowedBooksContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Borrowed Books</h2>

      {borrowedBooks.length === 0 ? (
        <p className="text-center text-gray-600">You have no borrowed books.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book) => (
              <tr key={book.id} className="border">
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => returnBook(book.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BorrowedBooks;
