import React from 'react';
import { Box, Avatar, Typography, Link, List, ListItem, ListItemText, Divider, IconButton, Switch } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ProfilePic from '../assets/img/profile-img1.jpg';

const useStyles = (isOpen) => ({
  sidebar: {
    width: isOpen ? 250 : 60,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 2,
    position: 'fixed',
    top: 0,
    left: 0,
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    transition: 'width 0.3s',
  },
  avatar: {
    width: isOpen ? 100 : 40,
    height: isOpen ? 100 : 40,
    marginBottom: 2,
  },
  socialLinks: {
    display: 'flex',
    flexDirection: isOpen ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  socialLink: {
    margin: 1,
  },
  divider: {
    width: '100%',
    marginBottom: 2,
  },
  menuButton: {
    alignSelf: 'flex-start',
    marginBottom: 2,
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: isOpen ? 1 : 0,
    justifyContent: 'center',
  },
  themeSwitch: {
    marginTop: 'auto',
    marginBottom: 2,
  },
});

const Sidebar = ({ isOpen, toggleSidebar, toggleTheme, isDarkMode }) => {
  const styles = useStyles(isOpen);

  return (
    <Box sx={styles.sidebar}>
      <IconButton onClick={toggleSidebar} sx={styles.menuButton}>
        <MenuIcon />
      </IconButton>
      <Avatar alt="Santosh Patra" src={ProfilePic} sx={styles.avatar} />
      {isOpen && (
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
          Santosh Patra
        </Typography>
      )}
      <Box sx={styles.socialLinks}>
        <Link href="https://www.linkedin.com/in/santosh-patra-909131131/" color="inherit" sx={styles.socialLink}>
          <LinkedInIcon />
        </Link>
        <Link href="https://www.instagram.com/_santoshkumarp/" color="inherit" sx={styles.socialLink}>
          <InstagramIcon />
        </Link>
      </Box>
      <Divider sx={styles.divider} />
      <List component="nav">
        <ListItem button component="a" href="#about">
          <PersonOutlineIcon sx={styles.listItemIcon} />
          {isOpen && <ListItemText primary="About" />}
        </ListItem>
        <ListItem button component="a" href="#projects">
          <WorkOutlineIcon sx={styles.listItemIcon} />
          {isOpen && <ListItemText primary="Projects" />}
        </ListItem>
        <ListItem button component="a" href="#contact">
          <ContactMailOutlinedIcon sx={styles.listItemIcon} />
          {isOpen && <ListItemText primary="Contact" />}
        </ListItem>
      </List>
      <Box sx={styles.themeSwitch}>
        <Typography variant="body2" component="div">
          {isOpen ? 'Dark Mode' : 'DM'}
        </Typography>
        <Switch checked={isDarkMode} onChange={toggleTheme} />
      </Box>
    </Box>
  );
};

export default Sidebar;