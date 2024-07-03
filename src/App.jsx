import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import { Element } from 'react-scroll';
import { Navbar } from "./Components/Navbar/Navbar"
import Portfolio from "./Components/Portfolio";


function App() {


  return (
    <>
      <div className="font-abc bg-gradient-to-b text-white from-black to-yellow-500 min-h-screen">
        <Navbar></Navbar>
        <Banner></Banner>
        <Element id="About"><About></About></Element>
        <Element id="Portfolio"><Portfolio></Portfolio></Element>
      </div>
    </>
  )
}

export default App
