import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import { Element } from 'react-scroll';
import { Navbar } from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";



function App() {


  return (
    <>
      <div className="font-abc bg-gradient-to-b text-white from-black to-yellow-500 min-h-screen">
        <Navbar></Navbar>
        <Element id="Banner"><Banner></Banner></Element>
        <Element id="About"><About></About></Element>
        <Element id="Portfolio"><Portfolio></Portfolio></Element>
        <Element id="Skills"><Skills></Skills></Element>
        <Experience></Experience>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
