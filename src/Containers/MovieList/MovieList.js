import React, { Component } from 'react'
import axios from "axios";
import {Container, Row} from "react-bootstrap"
import MovieCard from "../../Components/MovieCard/MovieCard"

export class MovieList extends Component {

    state = {
        page: 1,
        movies: [],
        search: "",
        
    }

    componentDidMount() {
        this.getMovies()
        
    }

    getMovies = () => {
        const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.page}`)
        .then(res => {
            console.log(res)
            let movies = res.data.results
            this.setState({movies: movies})
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

        view = filteredMovie.map(movie => (
                    <MovieCard key={movie.id} watchList={(e) => this.props.watchList(e)} id={movie.id} title={movie.title} date={movie.release_date} image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                ))
        return (
            <Container>
            <div  style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
                    <h1>Movie List</h1> 
                </div>
                <div className="movieContainer pt-50">
                    <Row>
                        
                        {view}

                    </Row>
                </div>
            </Container>
        )
    }
}

export default MovieList
