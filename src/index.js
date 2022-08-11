import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import App from './App';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    mode: 'light',
    primary: { main: '#007136', contrastText: '#ffffff' },
    secondary: { main: '#568721', contrastText: '#ffffff' },
    error: { main: '#D32F2F' },
    info: { main: '#ffffff', contrastText: '#007136' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

const renderApp = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  );
}
renderApp();
