import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Navbar from './containers/Navbar'

import Routes from './Routes';


const App = () => (
  <BrowserRouter>
    <main>
      <Navbar/>
      <div className="main-container">
        <div className="sidebar col-md-3">
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/stats">Stats Portal</Link></li>
          </ul>
        </div>
        <div className="content col-md-9">
          <div className="row">
            <Routes/>
          </div>
        </div>
      </div>
    </main>
  </BrowserRouter>
);

export default App;
