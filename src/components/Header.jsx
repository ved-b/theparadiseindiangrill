// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm p-4 z-40">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-serif text-accent">Paradise Indian Grill</h1>
        <ul className="flex space-x-6">
          <li><a href="#menu" className="hover:text-accent transition-colors duration-300">Menu</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors duration-300">Our Story</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
