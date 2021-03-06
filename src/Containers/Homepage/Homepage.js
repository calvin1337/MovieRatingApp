import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"
import SearchBar from '../../Components/SearchBar/SearchBar'
import MovieCard from '../../Components/MovieCard/MovieCard'
import MovieList from "../../Components/MovieCard/MovieList/MovieList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faBars, faFilm} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import MovieModal from '../../Components/MovieCard/MovieModal/MovieModal';




export class Homepage extends Component {

    state = {
        mounted: false,
        search: "",
        view: "grid",
        sort: "",
        movies: [],
        loaded: false,
        showModal: false,
        modal: ""
    }

    componentDidMount(){
        this.setState({mounted: true}, () => {
            this.loadMovies()
        })
        
    }

    componentWillUnmount(){
        this.setState({mounted:false})
    }

    loadMovies = () =>{
        if(this.state.mounted){
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
            
            if(this.state.sort === "release-date-old"){
                filteredMovie.sort((a, b) => (a.release > b.release ? 1 : -1))
            }

            if(this.state.sort === "release-date-new"){
                filteredMovie.sort((a, b) => (b.release > a.release ? 1 : -1))
            }

            if(this.state.sort === "First Time"){
                let FirstTime = []
                for(let i = 0; i < filteredMovie.length; i++){
                    if(filteredMovie[i].seen === false){
                        FirstTime.push(filteredMovie[i])
                    }
                }
                filteredMovie = FirstTime
            }

            if(this.state.sort === "Seen Before"){
                let SeenBefore = []
                for(let i = 0; i < filteredMovie.length; i++){
                    if(filteredMovie[i].seen === true){
                        SeenBefore.push(filteredMovie[i])
                    }
                }
                filteredMovie = SeenBefore
            }

            let view = ""

            if(this.state.view === "grid"){
               view = filteredMovie.map(movie => (
                    <MovieCard watchedDate={movie.date} seen={movie.seen} type="rating" key={movie.id}  onClick={(e) => this.MovieInfo(e)} id={movie.id} title={movie.title} date={movie.release} image={movie.image} rating={movie.rating}  />
                ))
            }

            if(this.state.view === "list"){
                view = filteredMovie.map(movie => (
                    <MovieList seen={movie.seen} width={"sameWidth"} type="rating" key={movie.id}  onClick={(e) => this.MovieInfo(e)} id={movie.id} title={movie.title} date={movie.release} image={movie.image} rating={movie.rating}  />
                ))
            }
            

        return (
           
                <React.Fragment>
                <header  style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
                    <h1>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} />  </h1> 
                    <p>Movies I've watch and rated since lockdown</p>
                </header>
                <Container>
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
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Low rating">Lowest rating</option>
                    <option value="High rating">Highest rating</option>
                    <option value="First Time">First Time Watching </option>
                    <option value="Seen Before">Seen Before </option> 
                    <option value="release-date-new">Release date {"(new - old)"}</option>
                    <option value="release-date-old">Release date {"(old - new)"}</option>                
                </select>
                </label>
                </div>
                </div>
                
                <div className="movieContainer pt-50">
                    <Row>
                        
                        {view}

                    </Row>
                </div>
                <MovieModal closeBtn={() => this.closeBtn()} toggleModal={(e) => this.toggleModal(e)} movie={this.state.modal} show={this.state.showModal}/>
            </Container>
            </React.Fragment>
            
        )
    }
}

export default Homepage
