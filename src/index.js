import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import theme from './lib/theme/theme';
import {  ThemeProvider } from '@material-ui/core';
import store from './lib/redux/store';
import { Provider } from 'react-redux';


import {BrowserRouter as Router}  from "react-router-dom";

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
    </Router>
   
  </React.StrictMode>,root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
