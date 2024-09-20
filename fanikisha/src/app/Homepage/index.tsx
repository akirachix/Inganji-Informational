"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Homepage = () => {
  return (
    <div id="homepage"className="relative min-h-[90vh] flex items-center overflow-hidden ">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/amata.png"
          alt="Dairy Farm Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-[300px]">
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 -ml-64">
  Streamline Dairy Loan<br />Management with Fanikisha
</h1>
          <p className="text-xl sm:text-4xl mb-8 sm:mb-10 md:text -ml-64 lg:text-3xl">
            Our reliable solution simplifies the loan approval process, enhances record-keeping, and provides real-time insights into farmer transactions.
          </p>
          <Link href="/join" className="inline-block bg-blue-600 hover:bg-blue-700 -ml-64 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 w-15  md:text-2xl">
            Join us today
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Homepage;







