import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { ReactTyped as Typed } from 'react-typed';
import backGround from '../assets/img/hero-bg.jpg';
import resume from '../assets/resume/ResumeNew.pdf';

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${backGround})`, // Add your image path here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    marginBottom: 2,
  },
  name: {
    fontSize: '48px',
    color: 'coral',
  },
  typedText: {
    marginBottom: 4,
    color: '#FFF',
  },
  contactButton: {
    backgroundColor: '#333',
    color: '#fff',
  },
};

const Hero = () => {
  return (
    <Box id="hero" sx={styles.hero}>
      <Typography variant="h3" sx={styles.title}>
        Hi! 👋🏼
      </Typography>
      <Typography variant="h3" sx={styles.title}>
        I'm <span style={styles.name}>Santosh Patra</span>
      </Typography>
      <Typography variant="body1" sx={styles.typedText}>
        <Typed
          strings={[
            'Software Engineer',
            'Frontend Developer',
            'Senior Analyst @Accenture',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            href={resume}
            download="Santosh_Resume"
          >
            Download CV
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" href="#contact" sx={styles.contactButton}>
            Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;