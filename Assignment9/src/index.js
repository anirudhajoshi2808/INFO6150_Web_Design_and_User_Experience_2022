import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Loginpage from './Pages/Loginpage.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Landing/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Loginpage" element={<Loginpage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
