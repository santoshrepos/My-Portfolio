import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#333',
    borderRadius: '8px',
    textAlign: 'center',
  },
  body1: {
    color: '#fff',
    marginBottom: '1rem',
  },
  link: {
    color: '#ff5722',
    textDecoration: 'none',
  },
  body2: {
    color: '#aaa',
  },
};

const Footer = () => {
  return (
    <footer id="footer" className="footer section-bg">
      <Box className="container" sx={styles.container}>
        <Typography variant="body1" sx={styles.body1}>
          Designed by <Link href="https://github.com/santoshpatra" sx={styles.link}>Santosh Patra</Link>
        </Typography>
        <Typography variant="body2" sx={styles.body2}>
          © {new Date().getFullYear()} Santosh Patra. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;