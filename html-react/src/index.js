import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavigationBar/NavBar';
import Article from './components/Article/Article';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Article />
  </React.StrictMode>
);

reportWebVitals();