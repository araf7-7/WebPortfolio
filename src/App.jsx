import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import { Element } from 'react-scroll';
import { Navbar } from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";



function App() {


  return (
    <>
      <div className="font-abc bg-gradient-to-b text-white from-black to-yellow-500 min-h-screen">
        <Toaster position="bottom-left"
          reverseOrder={false}></Toaster>
        <Navbar></Navbar>
        <Element id="Banner"><Banner></Banner></Element>
        <Element id="About"><About></About></Element>
        <Element id="Portfolio"><Portfolio></Portfolio></Element>
        <Element id="Skills"><Skills></Skills></Element>
        <Experience></Experience>
        <Education></Education>
        <Element id="Contact"><Contact /></Element>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
