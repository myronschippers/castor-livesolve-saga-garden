import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Garden from './components/Garden/Garden';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your garden!</h1>
      </header>
      <Route exact path="/" component={Garden} />
    </div>
  </Router>
);

export default App;
