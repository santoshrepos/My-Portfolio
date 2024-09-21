import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: theme.palette.background.default,
      borderRadius: '8px',
      textAlign: 'center',
    },
    body1: {
      color: theme.palette.text.primary,
      marginBottom: '1rem',
    },
    link: {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  };

  return (
    <footer id="footer" className="footer section-bg">
      <Box className="container" sx={styles.container}>
        <Typography variant="body1" sx={styles.body1}>
          Designed by <Link href="https://github.com/santoshpatra" sx={styles.link}>Santosh Patra</Link>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;