import Navbar from '../components/Navbar';
import '../App.css';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/about';
import Contact from '../components/contact';
import "@fontsource/karla"
import "@fontsource/markazi-text";

function Home() {
  return (
    <>
    <div className='Container'>
      <Hero/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Contact/>
      </div>
  </>
    
  );
}

export default Home;
