import { useState } from "react";

const AdminPanel = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [editingBook, setEditingBook] = useState(null);

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, { id: books.length + 1, ...newBook }]);
      setNewBook({ title: "", author: "" }); 
    }
  };

  const startEditing = (book) => {
    setEditingBook(book);
  };

  const saveEdit = () => {
    setBooks(books.map((b) => (b.id === editingBook.id ? editingBook : b)));
    setEditingBook(null); 
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Panel</h2>

      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Add a New Book</h3>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Book Title"
            className="border p-2 w-full rounded-lg"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            className="border p-2 w-full rounded-lg"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <button
            onClick={addBook}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>

      {editingBook && (
        <div className="mb-6 bg-yellow-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Edit Book</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              className="border p-2 w-full rounded-lg"
              value={editingBook.title}
              onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
            />
            <input
              type="text"
              className="border p-2 w-full rounded-lg"
              value={editingBook.author}
              onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
            />
            <button
              onClick={saveEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditingBook(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Book List</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border">
                <td className="border p-2 text-center">{book.id}</td>
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author}</td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => startEditing(book)}
                    className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBook(book.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
