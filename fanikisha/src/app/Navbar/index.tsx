"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src="/images/fanikisha_logo.png" alt="Fanikisha" width={90} height={43} className="object-contain mt-7"  />
            </div>
            </div>   
          <div className="hidden md:flex items-center space-x-1 mt-6  relative left-3 sm:relative  text-2xl md:text-2xl">
            <Link href="/" className="py-4 px-2 text-black hover:text-blue-500">Home</Link>
            <Link href="/about" className="py-4 px-2 text-black hover:text-blue-500">About Us</Link>
            <Link href="/product" className="py-4 px-2 text-black hover:text-blue-500">Product</Link>
            <Link href="/team" className="py-4 px-2 text-black hover:text-blue-500">Team</Link>
            <Link href="/contact" className="py-4 px-2 text-black hover:text-blue-500">Contact Us</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 bg-white ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center h-full relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-500"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link href="/" className="py-4 text-2xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="py-4 text-2xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/product" className="py-4 text-2xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Product</Link>
          <Link href="/team" className="py-4 text-2xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/contact" className="py-4 text-2xl text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;





