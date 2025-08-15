import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="bg-background shadow-md text-white">
        {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Storage</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-300 hover:text-white transition-colors ">
            Home
          </a>
          <a href="/sobre" className="text-gray-300 hover:text-white transition-colors">
            Sobre
          </a>
          <a href="/contato" className="text-gray-300 hover:text-white transition-colors">
            Contato
          </a>
          <a href="/login" className="text-gray-300 hover:text-white transition-colors">
            Login
          </a>
        </div>

        <a href="/cadastro" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors">
          Começar agora
        </a>
      </nav>
    </header>
  );
}
