import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Intro from "./Components/Intro/Intro";
import Section3 from "./Components/Section3/About";
import Section4 from "./Components/Section4/AreaOfPractices";
import Footer from "./Footer/Footer";
import Section5 from "./Section5/Reviews";
import Section6 from "./Section6/Team";
import Section7 from "./Section7/Faq";
import Section8 from "./Section8/Subscribe";

function App() {
  return (
    <div className="w-[100vw] bg-[#232222] font-">
      <HeroSection />
      <Intro />
      {/* why choose us */}
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}

export default App;