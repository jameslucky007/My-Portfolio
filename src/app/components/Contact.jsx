import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#0F1020] text-white py-16 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-200">Contact Us</h2>
        <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur.</p>

        {/* Contact Info Box */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border border-gray-600 rounded-xl p-6 space-y-4 md:space-y-0 md:space-x-6 bg-[#51548b87]">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-lg text-purple-400" />
            <span>Lucky@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-lg text-purple-400" />
            <span>+91 700529633</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-lg text-purple-400" />
            <span>New Delhi, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-10 space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl text-black placeholder-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl text-black placeholder-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl text-black placeholder-white"
          />
          <button
            type="submit"
            className="flex items-center justify-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-purple-500 transition"
          >
            <span>Submit</span>
            <FaPaperPlane className="ml-2" />
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-400">
          <p>© 2025 Lucky A</p>
          <p className="mt-1 max-w-xl mx-auto px-4">
            About this website: built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
            Framer Motion, React Email & Resend, Netlify hosting.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
