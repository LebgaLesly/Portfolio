//COMPONENTS IMPORT
import About from './Components/About';
import Experience from './Components/Experience';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import SocialLinks from './Components/SocialLinks';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
