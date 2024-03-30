import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3F51B5'
    },
    secondary: {
      main: '#FFA500'
    },
    success: {
      main: '#4254F4'
    },
    info: {
      main: '#9ACD32'
    },
    background: {
      default: '#FBF8FF',
      paper: 'white'
    },
    error: {
      main: '#FF5449'
    }
  },
  typography: {
    fontFamily: [
      'Noto Sans KR',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue'
    ].join(','),
    fontSize: 16
  }
});

export default theme;
