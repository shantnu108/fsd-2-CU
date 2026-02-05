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
      <nav style={{ 
        marginBottom: "20px",
        fontSize: "18px"
      }}>
        <Link 
          to="/" 
          style={{ 
            color: "white", 
            textDecoration: "none",
            margin: "0 10px",
            padding: "8px 16px",
            borderRadius: "6px",
            background: "rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease"
          }}
        >
          🏠 Home
        </Link> 
        <Link 
          to="/about" 
          style={{ 
            color: "white", 
            textDecoration: "none",
            margin: "0 10px",
            padding: "8px 16px",
            borderRadius: "6px",
            background: "rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease"
          }}
        >
          📖 About
        </Link> 
        <Link 
          to="/contact" 
          style={{ 
            color: "white", 
            textDecoration: "none",
            margin: "0 10px",
            padding: "8px 16px",
            borderRadius: "6px",
            background: "rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease"
          }}
        >
          📬 Contact
        </Link>
      </nav>

      <hr style={{ 
        border: "none", 
        height: "2px", 
        background: "rgba(255, 255, 255, 0.2)",
        margin: "20px 0"
      }} />

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


