import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './section/Home';
import Footer from './components/Footer';
import BrandComp from './section/BrandComp';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/brands' element={<BrandComp/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
