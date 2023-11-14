import { createTheme } from '@mui/material/styles';

const primary = {
  dark: '#040D42',
  main: '#560293',
  light: '#8933D3'
};

export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  successful: '#03BB50',
  primary
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary,
    background: {
      default: '#051444',
      paper: '#051444'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      '"Inter"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Poppins"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

export default theme;
