import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-blue-600">
            <Link to="/">STORAGE</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/about">About</Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/register">Register</Link>
            <Link className="text-gray-700 hover:text-blue-600" to="/login">Login</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-md">
          <Link className="block text-gray-700 hover:text-blue-600" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="block text-gray-700 hover:text-blue-600" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="block text-gray-700 hover:text-blue-600" to="/register" onClick={() => setIsOpen(false)}>Register</Link>
          <Link className="block text-gray-700 hover:text-blue-600" to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
}
