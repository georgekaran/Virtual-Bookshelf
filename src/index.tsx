import './styles/styles.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import store from './store/store';
import App from './router/Router'
import { initDataApi } from './util/initData';
import LoadingPulse from './components/Loading/Loading';

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

initDataApi();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <LoadingPulse />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);