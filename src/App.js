import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, marginLeft: '250px', overflowY: 'auto' }}>
        <Hero />
        <main id="main" style={{ flexGrow: 1 }}>
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;