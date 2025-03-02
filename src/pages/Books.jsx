import { useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 4, title: "Moby-Dick", author: "Herman Melville" },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen" },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex flex-col items-center text-white px-6 py-12">
      <h1 className="text-5xl font-extrabold tracking-wide mb-4">
        Discover Your <span className="text-yellow-300">Next Read</span>
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl text-center">
        Explore a vast collection of books and find your next adventure.
      </p>

      <input
        type="text"
        placeholder="Search for a book..."
        className="border-2 border-yellow-300 text-black p-3 w-full max-w-lg rounded-lg mt-6 focus:ring-2 focus:ring-yellow-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-8 w-full max-w-3xl">
        {filteredBooks.length > 0 ? (
          <ul className="bg-white text-black rounded-lg shadow-lg divide-y divide-gray-300">
            {filteredBooks.map((book, index) => (
              <li
                key={book.id}
                className={`flex justify-between items-center p-4 hover:bg-gray-100 transition 
                  ${index === 0 ? "first:rounded-t-lg" : ""} 
                  ${index === filteredBooks.length - 1 ? "last:rounded-b-lg" : ""}`}
              >
                <div>
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-700">by {book.author}</p>
                </div>
                <Link
                  to={`/books/${book.id}`}
                  className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300 mt-4">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
