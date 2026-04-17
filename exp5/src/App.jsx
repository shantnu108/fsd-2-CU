import { useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

import React, { Suspense } from "react";

import { Routes, Route, Link } from "react-router-dom";



// Lazy-loaded pages

const Home = React.lazy(() => import("./components/Home"));

const About = React.lazy(() => import("./components/About"));

const Contact = React.lazy(() => import("./components/Contact"));



function App() {

  return (

    <div style={{ 

      padding: "20px",

      minHeight: "100vh",

      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

      color: "white"

    }}>

      <h2>Dynamic Route Loading Demo</h2>



      {/* Navigation */}

      <nav>

        <Link to="/">Home</Link> |{" "}

        <Link to="/about">About</Link> |{" "}

        <Link to="/contact">Contact</Link>

      </nav>



      <hr />



      {/* Lazy loading + Routing */}

      <Suspense fallback={

        <div style={{ 

          padding: "20px", 

          textAlign: "center", 

          color: "#6366f1",

          fontSize: "18px",

          fontWeight: "500"

        }}>

          🚀 Loading content...

        </div>

      }>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </Suspense>

    </div>

  );

}



export default App;





