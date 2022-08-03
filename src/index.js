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
    primary: { main: '#D32F2F', contrastText: '#ffffff' },
    secondary: { main: '#081A4B', contrastText: '#ffffff' },
    error: { main: '#D32F2F' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
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
