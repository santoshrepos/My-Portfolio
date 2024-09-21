import React from 'react';
import { Box, Avatar, Typography, Link, List, ListItem, ListItemText, Divider, IconButton, Switch, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ProfilePic from '../assets/img/profile-img1.jpg';

const listItems = [
  { href: '#about', icon: <PersonOutlineIcon />, text: 'About' },
  // { href: '#projects', icon: <WorkOutlineIcon />, text: 'Projects' },
  { href: '#contact', icon: <ContactMailOutlinedIcon />, text: 'Contact' },
];

const useStyles = (isOpen, theme) => ({
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
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
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
    color: theme.palette.secondary.main,
  },
  divider: {
    width: '100%',
    marginBottom: 2,
    backgroundColor: theme.palette.divider,
  },
  menuButton: {
    alignSelf: 'center', // Center horizontally
    marginBottom: 2,
    color: theme.palette.primary.main,
  },
  listItemIcon: {
    minWidth: 0,
    marginRight: isOpen ? 1 : 0,
    justifyContent: 'center',
    color: theme.palette.primary.main,
  },
  listItem: {
    justifyContent: isOpen ? 'flex-start' : 'center', // Center list items when closed
    color: theme.palette.text.primary,
  },
  themeSwitch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    marginTop: 'auto',
    marginBottom: 2,
    color: theme.palette.text.primary,
  },
});

const Sidebar = ({ isOpen, toggleSidebar, toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  const styles = useStyles(isOpen, theme);

  return (
    <Box sx={styles.sidebar}>
      <IconButton onClick={toggleSidebar} sx={styles.menuButton}>
        {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
        {listItems.map((item, index) => (
          <ListItem button component="a" href={item.href} sx={styles.listItem} key={index}>
            {React.cloneElement(item.icon, { sx: styles.listItemIcon })}
            {isOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
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