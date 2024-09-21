import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardActions, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LinkIcon from '@mui/icons-material/Link';

const projects = [
  { img: 'assets/img/portfolio/portfolio-1.jpg', title: 'App 1', link: 'portfolio-details.html' },
  { img: 'assets/img/portfolio/portfolio-2.jpg', title: 'Web 3', link: 'portfolio-details.html' },
  { img: 'assets/img/portfolio/portfolio-3.jpg', title: 'App 2', link: 'portfolio-details.html' },
];

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  title: {
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  cardMedia: {
    height: '200px',
  },
  cardActions: {
    justifyContent: 'center',
  },
  iconButton: {
    color: '#ff5722',
  },
};

const Project = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <Box className="container" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>Projects</Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={styles.card}>
                <CardMedia component="img" image={project.img} alt={project.title} sx={styles.cardMedia} />
                <CardActions sx={styles.cardActions}>
                  <IconButton href={project.img} title={project.title} sx={styles.iconButton}>
                    <AddIcon />
                  </IconButton>
                  <IconButton href={project.link} title="More Details" sx={styles.iconButton}>
                    <LinkIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Project;