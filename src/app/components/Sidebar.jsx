'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen } from "react-icons/fa";
import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside className="lg:max-w-md lg:p-10 lg:ml-10 lg:fixed lg:h-screen text-white lg:w-1/3 p-6 relative z-30">
      <div className="lg:sticky lg:top-10">
        <Image 
          className='rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover border-4 border-blue-400 mb-6 mx-auto lg:mx-0' 
          src="/photo.jpg" 
          alt="Profile" 
          width={160} 
          height={160} 
        />
        <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">Lakki Ali</h1>
        <h4 className="text-lg lg:text-xl mt-2 text-blue-300 text-center lg:text-left">Web Developer | Software Engineer</h4>
        <p className="mt-4 text-gray-300 text-sm lg:text-base text-center lg:text-left lg:pr-4">
          I build accessible, pixel-perfect digital <br className="hidden lg:block" /> experiences for the web.
        </p>

        <nav className="mt-8 lg:mt-10 space-y-3 text-center lg:text-left">
          <a href="#about" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors duration-200 tracking-wider uppercase">About</a>
          <a href="#experience" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors duration-200 tracking-wider uppercase">Experience</a>
          <a href="#projects" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors duration-200 tracking-wider uppercase">Projects</a>
          <a href="#content" className="block text-sm text-gray-300 hover:text-blue-300 transition-colors duration-200 tracking-wider uppercase">Content</a>
        </nav>

        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start space-x-4">
          <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-xl">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-xl">
            <FaTwitter />
          </a>
        </div>
        
        <div className="mt-4 flex justify-center lg:justify-start space-x-4">
          <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-xl">
            <FaCodepen />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;