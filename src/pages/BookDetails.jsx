import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { BorrowedBooksContext } from "../context/BorrowedBooksContext";

const BookDetails = () => {
  const { id } = useParams();
  const { borrowBook } = useContext(BorrowedBooksContext); 
  const [book, setBook] = useState(null);

  // Mock veri (backend bağlandığında API ile değiştirilecek)
  const books = [
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic novel set in the Roaring Twenties.", category: "Fiction", cover: "https://images.unsplash.com/photo-1524578271613-d550eacf609f" },
    { id: "2", title: "1984", author: "George Orwell", description: "A dystopian novel about totalitarian surveillance.", category: "Dystopian", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
    { id: "3", title: "To Kill a Mockingbird", author: "Harper Lee", description: "A novel about racial injustice in the Deep South.", category: "Classic", cover: "https://images.unsplash.com/photo-1563201515-20e04b7ab437" }
  ];

  useEffect(() => {
    const selectedBook = books.find((b) => b.id === id);
    setBook(selectedBook);
  }, [id]);

  if (!book) {
    return <p className="text-center text-gray-600">Book not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <img src={book.cover} alt={book.title} className="w-48 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-700 text-lg mb-2"><strong>Author:</strong> {book.author}</p>
          <p className="text-gray-600 mb-2"><strong>Category:</strong> {book.category}</p>
          <p className="text-gray-500 mb-4">{book.description}</p>

          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => borrowBook(book)}
          >
            Borrow Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

