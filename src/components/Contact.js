import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";

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
    container: {
      padding: "2rem",
      backgroundColor: theme.palette.background.default,
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
  };

  return (
    <section id="contact" className="contact section-bg">
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
      </Box>
    </section>
  );
};

export default Contact;