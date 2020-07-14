import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navigation from './Components/Navigation/Navigation';
import Homepage from "./Containers/Homepage/Homepage"
import About from "./Containers/About/About"
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import MovieList from './Containers/MovieList/MovieList';
import WatchList from './Containers/WatchList/WatchList';
import axios from "axios"


class App extends Component{

  state = {
    watchlist: [],
    loaded: false
  }

  getWatchList = () => {
    axios.get("https://movieapp-aa3df.firebaseio.com/watchList.json")
    .then(res => {
      
      let watchList = []
      for(let key in res.data){
      watchList.push({id: res.data[key].id, key: key})
        console.log(watchList)
      }
      this.setState({watchlist: watchList}, () =>{
        this.setState({loaded:true})
      })
    })
  }

  addMovieWatchList = (id) => {
          
        let data = {
          id: id
  }

  axios.post("https://movieapp-aa3df.firebaseio.com/watchList.json" , data)
  .then(res => console.log(id))
    }

    removeMovie = (key, id) => {
      
      
    axios.delete(`https://movieapp-aa3df.firebaseio.com/watchList/${key}.json`)
    .then(res => this.setState({ watchlist:[...this.state.watchlist.filter
        (movie => movie.id !== id)]})) 
  }


  watched = (id, rating) => {
    console.log(id, rating)
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

        <Route path="/Reviews" exact render={props => (
          
          <header style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
              <h1>Coming soon!</h1>
          </header>
          
        
         )} />

        <Route path="/watchlist" exact render={props => (
          
          <WatchList loaded={this.state.loaded} getWatchList={this.getWatchList} watched={(x, i) => this.watched(x, i)} remove={(key, id) => this.removeMovie(key, id)} watchList={this.state.watchlist} />
          
        
         )} />
        </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
