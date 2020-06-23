import React from 'react';
import "./App.css"
import Navigation from './Components/Navigation/Navigation';
import Homepage from "./Containers/Homepage/Homepage"; 
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
      <Navigation />
      <Switch>
      <Route path="/" exact render={props => (
        
        <Homepage />
        
      
       )} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
