import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Bookshow from './Page/Bookshow';
import Navbar from './components/Navbar/Navbar';
import Signbutton from './components/Popup/Signbutton';
//aos import
import AOS from "aos";
import "aos/dist/aos.css";
import Addbook from './Page/Addbook';
import Footer from './components/Footer/Footer';


const App = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Signbutton orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Bookshow />} />
          <Route path="/addbook" element={<Addbook />} /> 
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App