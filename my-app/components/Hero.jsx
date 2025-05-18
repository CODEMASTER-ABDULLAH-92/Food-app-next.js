import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-100 min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className=" gap-8">
        {/* Hero Image */}
        <div className="flex justify-center">
          <Image 
            src={assets.header_img} 
            alt="Hero Image" 
            width={500} 
            height={500} 
            className="rounded-xl min-w-full shadow-lg"
          />
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Lorem ipsum dolor sit amet, <br />
            <span className="text-blue-600">consectetur adipisicing elit.</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Neque vitae obcaecati deserunt fugit, asperiores accusantium dolores cumque voluptatibus.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
