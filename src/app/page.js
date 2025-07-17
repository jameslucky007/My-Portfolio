import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Images from "./components/Images";

export default function Home() {
  const userName = "Lucky";
  const mainTitle = "Welcome to the Hero Section";

  return (
    <>
      <Sidebar name={userName} />
      <Hero title={mainTitle} />
      <Images />
    </>
  );
}
