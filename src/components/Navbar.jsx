import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Library Management</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/books" className="hover:underline">Books</Link>
          <Link to="/borrowed" className="hover:underline">My Books</Link>
          <Link to="/admin" className="hover:underline">Admin Panel</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
