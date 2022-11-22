import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import App from './App';
import i18n from "./constants/LangConfig";

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    mode: 'light',
    primary: { main: '#273E34', contrastText: '#ffffff' },
    secondary: { main: '#607F5C', contrastText: '#ffffff' },
    error: { main: '#AF4141' },
    info: { main: '#ffffff', contrastText: '#273E34' },
    bar: {main: '#A9C3A7', contrastText: '#273E34'},
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
