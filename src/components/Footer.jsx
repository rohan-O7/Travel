import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Travel Website. All rights reserved.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="#about" className="hover:underline">About Us</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </li>
          <li>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;