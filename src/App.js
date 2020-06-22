import React from 'react';
import "./App.css"
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
      <Navigation />
      </Router>
    </div>
  );
}

export default App;
