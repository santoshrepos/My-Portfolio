import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, IconButton, useTheme } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const project = {
  title: 'ConnectDevs',
  link: 'http://13.232.103.117/',
  tech: 'React.js, Node.js, Express, MongoDB, AWS EC2, Nginx, PM2',
  description: 'A modern developer community platform built with a robust MERN stack, deployed on AWS EC2 with Nginx and PM2 for production reliability.',
  gif: require('../assets/video/ConnectsDevDemo.gif'), // Use require for local GIF
  backup: require('../assets/img/connectDev.png'), // Backup image if GIF fails
};

const Project = () => {
  const theme = useTheme();
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    card: {
      maxWidth: 600,
      margin: 'auto',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    media: {
      width: '100%',
      height: 'auto', // Ensure GIF height is auto for animation
      display: 'block',
      borderRadius: '16px 16px 0 0',
      marginBottom: '1rem',
      maxHeight: 320,
    },
    tech: {
      margin: '1rem 0',
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
    description: {
      color: theme.palette.text.secondary,
      marginBottom: '1rem',
      textAlign: 'center',
    },
    imagesContainer: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '1rem',
    },
    scrollButton: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': { backgroundColor: theme.palette.primary.dark },
    },
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <Box className="container" sx={styles.container}>
  <Typography variant="h2" sx={styles.tech}>Featured Project: {project.title}</Typography>
        <Card sx={styles.card}>
          <img
            src={project.gif}
            alt="ConnectDevs Demo"
            style={styles.media}
            onError={e => { e.target.onerror = null; e.target.src = project.backup; }}
          />
          <CardContent>
            <Typography variant="body1" sx={styles.tech}>{project.tech}</Typography>
            <Typography variant="body2" sx={styles.description}>{project.description}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <IconButton href={project.link} title="Live Project" sx={{ color: theme.palette.secondary.main }}>
              <LinkIcon />
            </IconButton>
          </CardActions>
        </Card>
        <IconButton sx={styles.scrollButton} onClick={() => {
          const nextSection = document.getElementById('skills');
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

export default Project;