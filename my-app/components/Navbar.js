import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={assets.logo} alt="Logo" width={120} height={50} />
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link href="/Cart" className="hover:text-blue-600">Cart</Link></li>
        <li><Link href="/Servies" className="hover:text-blue-600">Services</Link></li>
        <li><Link href="/Contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>

      {/* Login Button */}
      <div>
        <Link href="/Login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
