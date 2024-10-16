import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 shadow-lg">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          {/* Add a placeholder for a logo */}
          <div className="bg-white text-blue-800 rounded-full w-10 h-10 flex items-center justify-center font-bold">
            S
          </div>
          <h1 className="text-2xl font-extrabold tracking-wide">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Student Registration
            </Link>
          </h1>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/view-data" className="hover:text-gray-300 transition-colors">
              View Data
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

