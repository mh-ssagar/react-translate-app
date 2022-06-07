import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Config from "./Config";

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );

// const root = createRoot(document.getElementById('root')); 
// root.render(<App />);


