import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const aboutData = {
  subtitle: "A results-driven web developer skilled in building and managing websites and web applications that contribute to the overall success of the product.",
  description: "I am a Senior Frontend Developer with 6 years of experience in web development, specializing in React.js, Redux, and JavaScript to deliver high-quality product solutions. I have extensive expertise in building and managing front-end components of websites and web applications, contributing to the overall success of products. With a strong command of SCSS/CSS for creating maintainable stylesheets and hands-on experience in HTML5, CSS3, JavaScript, React.js, and Node.js, I ensure seamless, scalable, and user-friendly interfaces. I have a proven track record in production and testing support, collaborating effectively with both offshore and onsite teams to drive project success.",
  counts: [
    {
      count: "6 +",
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
      <Box className="container" sx={styles.container}>
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
      </Box>
    </section>
  );
};

export default About;