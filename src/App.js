import './App.css';
import Preloader from './components/preloader/preloader';
import React, { useState, useEffect } from 'react';
import FirstSection from './components/FirstSection/firstSection';
import Gallery from './components/gallery/gallery';

function App() {
  const [isrender, setisrender] = useState(false);
  useEffect(() => {
    console.log(1)
    setInterval(() => {
      setisrender(true);
    }, 2000);
  }, []);
  useEffect(() => {
    if (!isrender) {
      document.getElementById("App").style = "background: black;";
      document.body.style.overflow = "hidden";
    } else {
      // document.getElementById("hero_sect_main").style = "opacity: 1; !important";
      document.body.style.overflowY = "scroll";
    }
  }, [isrender]);


  return (
    <div className="App" id="App">
      {
        !isrender &&
        <Preloader />
      }
        <FirstSection />
        <Gallery />
    </div>
  );
}

export default App;
