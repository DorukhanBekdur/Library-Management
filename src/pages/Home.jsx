import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Library Management System</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Discover and borrow books easily. Manage your library collection with an intuitive and powerful system.
      </p>

      <div className="mt-6 space-x-4">
        <Link to="/books" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Explore Books
        </Link>
        <Link to="/login" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Get Started
        </Link>
      </div>

      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://images.unsplash.com/photo-1524578271613-d550eacf609f" },
            { id: 2, title: "1984", author: "George Orwell", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
            { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://images.unsplash.com/photo-1563201515-20e04b7ab437" }
          ].map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={book.cover} alt={book.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

  