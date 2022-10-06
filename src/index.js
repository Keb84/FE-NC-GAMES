import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { UserProvider } from './contexts/Users';
import { ThemeProvider } from './contexts/Theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ThemeProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
  </UserProvider>
);


