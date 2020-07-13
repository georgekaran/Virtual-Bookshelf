import './index.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import App from './router/Router'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#713BDB',
    },
    secondary: {
      main: '#fff',
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);