import './App.css'
import React, { useState, useEffect } from 'react'
import SquareLoader from "react-spinners/SquareLoader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Construction from './pages/Construction';



function App() {
  const [loading, setLoading] = useState( false )

  useEffect (() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <BrowserRouter className="app">
      {loading ? (
        <div id="app-loader">
          <SquareLoader
            color={"white"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <span className="text-white font-monserrat text-xl my-4">
            Loading...
          </span>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="pt-24 md:pt-30 ">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/services" element={<Services />} />
             
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
