import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, useTheme, IconButton } from '@mui/material';
import { ReactTyped as Typed } from 'react-typed';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import backGroundDark from '../assets/img/hero-bg-dark.jpg';
import backGroundLight from '../assets/img/hero-bg-light2.jpg';
import resume from '../assets/resume/ResumeNew.pdf';

const Hero = () => {
  const theme = useTheme();
  const backgroundImage = theme.palette.mode === 'dark' ? backGroundDark : backGroundLight;
  const [showScrollButton, setShowScrollButton] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const styles = {
    hero: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      width: '100%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center', // Center align text
      padding: '2rem', // Add padding for better alignment
      position: 'relative', // For positioning the scroll button
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center align items
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: '3rem', // Increased font size
      fontWeight: 'bold', // Make text bold
      marginBottom: '1rem', // Consistent spacing
    },
    name: {
      fontSize: '4rem', // Increased font size
      fontWeight: 'bold', // Make text bold
      color: theme.palette.primary.main,
    },
    typedText: {
      marginBottom: '2rem', // Consistent spacing
      fontSize: '1.5rem', // Consistent font size
      color: theme.palette.text.secondary,
    },
    button: {
      padding: '12px 24px',
      fontSize: '1rem', // Consistent font size
    },
    contactButton: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center', // Center align buttons
      width: '100%',
      marginTop: '2rem', // Consistent spacing
    },
    scrollButton: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      transition: 'opacity 0.5s, background-color 0.3s',
      opacity: showScrollButton ? 1 : 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)',
      },
      '40%': {
        transform: 'translateY(-10px)',
      },
      '60%': {
        transform: 'translateY(-5px)',
      },
    },
  };

  return (
    <Box id="hero" sx={styles.hero}>
      <Box sx={styles.content}>
        <Typography variant="h2" sx={styles.title}>
          Hi! 👋🏼
        </Typography>
        <Typography variant="h2" sx={styles.title}>
          I'm <span style={styles.name}>Santosh Patra</span>
        </Typography>
        <Typography variant="body1" sx={styles.typedText}>
          <Typed
            strings={[
              'Senior Software Engineer',
              'Web Developer',
              'SSE @Connectwise',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <Box sx={styles.buttonContainer}>
          <Grid container spacing={2} justifyContent="center"> {/* Center align buttons */}
            <Grid item>
              <Button
                variant="outlined"
                href={resume}
                download="Santosh_Patra_Resume"
                sx={styles.button}
              >
                Download CV
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" href="#contact" sx={{ ...styles.button, ...styles.contactButton }}>
                Contact
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <IconButton sx={styles.scrollButton} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <ArrowDownwardIcon />
      </IconButton>
    </Box>
  );
};

export default Hero;