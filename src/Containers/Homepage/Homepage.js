import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"
import SearchBar from '../../Components/SearchBar/SearchBar'
import MovieCard from '../../Components/MovieCard/MovieCard'
import MovieList from "../../Components/MovieCard/MovieList/MovieList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faBars} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import MovieModal from '../../Components/MovieCard/MovieModal/MovieModal'

export class Homepage extends Component {

    state = {
        search: "",
        view: "grid",
        sort: "",
        movies: [],
        loaded: false,
        showModal: false,
        modal: ""
    }

    componentDidMount(){
        this.loadMovies()
    }

    loadMovies = () =>{
        axios.get("https://movieapp-aa3df.firebaseio.com/movies.json")
        .then(res => {
            const movies = [];
            for(let key in res.data){
                movies.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({movies: movies}, () => {
                this.loaded()
            })
            

        })

    }
            
        loaded = () => {
            this.setState({loaded:true})
        }
    


    updateSearch = (e) => {
        this.setState({search: e.target.value})
    }

    changeView = (e) => {
        let view = e
        this.setState({view: view})
    }

    sortChange = (e) => {
        this.setState({sort: e.target.value})
    }

     strip = (title) => {
        return title.replace(/^(a|the|an)\s/i, "");
      }

      MovieInfo = (e) => {
          console.log(e)
        
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

      }

      toggleModal = (e) => {
        if(e.target.className === "movie-modal"){
            this.setState({showModal : !this.state.showModal})
             
         }
      }

    render() {
            let movie = this.state.movies

            let filteredMovie = movie.filter(
                (movie) => {
                    return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            )

            
            if(!isNaN(this.state.search) && this.state.loaded === true){
                filteredMovie = movie.filter(
                    (movie) => {
                        return movie.release.indexOf(this.state.search) !== -1;
                    }
                )
            }

            if(this.state.sort === "Low rating"){
                filteredMovie.sort((a, b) => (a.rating > b.rating ? 1 : -1))
            }

            if(this.state.sort === "High rating"){
                filteredMovie.sort((a, b) => (b.rating > a.rating ? 1 : -1))
            }

            if(this.state.sort === "A-Z"){
                filteredMovie.sort((a, b) => (this.strip(a.title) > this.strip(b.title) ? 1 : -1))
            }

            if(this.state.sort === "Z-A"){
                filteredMovie.sort((a, b) => (this.strip(b.title) > this.strip(a.title) ? 1 : -1))
            }
        
            let view = ""

            if(this.state.view === "grid"){
               view = filteredMovie.map(movie => (
                    <MovieCard onClick={(e) => this.MovieInfo(e)} id={movie.id} title={movie.title} date={movie.release} image={movie.image} rating={movie.rating}  />
                ))
            }

            if(this.state.view === "list"){
                view = filteredMovie.map(movie => (
                    <MovieList title={movie.title} date={movie.release} image={movie.image} rating={movie.rating}  />
                ))
            }
            

        return (
           
            <Container>
                <div  style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
                    <h1>Calvin's Movie Ratings  </h1> 
                </div>
                <SearchBar updateSearch={(e) => this.updateSearch(e)} />
                <div className="TypeContainer">
                
                <div className="viewTypeContaner">

                    <button className={this.state.view === "grid" ? "active" : null} onClick={(e) => this.changeView("grid")}>
                    <FontAwesomeIcon icon={faTh} />
                    </button>
                    <button className={this.state.view === "list" ? "active" : null} onClick={(e) => this.changeView("list")}>
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                    
                </div>
                <div className="sortContainer">
                    <label>
                <select onChange={(e) => this.sortChange(e)} id="rating-filter">
                    <option value="">Sort</option>
                    <option value="Low rating">Low rating</option>
                    <option value="High rating">High ratings</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                </label>
                </div>
                </div>
                
                <div className="movieContainer pt-50">
                    <Row>
                        
                        {view}

                    </Row>
                </div>
                <MovieModal toggleModal={(e) => this.toggleModal(e)} movie={this.state.modal} show={this.state.showModal}/>
            </Container>
            
            
        )
    }
}

export default Homepage
