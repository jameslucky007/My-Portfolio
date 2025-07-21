import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";



export default function Home() {
  const userName = "Lucky";
  const mainTitle = "My Portfolio Website";

  return (
    <>
      <Sidebar name={userName} />
      <Hero title={mainTitle} />
   
    </>
  );
}
