import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SlideBar from './Components/SlideBar';
import Rotas from './Routes/Rotas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <SlideBar />
        <div className="content">
          <Rotas />
        </div>
      </div>
    </Router>
  );
}

export default App;
