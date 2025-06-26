// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-black/80 text-center py-12 px-4">
      <div className="container mx-auto">
        <h3 className="text-2xl font-serif text-accent mb-4">Saffron Trail</h3>
        <p className="mb-2">123 Culinary Lane, Foodie City, 12345</p>
        <p className="mb-4">reservations@saffrontrail.com | (123) 456-7890</p>
        <p className="text-secondary/60 text-sm">© 2025 Saffron Trail. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
