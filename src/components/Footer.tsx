// src/components/Footer.tsx
// Create this new file
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-6 mt-16 border-t border-[#39ff14]/10">
      <p className="text-sm text-gray-500">
        © {currentYear} Ashish Ram J A. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;