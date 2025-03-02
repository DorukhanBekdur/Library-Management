import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">Library Management System</h2>
        <p className="text-sm text-gray-400 mt-1">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-3">
          <Link to="/books" className="hover:underline">Books</Link>
          <Link to="/borrowed" className="hover:underline">My Books</Link>
          <Link to="/admin" className="hover:underline">Admin Panel</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

