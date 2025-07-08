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

      <section id="home">
        <Home />
      </section>

      <section id="stores">
        <Carousel />
      </section>

      <section id="products">
        <Benefits />
      </section>

      <section id="services">
        <HowWeWork />
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}




export default App;

