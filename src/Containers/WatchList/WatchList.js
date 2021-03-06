import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import {Row, Container} from "react-bootstrap"
import MovieCard from "../../Components/MovieCard/MovieCard"
import MovieModal from '../../Components/MovieCard/MovieModal/MovieModal';
import WatchedModal from "../../Components/MovieCard/WatchedModal/WatchedModal"
import Spinner from "../../Components/Spinner/Spinner"

import axios from "axios"

export class WatchList extends Component {

    state = {
        movies: [],
        watchList: this.props.watchList,
        search: "",
        showModal: false,
        modal: "",
        showForm: false,
        form: "",
        loaded: this.props.loaded
    }

    
    
   componentDidMount() {
    this.props.getWatchList()
    this.loadWatchList()
    
        
    }

    componentDidUpdate(){
        
        if(this.state.watchList.length < this.state.movies.length ){
            
            this.loadWatchList()
        }

        if(this.state.watchList.length === 0 && this.state.movies.length === 1){
            
            this.loadWatchList()
        }

        if(this.state.watchList.length === 0 && this.state.movies.length === 0){
            
            this.props.getWatchList()
            
        }

        if(this.state.watchList.length !== this.props.watchList.length){
            
            this.setState({watchList: this.props.watchList}, () => {
                this.loadWatchList()
            })
        }
    }

   

    loadWatchList = () => {
        
        if(this.props.watchList.length > 0){
            const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
        let movies = []
        for(var i = 0; i < this.state.watchList.length; i++){
            let keym = this.state.watchList[i].key
            axios.get(`https://api.themoviedb.org/3/movie/${this.state.watchList[i].id}?api_key=${API_KEY}&language=en-US`)
            
            .then(res => {
                movies.push({...res.data, key: keym})
                this.setState({movies: movies})
               
                })
        }
        
            
        
        }
        
        if(this.props.watchList.length === 0){
            let movies = []
            this.setState({movies: movies}, () => {
                this.loaded()
            })
        }
    }

    MovieInfo = (e) => {
         
        
        let movie = this.state.movies

        // eslint-disable-next-line array-callback-return
        movie.map(movie => {
          if(e === movie.id){
            return(
              this.setState({modal: movie}, () => {
                  this.setState({showModal: true})
              })
            ) 

          }

      })
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no";
    }

    toggleModal = (e) => {
      if(e.target.className === "movie-modal"){
          this.setState({showModal : !this.state.showModal})
          document.documentElement.style.overflow = 'scroll';
          document.body.scroll = "yes";
       }

       if(e.target.className === "watched-modal"){
        this.setState({showForm : !this.state.showForm})
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
     }

     

    }
    submitRating = (rating, id, key, seen) => {
        
        let data = {

        }

        let movie = this.state.movies

        let month = new Date(); 
        month = month.getMonth()
        month = month + 1

        let day = new Date();
        day = day.getDate();

        let year = new Date();
        year = year.getFullYear();

        let date = `${day}/${month}/${year}`

        // eslint-disable-next-line array-callback-return
        movie.map(movie => {
          if(id === movie.id){
            return(
              data = {
                  title: movie.title,
                  release: movie.release_date,
                  image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  id: id,
                  rating: (rating * 10),
                  imbd: (movie.vote_average * 10),
                  disc: movie.overview,
                  seen: seen,
                  date: date
              }
            ) 

          }

      })
        axios.post("https://movieapp-aa3df.firebaseio.com/movies.json", data)
        .then( response => {
            this.setState({showForm : !this.state.showForm}, () => {
                this.props.remove(key, id)
                this.confirmPost(data.title)
            })
            
        });
    }

    confirmPost = (title) => {
        alert(`Added ${title} To Watchlist!`)
    }

    closeBtn = () => {
      this.setState({showModal : !this.state.showModal})
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = "yes";
    }

    loaded = () => {
        
        
        
    }

    toggleForm = (id) => {
        let movie = this.state.movies

        // eslint-disable-next-line array-callback-return
        movie.map(movie => {
            console.log(movie.id, id)
          if(id === movie.id){
            return(
              this.setState({form: movie}, () => {
                  this.setState({showForm: true})
              })
            ) 

          }

      })
        
    }
    

    render() {
        
        let movie = this.state.movies

        let filteredMovie = movie.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        let view = ""
        if(this.props.loaded === false){
            view = <Spinner />
        }
        

        if(this.props.loaded === true && this.props.watchList.length === 0){
            view = <div style={{margin:"auto"}}><h1 style={{textAlign:"center"}}>No data!</h1> <h1>Add movies from the movie list</h1></div>  
        }

                    
        
        if(this.state.movies.length === this.props.watchList.length && this.props.watchList.length > 0){
            view = filteredMovie.map(movie => (
                <MovieCard 
                onClick={(e) => this.MovieInfo(e)} 
                type="watch" 
                watched={(id) => this.toggleForm(id)} 
                remove={(key, id) => this.props.remove(movie.key, movie.id)} 
                key={movie.key} 
                rating={(movie.vote_average * 10)} 
                id={movie.id} 
                title={movie.title} date={movie.release_date} 
                
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                />
    
                ))
        }
        
        
            

            
        return (
            <React.Fragment>
            
            <header  style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
            <h1>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} />  </h1> 
            <p>These are some movies I plan on watching soon!</p>
            </header>
            <Container>
            <div className="movieContainer pt-50">
                    <Row>
                        
                        {view}

                    </Row>
                </div>
            </Container>
            <MovieModal tmbd="true" closeBtn={() => this.closeBtn()} toggleModal={(e) => this.toggleModal(e)} movie={this.state.modal} show={this.state.showModal}/>
            <WatchedModal movie={this.state.form} submitForm={this.submitRating} toggleModal={(e) => this.toggleModal(e)} showForm={this.state.showForm} />
            </React.Fragment>
        )
    }
}

export default WatchList
