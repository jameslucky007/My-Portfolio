import React from 'react'

const Hero = () => {
  return (
   <>
        <div className="flex min-h-screen">
      {/* Left Panel - Fixed */}
      <aside className="w-1/3 max-w-md p-8 fixed h-screen bg-[#0a192f] text-white">
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

      {/* Right Panel - Scrollable */}
      <main className="ml-[33.3333%] w-2/3 p-8 overflow-y-auto max-h-screen bg-[#0a192f] text-gray-300">
        <section id="about">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="mb-6">
            I'm a developer passionate about crafting accessible, pixel-perfect...
          </p>
        </section>

        <section id="experience">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p>Experience content here...</p>
        </section>

        <section id="projects">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p>Projects content here...</p>
        </section>

          <section id="experience">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p>Experience content here...</p>
        </section>

        <section id="projects">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p>Projects content here...</p>
        </section>

          <section id="experience">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p>Experience content here...</p>
        </section>

        <section id="projects">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p>Projects content here...</p>
        </section>
          <section id="experience">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p>Experience content here...</p>
        </section>

        <section id="projects">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p>Projects content here...</p>
        </section>  <section id="experience">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p>Experience content here...</p>
        </section>

        <section id="projects">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p>Projects content here...</p>
        </section>

        {/* Add more sections if needed */}
      </main>
    </div>
   </>
  )
}

export default Hero