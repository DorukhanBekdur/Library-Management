import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex flex-col items-center justify-center text-center px-6 text-white">
      <h1 className="text-5xl font-extrabold tracking-wide">
        Welcome to <span className="text-yellow-300">Library Manager</span>
      </h1>
      <p className="mt-4 text-lg text-gray-200 max-w-2xl">
        Discover, borrow, and manage books effortlessly. Your personal digital library is just a click away!
      </p>

      <div className="mt-6 flex space-x-4">
        <Link
          to="/books"
          className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 shadow-lg"
        >
          Explore Books
        </Link>
        <Link
          to="/login"
          className="bg-transparent border-2 border-yellow-300 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 hover:text-blue-900 transition duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
            alt="Search Books"
            className="h-20 w-20"
          />
          <h3 className="mt-2 text-xl font-semibold">Find Your Book</h3>
          <p className="text-gray-300">Search through thousands of books.</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            alt="Borrow Books"
            className="h-20 w-20"
          />
          <h3 className="mt-2 text-xl font-semibold">Borrow Easily</h3>
          <p className="text-gray-300">One-click borrowing system.</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png"
            alt="Manage Library"
            className="h-20 w-20"
          />
          <h3 className="mt-2 text-xl font-semibold">Manage Books</h3>
          <p className="text-gray-300">Organize your digital library.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
