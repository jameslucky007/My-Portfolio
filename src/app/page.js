import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";



export default function Home() {
  return (
<>
  <Navbar/>
  <Hero/>
  <About/>
  <Project/>  
  <Contact/>
</>
  );
}
