import React from 'react'

const Sidebar = () => {
  return (
    <>
       
        <aside className=" max-w-auto p-10 fixed h-screen bg-[#0a192f] text-white">
      <img className='rounded-4xl w-50 justify-center ml-20' src="https://images.unsplash.com/photo-1750969393822-36e48a31895f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        <h1 className="text-4xl font-bold">Brittany Chiang</h1>
        <h2 className="text-xl mt-2">Front End Engineer</h2>
        <p className="mt-4 text-gray-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="mt-10 space-y-3">
          <a href="#about" className="block text-sm text-gray-300">ABOUT</a>
          <a href="#experience" className="block text-sm text-gray-300">EXPERIENCE</a>
          <a href="#projects" className="block text-sm text-gray-300">PROJECTS</a>
        </nav>

        <div className="mt-10 flex space-x-4">
          <a href="#"><img src="/github.svg" alt="GitHub" className="w-5" /></a>
          <a href="#"><img src="/linkedin.svg" alt="LinkedIn" className="w-5" /></a>
          {/* Add more icons */}
        </div>
      </aside>
       
    </>
  )
}

export default Sidebar