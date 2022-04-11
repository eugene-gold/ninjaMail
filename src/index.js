import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import reportWebVitals from './reportWebVitals';
import Intro from './components/intro/Intro'
import Video from './components/video/Video';
import Cards from './components/cards/Cards';
import Member from './components/member/Member';
import Brands from './components/brands/Brands';
import Start from './components/start/Start';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Video />
    <Cards />
    <Member />
    <Brands />
    <Start />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
