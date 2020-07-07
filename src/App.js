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

    removeMovie = (id) => {
      let newArr = this.state.watchlist
      for (var i = newArr.length - 1; i >= 0; --i) {
        if (newArr[i] === id) {
            newArr.splice(i,1);
            this.setState({watchlist: newArr})
        }
    }
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
          
          <WatchList remove={(e) => this.removeMovie(e)} watchList={this.state.watchlist} />
          
        
         )} />
        </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
