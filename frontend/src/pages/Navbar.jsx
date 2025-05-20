import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="w-full flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl mr-6 flex items-center text-white">
            <img src={logo} alt="Event Feedback Hub Logo" className="h-14 w-14 mr-2 rounded-full" />
            Event Feedback
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/feedback"
              className="text-white hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium"
            >
              Submit Feedback
            </Link>
            <Link
              to="/admin"
              className="text-white hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <Link
            to="/login"
            className="flex items-center gap-2 bg-white text-primary font-semibold px-4 py-2 rounded shadow hover:bg-highlight hover:text-dark transition"
          >
            <FaSignInAlt /> Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-primary font-semibold px-4 py-2 rounded border border-primary hover:bg-accent hover:text-white transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 