import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00796b', // Teal
    },
    secondary: {
      main: '#ff9800', // Amber
    },
    background: {
      default: '#ffffff', // White
      paper: '#f4f4f4', // Light grey
    },
    text: {
      primary: '#333333', // Dark grey
      secondary: '#666666', // Medium grey
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00acc1', // Cyan
    },
    secondary: {
      main: '#ff5722', // Deep Orange
    },
    background: {
      default: '#121212', // Dark grey
      paper: '#1e1e1e', // Slightly lighter dark grey
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#bbbbbb', // Light grey
    },
  },
});