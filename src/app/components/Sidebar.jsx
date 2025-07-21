import React from 'react'

const Sidebar = () => {
  return (
    <>
       
        <aside className=" max-w-auto p-10 ml-10 fixed h-screen  text-white">
      <img className='rounded-full w-42 h-42 object-cover justify-start  border-3 mb-8 border-amber-50'  src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
        <h1 className="text-4xl font-bold">Lucky A</h1>
        <h3 className="text-xl mt-2">Web Developer</h3>
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