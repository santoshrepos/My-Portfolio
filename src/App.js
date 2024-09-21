import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { lightTheme, darkTheme } from './theme';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Box sx={{ flexGrow: 1, marginLeft: isSidebarOpen ? '250px' : '60px', overflowY: 'auto' }}>
          <IconButton
            onClick={toggleSidebar}
            sx={{ position: 'absolute', top: 16, left: 16, zIndex: 1000 }}
          >
            <MenuIcon />
          </IconButton>
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
    </ThemeProvider>
  );
}

export default App;