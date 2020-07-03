import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navigation from './Components/Navigation/Navigation';
import Homepage from "./Containers/Homepage/Homepage"
import About from "./Containers/About/About"
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
       <Route path="/about" exact render={props => (
        
        <About />
        
      
       )} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
