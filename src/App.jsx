import ButtonGradient from "./assets/svg/ButtonGradient";
import Aboutme from "./components/Aboutme";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header/>
        <Hero/>
        <Aboutme/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
      
        

     
      <ButtonGradient />
    </>
  );
};

export default App;
