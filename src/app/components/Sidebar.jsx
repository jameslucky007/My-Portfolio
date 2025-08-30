import React from 'react'
import { FaGithub, FaLinkedin   } from "react-icons/fa";
import Image from 'next/image';

const Sidebar = () => {
  return (
    <>
       
        <aside className=" max-w-auto p-10 ml-20 fixed h-screen  text-white">
      <Image className='rounded-full w-42 h-42 object-cover justify-start  border-3 mb-8 border-amber-50' src="/photo.jpg" alt="img" width={100} height={100} />
        <h1 className="text-4xl font-bold">Subhabas</h1>
        <h4 className="text-xl mt-2">Web Developer | Software Engineer </h4>
        <p className="mt-4 text-gray-400 text-s pr-4">I build accessible, pixel-perfect digital <br /> experiences for the web.</p>

        <nav className="mt-10 space-y-3 ">
          <a href="#about" className="block text-sm text-gray-300 ">  ABOUT</a>
          <a href="#experience" className="block text-sm text-gray-300">EXPERIENCE</a>
          <a href="#projects" className="block text-sm text-gray-300">PROJECTS</a>
          <a href="#projects" className="block text-sm text-gray-300">CONTENT</a>
        </nav>

        <div className="mt-10 flex space-x-4">
          <a href="#"><FaGithub  /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
        <div className="mt-5 flex space-x-4">
          <a href="#"><FaGithub  /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaLinkedin /></a>
         
        </div>
      </aside>
       
    </>
  )
}

export default Sidebar