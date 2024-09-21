import React from 'react';
import { Box, Avatar, Typography, Link, List, ListItem, ListItemText, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ProfilePic from '../assets/img/profile-img1.jpg';

const styles = {
  sidebar: {
    width: 250,
    height: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 2,
    position: 'fixed',
    top: 0,
    left: 0,
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 2,
  },
  name: {
    marginBottom: 2,
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 2,
  },
  socialLink: {
    marginRight: 1,
  },
  divider: {
    width: '100%',
    marginBottom: 2,
  },
};

const Sidebar = () => {
  return (
    <Box sx={styles.sidebar}>
      <Avatar alt="Santosh Patra" src={ProfilePic} sx={styles.avatar} />
      <Typography variant="h6" component="div" sx={styles.name}>
        Santosh Patra
      </Typography>
      <Box sx={styles.socialLinks}>
        <Link href="https://www.linkedin.com/in/santosh-patra-909131131/" color="inherit" sx={styles.socialLink}>
          <LinkedInIcon />
        </Link>
        <Link href="https://www.instagram.com/_santoshkumarp/" color="inherit">
          <InstagramIcon />
        </Link>
      </Box>
      <Divider sx={styles.divider} />
      <List component="nav">
        <ListItem button component="a" href="#about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component="a" href="#projects">
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component="a" href="#contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;