import logo from "./logo.svg";
import './App.css';
import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import HowWeWork from './Screens/HowWeWork';
import Services from './Screens/Services';
import Navbar from "./Screens/Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Benefits />
      <HowWeWork />
      <Services />
      <Contact />
      
    </div>
  );
}

export default App;

//28minutos video 
