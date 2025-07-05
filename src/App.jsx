import React from 'react';
import './App.css';
import Navbar from "./Screens/Components/Navbar";
import Home from './Screens/Home';
import Benefits from './Screens/Stores.jsx';
import HowWeWork from './Screens/products.jsx';
import Services from './Screens/Services';
import Contact from './Screens/Contact';
import Carousel from './carousel.jsx';  
import Footer from "./Screens/Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Carousel /> 

      <Benefits />
      <HowWeWork />
      <Services />
      <Contact />
      <Footer /> 
    </div>
  );
}



export default App;

