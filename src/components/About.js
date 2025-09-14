import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IconButton } from '@mui/material';

const aboutData = {
  subtitle: "MERN Stack Specialist | React.js | Node.js | JavaScript | HTML5 | CSS3 | MongoDB | Unit Testing | Core Java | MySQL | Building Scalable, User-Centric Web Apps",
  description:
    "Graduated with a B.Tech in Computer Science from IIIT Bhubaneswar, I am a Senior Front-End Engineer at ConnectWise, passionate about crafting seamless, scalable, and high-performance web applications. My expertise spans the full MERN stack—React.js, Node.js, Express, MongoDB—alongside advanced skills in JavaScript, HTML5, CSS3, Redux, and robust unit testing. I have hands-on experience with Core Java and MySQL, enabling me to deliver end-to-end solutions and optimize both frontend and backend workflows. At ConnectWise, I drive innovation by implementing modern React architecture, optimizing APIs, and collaborating with backend teams for system migrations. I thrive on delivering pixel-perfect UIs, improving user experience, and empowering teams with efficient, maintainable code. Always eager to learn and adapt, I bring a fresh, results-driven perspective to every project.",
  counts: [
    {
      count: "7",
      label: "Years of Experience",
      description: "Web Development"
    },
    {
      count: "7 +",
      label: "Projects Delivered",
      description: ""
    },
    {
      count: "3",
      label: "Domains of Expertise",
      description: "Banking, E-commerce, Telecommunication"
    }
  ]
};

const About = () => {
  const theme = useTheme();
  
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: theme.palette.background.default,
      borderRadius: '8px',
      minHeight: '100vh', // Take full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center vertically
    },
    title: {
      marginBottom: '1rem',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: '2rem',
      color: theme.palette.text.secondary,
      textAlign: 'center',
    },
    description: {
      marginBottom: '2rem',
      color: theme.palette.text.secondary,
    },
    gridContainer: {
      marginTop: '2rem',
    },
    countBox: {
      textAlign: 'center',
      padding: '1rem',
      backgroundColor: theme.palette.background.paper,
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    count: {
      margin: '0.5rem 0',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
    countDescription: {
      color: theme.palette.text.secondary,
    },
  };

  return (
    <section id="about" className="facts">
      <Box className="container" sx={{ ...styles.container, position: 'relative' }}>
        <Typography variant="h2" sx={styles.title}>About Me</Typography>
        <Typography variant="body1" sx={styles.subtitle}>
          {aboutData.subtitle}
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          {aboutData.description}
        </Typography>
        <Grid container spacing={2} sx={styles.gridContainer}>
          {aboutData.counts.map((count, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box className="count-box" data-aos="fade-up" data-aos-delay={index * 100} sx={styles.countBox}>
                <Typography variant="h4" sx={{ ...styles.count, textAlign: 'center' }}>{count.count}</Typography>
                <Typography variant="body1" sx={{ ...styles.countDescription, textAlign: 'center' }}>
                  <strong>{count.label}</strong> {count.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <IconButton sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': { backgroundColor: theme.palette.primary.dark }
        }} onClick={() => {
          const nextSection = document.getElementById('portfolio');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
    </section>
  );
};

export default About;