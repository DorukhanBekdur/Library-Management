import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          <span className="text-white">Library</span>
          <span className="text-yellow-300">Manager</span>
        </Link>

        <div className="flex space-x-6 text-lg font-semibold items-center">
          <NavItem to="/books" label="Books" location={location} />
          <NavItem to="/borrowed" label="My Books" location={location} />
          <NavItem to="/admin" label="Admin Panel" location={location} />

          <Link
            to="/login"
            className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label, location }) => {
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`transition duration-300 ${
        isActive ? "text-yellow-300 underline" : "text-white hover:text-yellow-300"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
