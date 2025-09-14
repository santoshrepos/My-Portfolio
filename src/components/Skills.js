import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  useTheme,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Footer from "./Footer";

const skills = [
  { name: "Reactjs", value: 85 },
  { name: "JavaScript", value: 85 },
  { name: "Nodejs", value: 75 },
  { name: "HTML5", value: 80 },
  { name: "CSS3", value: 80 },
  { name: "TypeScript", value: 60 },
  { name: "MongoDB", value: 60 },
  { name: "Core Java", value: 50 },
];

const skillColors = [
  "#00796b", // Teal
  "#ff9800", // Amber
  "#00acc1", // Cyan
  "#ff5722", // Deep Orange
  "#8e24aa", // Purple
  "#d32f2f", // Red
  "#388e3c", // Green
];

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
    text: (
      <>
        +91 7978753377
        <br />
        +91 8895705496
      </>
    ),
  },
};

const Skills = () => {
  const theme = useTheme();

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: theme.palette.background.default,
      borderRadius: "8px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      marginBottom: "1rem",
      fontWeight: "bold",
      color: theme.palette.text.primary,
      textAlign: "center",
    },
    skillBox: {
      marginBottom: "0.5rem",
      textAlign: "center",
      minHeight: 0,
      padding: "0.5rem",
    },
    skillName: {
      fontWeight: "bold",
      color: theme.palette.text.primary,
      marginBottom: "0.25rem",
      fontSize: "0.9rem",
    },
    circularProgress: {
      position: "relative",
      display: "inline-flex",
    },
    circularProgressText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
      color: theme.palette.text.primary,
      fontSize: "0.8rem",
    },
    contactSection: {
      marginTop: "3rem",
      padding: "2rem 0",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      textAlign: "center",
    },
    contactTitle: {
      marginBottom: "1rem",
      fontWeight: "bold",
      color: theme.palette.text.primary,
      textAlign: "center",
    },
    info: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
    },
    infoBox: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: theme.palette.background.default,
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
    scrollButton: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      animation: "bounce 2s infinite",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      "&:hover": { backgroundColor: theme.palette.primary.dark },
    },
  };

  return (
    <section id="skills" className="skills section-bg">
      <Box
        className="container"
        sx={{
          ...styles.container,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "2rem",
            width: "100%",
            justifyContent: "center",
            alignItems: "stretch",
            flexGrow: 1,
          }}
        >
          {/* Skills Left Box */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: theme.palette.background.paper,
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            <Typography variant="h2" sx={styles.title}>
              Skills
            </Typography>
            <Grid container spacing={1}>
              {skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Box sx={styles.skillBox}>
                    <Typography variant="body1" sx={styles.skillName}>
                      {skill.name}
                    </Typography>
                    <Box sx={styles.circularProgress}>
                      <CircularProgress
                        variant="determinate"
                        value={skill.value}
                        size={70}
                        thickness={2}
                        sx={{
                          color: skillColors[index % skillColors.length],
                          width: "70px",
                          height: "70px",
                        }}
                      />
                      <Typography
                        variant="caption"
                        component="div"
                        sx={styles.circularProgressText}
                      >
                        {`${skill.value}%`}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Contact Right Box */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: theme.palette.background.paper,
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            <Typography variant="h2" sx={styles.contactTitle}>
              Contact
            </Typography>
            <Box
              className="info"
              sx={{
                ...styles.info,
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {Object.keys(contactInfo).map((key) => (
                <Box key={key} className={key} sx={styles.infoBox}>
                  <Box sx={{ textAlign: "center", width: "100%" }}>
                    <i
                      className={contactInfo[key].icon}
                      style={styles.icon}
                    ></i>
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
          </Box>
        </Box>
        <IconButton
          sx={styles.scrollButton}
          onClick={() => {
          const nextSection = document.getElementById('hero');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        >
          <ArrowUpwardIcon />
        </IconButton>
        <Footer />
      </Box>
    </section>
  );
};

export default Skills;
