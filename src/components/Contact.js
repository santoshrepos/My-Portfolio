import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  icon: {
    fontSize: '2rem',
    color: '#ff5722',
  },
  infoTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    color: '#666',
  },
};

const Contact = () => {
  return (
    <section id="contact" className="contact section-bg">
      <Box className="container" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>Contact</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="info" sx={styles.info}>
              <Box className="address" sx={styles.infoBox}>
                <i className="bi bi-geo-alt" style={styles.icon}></i>
                <Box>
                  <Typography variant="h6" sx={styles.infoTitle}>Location:</Typography>
                  <Typography variant="body1" sx={styles.infoText}>Bengaluru, India</Typography>
                </Box>
              </Box>
              <Box className="email" sx={styles.infoBox}>
                <i className="bi bi-envelope" style={styles.icon}></i>
                <Box>
                  <Typography variant="h6" sx={styles.infoTitle}>Email:</Typography>
                  <Typography variant="body1" sx={styles.infoText}>santoshkumarp1996@gmail.com</Typography>
                </Box>
              </Box>
              <Box className="phone" sx={styles.infoBox}>
                <i className="bi bi-phone" style={styles.icon}></i>
                <Box>
                  <Typography variant="h6" sx={styles.infoTitle}>Call:</Typography>
                  <Typography variant="body1" sx={styles.infoText}>+91 7978753377</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Contact;