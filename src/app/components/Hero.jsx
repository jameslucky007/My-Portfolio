'use client';
import React, { useState, useEffect } from 'react';

// About Component
const About = () => {
  return (
    <section id="about" className="mb-12 lg:mb-16">
      <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-blue-300">About</h2>
      <div className="space-y-4 text-sm lg:text-base leading-relaxed">
        <p className="text-gray-200">
          I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
        </p>
        <p className="text-gray-300">
          Currently, I'm a Senior Front-End Engineer at <span className="text-blue-300 font-medium">Klaviyo</span>, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
        </p>
        <p className="text-gray-300">
          In the past, I've had the opportunity to develop software across a variety of settings — from <span className="text-blue-300 font-medium">advertising agencies</span> and <span className="text-blue-300 font-medium">large corporations</span> to <span className="text-blue-300 font-medium">start-ups</span> and <span className="text-blue-300 font-medium">small digital product studios</span>. Additionally, I also released a <span className="text-blue-300 font-medium">comprehensive video course</span> a few years ago, guiding learners through building a web app with the Spotify API.
        </p>
        <p className="text-gray-300">
          In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for <span className="text-blue-300 font-medium">Korok seeds</span>.
        </p>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      hasArrow: true,
      description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Storybook"]
    },
    {
      period: "2018 — 2024",
      title: "Lead Engineer",
      company: "Upstatement",
      hasArrow: true,
      subtitle: "Senior Engineer",
      subtitle2: "Engineer", 
      description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"]
    }
  ];

  return (
    <section id="experience" className="mb-12 lg:mb-16">
      <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-blue-300">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="group hover:bg-gray-800/30 hover:shadow-lg transition-all duration-300 rounded-lg p-4 -mx-4"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Time Period */}
              <div className="lg:w-1/4 flex-shrink-0">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  {exp.period}
                </p>
              </div>

              {/* Content */}
              <div className="lg:w-3/4">
                {/* Job Title and Company */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
                    {exp.title} • {exp.company}
                    {exp.hasArrow && (
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </h3>
                  
                  {/* Subtitles for career progression */}
                  {exp.subtitle && (
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-400 text-base">{exp.subtitle}</p>
                      {exp.subtitle2 && (
                        <p className="text-gray-400 text-base">{exp.subtitle2}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4 text-sm lg:text-base">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Hero Component
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 relative overflow-hidden">
      
      {/* Cursor spotlight effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Main Content */}
      <main className="ml-[33.3333%] w-2/3 p-6 lg:p-12 overflow-y-auto max-h-screen text-gray-300 relative z-20 mt-22 ">
        {/* About Section */}
        <About />
        
        {/* Experience Section */}
        <Experience />
      </main>
    </div>
  );
};

export default Hero;