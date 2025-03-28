import About from "../../components/About";
import Approach from "../../components/Approach";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Approach />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
