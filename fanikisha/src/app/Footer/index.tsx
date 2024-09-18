"use client"; 

import React from 'react';
import Image from 'next/image';
import { MdMail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      <div className="bg-[#2A88BD] text-white py-6 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between">
          <div className="mb-6 sm:mb-0 mr-9">
            <Image src="/myimg/fanikisha.png" alt="Fanikisha" width={120} height={48} className="object-contain" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center">Contact Us</h3>
              <p className="flex items-center mb-2">
              <MdMail 
  size={20} 
  data-classname="mr-2 min-w-[20px]" 
  aria-hidden="true" 
/>
                inganj@akirachix.com
              </p>
              <p className="flex items-center mb-2">
              <MdMail 
  size={20} 
  data-classname="mr-2 min-w-[20px]" 
  aria-hidden="true" 
/>                +254 767 838 597
              </p>
            </div>
            <div className='sm:ml-9' >
    
            <p className="mb-2">Home</p>
              <p className="mb-2">About Us</p>
              <p className="mb-2">Solution</p>
              <p>Team</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Location</h3>
              <p className="flex items-center mb-2">
              <MdMail 
  size={20} 
  data-classname="mr-2 min-w-[20px]" 
  aria-hidden="true" 
/>                616 Korongo Road, Nairobi-Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-3 px-4 text-center text-xs text-gray-600">
        <p>&copy; Inganji@AkiraChix 2024</p>
      </div>

      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          h3 {
            font-size: 20px; 
          }
          p {
            font-size:15px; 
          }
         


        }
        @media (min-width: 820px) and (max-width: 1180px) {
          h3 {
            font-size: 20px; 
          }
          p {
            font-size: 15px; 
          }
        }
        @media (min-width: 1024px) and (max-width: 1366px) {
          h3 {
            font-size: 20px; 
          }
          p {
            font-size: 15px; 
          }
        }
        @media (min-width: 912px) and (max-width: 1368px) {
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 15px; 
          }
        }
        @media (min-width: 1024px) and (max-width: 600px) {
          h3 {
            font-size: 20px;
          }
          p {
            font-size: 15px; 
          }
        }
        @media (min-width: 1280px) and (max-width: 800px) {
          h3 {
            font-size: 25px; 
          }
          p {
            font-size: 18px; 
          }
        }

      `}</style>
    </footer>
  );
};

export default Footer;
