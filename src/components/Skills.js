import React from 'react';
import { Box, Typography, LinearProgress, Grid } from '@mui/material';

const skills = [
  { name: 'JavaScript', value: 75 },
  { name: 'Reactjs', value: 75 },
  { name: 'Nodejs', value: 75 },
  { name: 'Core Java', value: 60 },
  { name: 'HTML', value: 80 },
  { name: 'CSS', value: 80 },
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
  skillBox: {
    marginBottom: '1rem',
  },
  skillName: {
    fontWeight: 'bold',
    color: '#444',
  },
  progressBar: {
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#ff5722',
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills section-bg">
      <Box className="container" sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>Skills</Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={styles.skillBox}>
                <Typography variant="body1" sx={styles.skillName}>{skill.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={styles.progressBar}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Skills;