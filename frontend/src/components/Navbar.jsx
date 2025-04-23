import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-700">Mentor Connect</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#how" className="text-gray-700 hover:text-blue-600">How It Works</a>
          <a href="#footer" className="text-gray-700 hover:text-blue-600">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
