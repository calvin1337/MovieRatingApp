import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import {Row, Container} from "react-bootstrap"
import MovieCard from "../../Components/MovieCard/MovieCard"
import MovieModal from '../../Components/MovieCard/MovieModal/MovieModal';



import axios from "axios"

export class WatchList extends Component {

    state = {
        movies: [],
        watchList: this.props.watchList,
        
        search: "",
        showModal: false,
        modal: ""
    }

   componentDidMount() {
        this.loadWatchList()
    }

    componentDidUpdate(){
        if(this.state.watchList.length < this.state.movies.length ){
            this.loadWatchList()
        }

        if(this.state.watchList.length === 0 && this.state.movies.length === 1){
            this.loadWatchList()
        }

       console.log(this.state.watchList.length, this.state.movies.length)
    }

   

    loadWatchList = () => {
        if(this.props.watchList.length > 0){
            const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
        let movies = []
        for(var i = 0; i < this.state.watchList.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${this.state.watchList[i]}?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                movies.push({...res.data})
                this.setState({movies: movies})
               
                })
        }
       
            
        
        }
        
        if(this.props.watchList.length === 0){
            let movies = []
            this.setState({movies: movies})
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

    }

    closeBtn = () => {
      this.setState({showModal : !this.state.showModal})
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = "yes";
    }

    loaded = () => {
        this.setState({loaded:true})
        
    }

    

    render() {
        
        let movie = this.state.movies

        let filteredMovie = movie.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        let view = ""

        view = filteredMovie.map(movie => (
            <MovieCard onClick={(e) => this.MovieInfo(e)} type="watch" remove={(e) => this.props.remove(e)} key={movie.id} rating={(movie.vote_average * 10)} id={movie.id} title={movie.title} date={movie.release_date} image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />

            ))
        

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
            </React.Fragment>
        )
    }
}

export default WatchList
