import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-lg">
      <div className = 'flex items-center gap-3'>
        <img src="/icons8-shopping-bag-100.png" alt="BStore Logo" 
        className = 'w-10 h-10 rounded-lg shadow-md'/>
        <h1 className = 'text-3xl font-bold'>BStore</h1>
      </div>

      <ul className = 'flex gap-8 text-lg '>
        <li className = 'hover:text-fuchsia-200 transition-colors cursor-pointer'>
          <Link to="/">Home</Link>
        </li>

        <li className = 'hover:text-fuchsia-200 transition-colors cursor-pointer'>
          <Link to="/products">Products</Link>
        </li>

        <li className = 'hover:text-fuchsia-200 transition-colors cursor-pointer'>
          <Link to="/about">About</Link>
        </li>

        <li className = 'hover:text-fuchsia-200 transition-colors cursor-pointer'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
