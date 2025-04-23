import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Mentor Connect</h3>
          <p>Empowering connections through mentorship and AI.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#how" className="hover:underline">How It Works</a></li>
            <li><a href="#footer" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Mentor Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
