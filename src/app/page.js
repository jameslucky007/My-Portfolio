import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";



export default function Home() {
  return (
<>
  <Navbar/>
  <Hero/>
  <About/>
  <Contact/>
</>
  );
}
