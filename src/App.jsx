import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import AreaOfPractices from "./Components/AreaOfPractices/AreaOfPractices";
import Footer from "./Footer/Footer";
import Reviews from "./Reviews/Reviews";
import Team from "./Team/Team";
import Faq from "./Faq/Faq";
import Subscribe from "./Subscribe/Subscribe";

function App() {
  return (
    <div className="w-[100vw] bg-[#232222] font-">
      <HeroSection />
      <Intro />
      <About />
      <AreaOfPractices />
      <Reviews />
      <Team />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;