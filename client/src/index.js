import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './ind.css'
import Player from './components/Player/Player'
import Admin from './components/Admin/Admin';


import {
  Routes, Route,BrowserRouter
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/player" element={<Player/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </BrowserRouter>

  // </React.StrictMode>
);
