import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import aboutData from './aboutData.json';

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
  description: {
    marginBottom: '2rem',
    color: '#666',
  },
  listItem: {
    padding: '0.5rem 0',
  },
  listItemText: {
    color: '#444',
  },
  gridContainer: {
    marginTop: '2rem',
  },
  countBox: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  icon: {
    fontSize: '2rem',
    color: '#ff5722',
  },
  count: {
    margin: '0.5rem 0',
    fontWeight: 'bold',
    color: '#333',
  },
  countDescription: {
    color: '#666',
  },
};

const About = () => {
  return (
    <section id="about" className="facts">
      <Box className="container" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>About</Typography>
        <Typography variant="body1" sx={styles.description}>
          {aboutData.description}
        </Typography>
        <Box className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <List>
            {aboutData.listItems.map((item, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <ListItemText primary={item} sx={styles.listItemText} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Grid container spacing={2} sx={styles.gridContainer}>
          {aboutData.counts.map((count, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box className="count-box" data-aos="fade-up" data-aos-delay={index * 100} sx={styles.countBox}>
                <i className={count.icon} style={styles.icon}></i>
                <Typography variant="h4" sx={styles.count}>{count.count}</Typography>
                <Typography variant="body1" sx={styles.countDescription}><strong>{count.label}</strong> {count.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default About;