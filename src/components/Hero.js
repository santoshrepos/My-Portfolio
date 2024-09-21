import React from 'react';
import { Box, Typography, Button, Grid, useTheme } from '@mui/material';
import { ReactTyped as Typed } from 'react-typed';
import backGroundDark from '../assets/img/hero-bg-dark.jpg';
import backGroundLight from '../assets/img/hero-bg-light2.jpg';
import resume from '../assets/resume/ResumeNew.pdf';

const Hero = () => {
  const theme = useTheme();
  const backgroundImage = theme.palette.mode === 'dark' ? backGroundDark : backGroundLight;

  const styles = {
    hero: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'left', // Left align text
      padding: '2rem', // Add padding for better alignment
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Align items to the left
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: '30px',
      marginBottom: 2,
    },
    name: {
      fontSize: '48px',
      color: theme.palette.primary.main,
    },
    typedText: {
      marginBottom: 4,
      fontSize: '24px',
      color: theme.palette.text.secondary,
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
    },
    contactButton: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-start', // Align buttons to the left
      width: '100%',
      marginTop: '2rem', // Add margin for spacing
    },
  };

  return (
    <Box id="hero" sx={styles.hero}>
      <Box sx={styles.content}>
        <Typography variant="h3" sx={styles.title}>
          Hi! 👋🏼
        </Typography>
        <Typography variant="h3" sx={styles.title}>
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
          <Grid container spacing={2} justifyContent="flex-start"> {/* Align buttons to the left */}
            <Grid item>
              <Button
                variant="outlined"
                href={resume}
                download="Santosh_Resume"
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
    </Box>
  );
};

export default Hero;