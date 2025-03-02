import { useState } from "react";

const Books = () => {
  const [search, setSearch] = useState("");
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Book List</h2>
      <input
        type="text"
        placeholder="Search for a book..."
        className="border p-2 w-full mb-4 rounded-2xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-2">
        {filteredBooks.map((book) => (
          <li key={book.id} className="p-4 border rounded-2xl bg-gray-100">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
