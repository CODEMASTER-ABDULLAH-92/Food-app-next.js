import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">FoodTrove</h2>
          <p className="text-gray-400 mt-2">Delivering delicious food to your doorstep.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/"><span className="hover:text-white transition">Home</span></Link></li>
            <li><Link href="/menu"><span className="hover:text-white transition">Menu</span></Link></li>
            <li><Link href="/about"><span className="hover:text-white transition">About Us</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-white transition">Contact</span></Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FoodTrove. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
