import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navigation from './Components/Navigation/Navigation';
import Homepage from "./Containers/Homepage/Homepage"
import About from "./Containers/About/About"
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import MovieList from './Containers/MovieList/MovieList';
import WatchList from './Containers/WatchList/WatchList';



class App extends Component{

  state = {
    watchlist: []
  }

  addMovieWatchList = (e) => {
        this.state.watchlist.push(e)
    }

  render(){
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
        <Route path="/movielist" exact render={props => (
          
          <MovieList watchList={(e) => this.addMovieWatchList(e)}/>
          
        
         )} />

        <Route path="/watchlist" exact render={props => (
          
          <WatchList watchList={this.state.watchlist} />
          
        
         )} />
        </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
