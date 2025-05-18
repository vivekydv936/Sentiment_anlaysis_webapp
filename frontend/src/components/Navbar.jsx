import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Event Feedback
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/feedback"
              className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Submit Feedback
            </Link>
            <Link
              to="/admin"
              className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 