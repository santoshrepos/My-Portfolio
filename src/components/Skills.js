import React from 'react';
import { Box, Typography, CircularProgress, Grid, useTheme } from '@mui/material';

const skills = [
  { name: 'JavaScript', value: 80 },
  { name: 'Reactjs', value: 80 },
  { name: 'HTML', value: 80 },
  { name: 'CSS', value: 80 },
  { name: 'Nodejs', value: 75 },
  { name: 'Core Java', value: 50 },
  { name: 'Django', value: 50 },
];

const skillColors = [
  '#00796b', // Teal
  '#ff9800', // Amber
  '#00acc1', // Cyan
  '#ff5722', // Deep Orange
  '#8e24aa', // Purple
  '#d32f2f', // Red
  '#388e3c', // Green
];

const Skills = () => {
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
      textAlign: 'center', // Center the title
    },
    skillBox: {
      marginBottom: '1rem',
      textAlign: 'center', // Center the skill box content
    },
    skillName: {
      fontWeight: 'bold',
      color: theme.palette.text.primary,
      marginBottom: '0.5rem',
    },
    circularProgress: {
      position: 'relative',
      display: 'inline-flex',
    },
    circularProgressText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
  };

  return (
    <section id="skills" className="skills section-bg">
      <Box className="container" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>Skills</Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={styles.skillBox}>
                <Typography variant="body1" sx={styles.skillName}>{skill.name}</Typography>
                <Box sx={styles.circularProgress}>
                  <CircularProgress
                    variant="determinate"
                    value={skill.value}
                    size={100}
                    thickness={4}
                    sx={{ color: skillColors[index % skillColors.length] }}
                  />
                  <Typography variant="caption" component="div" sx={styles.circularProgressText}>
                    {`${skill.value}%`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Skills;