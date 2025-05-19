'use client';

import React, { useEffect, useRef } from 'react';

const HomeScreen = () => {
  const canvasRef = useRef(null);

  // Animation for the moving gradient background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    // Animation function for the gradient
    const animate = () => {
      time += 0.005;
      
      // Create a blue gradient that moves slowly
      const gradient = ctx.createLinearGradient(
        Math.sin(time) * canvas.width, 
        Math.cos(time * 0.8) * canvas.height, 
        canvas.width - Math.cos(time * 0.5) * canvas.width, 
        canvas.height - Math.sin(time * 0.3) * canvas.height
      );
      
      // Dark blue to light blue gradient with some purple tones
      gradient.addColorStop(0, 'rgba(10, 10, 50, 1)');
      gradient.addColorStop(0.3, 'rgba(30, 30, 100, 1)');
      gradient.addColorStop(0.6, 'rgba(40, 80, 170, 1)');
      gradient.addColorStop(0.8, 'rgba(60, 90, 200, 1)');
      gradient.addColorStop(1, 'rgba(70, 40, 120, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      {/* Content container with glass effect */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        {/* Glass effect container */}
        <div className="max-w-4xl w-full rounded-2xl backdrop-blur-xl bg-white/10 p-12 shadow-xl border border-white/20">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight mb-8">
            The only photo and video enhancer you'll ever need
          </h1>
          
          {/* Subheading with glassmorphic effect */}
          <p className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-12">
            Transformative technology gives your low-quality visuals a stunning HD upgrade. 
            Restore old photos to incredible detail and elevate your content to a professional level.
          </p>
          
          {/* CTA Button with hover effect */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-medium rounded-full backdrop-blur-sm transition-all duration-300 border border-white/30 flex items-center gap-2">
              Try Remini
              <svg 
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Moving orbs for added effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl animate-float-slow"></div>
    </div>
  );
};

export default HomeScreen;