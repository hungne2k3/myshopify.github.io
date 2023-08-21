import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './assest/fontawesome-free-6.2.1-web/fontawesome-free-6.2.1-web/css/all.css'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

    <Banner />

    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
