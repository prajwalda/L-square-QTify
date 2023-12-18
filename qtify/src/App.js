import { useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/Hero/Hero';

function App() {
  const [searchData,useSearchData] = useState("");
  return (
    <div className="App">
      <Navbar searchData/>
      <Hero />
    </div>
  );
}

export default App;
