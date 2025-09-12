import React from "react";
import { Box, Typography, Grid, useTheme, IconButton } from "@mui/material";
import Footer from './Footer'; // Import Footer
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import ArrowUpwardIcon

const contactInfo = {
  location: {
    icon: "bi bi-geo-alt",
    title: "Location",
    text: "Bengaluru, India",
  },
  email: {
    icon: "bi bi-envelope",
    title: "Email",
    text: "santoshkumarwebac96@gmail.com",
  },
  phone: {
    icon: "bi bi-phone",
    title: "Call",
    text: "+91 7978753377",
  },
};

const Contact = () => {
  const theme = useTheme();

  const styles = {
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.default,
    },
    container: {
      padding: "2rem",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", // Center horizontally
      position: "relative",
    },
    title: {
      marginBottom: "1rem",
      fontWeight: "bold",
      color: theme.palette.text.primary,
      textAlign: "center",
    },
    info: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
    },
    infoBox: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "300px",
    },
    icon: {
      fontSize: "2rem",
      color: theme.palette.secondary.main,
    },
    infoTitle: {
      fontWeight: "bold",
      color: theme.palette.text.primary,
    },
    infoText: {
      color: theme.palette.text.secondary,
    },
    scrollUpButtonBox: {
      display: "flex",
      justifyContent: "center",
      marginTop: "auto", // Push button to bottom of content
      marginBottom: "1rem",
      width: "100%",
    },
    scrollUpButton: {
      animation: 'bounce 2s infinite',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': { backgroundColor: theme.palette.primary.dark },
    },
  };

  return (
    <section id="contact" className="contact section-bg">
      <Box sx={styles.wrapper}>
        <Box className="container" sx={styles.container}>
          <Typography variant="h2" sx={styles.title}>
            Contact
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Box className="info" sx={styles.info}>
                {Object.keys(contactInfo).map((key) => (
                  <Box key={key} className={key} sx={styles.infoBox}>
                    <Box sx={{ textAlign: "center", width: "100%" }}>
                      <i className={contactInfo[key].icon} style={styles.icon}></i>
                      <Typography variant="h6" sx={styles.infoTitle}>
                        {contactInfo[key].title}
                      </Typography>
                      <Typography variant="body1" sx={styles.infoText}>
                        {contactInfo[key].text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={styles.scrollUpButtonBox}>
            <IconButton sx={styles.scrollUpButton} onClick={() => {
              const heroSection = document.getElementById('hero');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <ArrowUpwardIcon />
            </IconButton>
          </Box>
        </Box>
        <Footer />
      </Box>
    </section>
  );
};

export default Contact;