import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Garden from './components/Garden/Garden';
import PlantDetails from './components/PlantDetails/PlantDetails';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your garden!</h1>
      </header>
      <Route exact path="/" component={Garden} />
      <Route path="/plant/:id" component={PlantDetails} />
    </div>
  </Router>
);

export default App;
