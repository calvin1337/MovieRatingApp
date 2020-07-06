import React, { Component } from 'react'
import axios from "axios";
import {Container, Row} from "react-bootstrap"
import Pagination from 'react-bootstrap/Pagination'
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

    pageChange = (e) => {
            let number = ""
            number = e
            this.setState({page: number}, () => {
                this.getMovies()
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
        
                let currentPage = this.state.page - 1
                let lastPage = ""

                lastPage = this.state.page + 18

                if(this.state.page < 1) {
                    currentPage = 1
                }

                if(this.state.page > 496){
                    currentPage = 495
                    
                }
                
                if(this.state.page > 481){
                    lastPage = 500
                    
                }
                

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
                <div style={{paddingTop:"50px", paddingBottom:"50px"}}>
                <Pagination className="justify-content-center">
                    <Pagination.First onClick={(e) => this.pageChange(1)} />
                    <Pagination.Prev onClick={(e) => this.pageChange((currentPage - 1))}/>
                    <Pagination.Item className={this.state.page === 0 ? "active" : null}onClick={(e) => this.pageChange(Number(e.target.innerText) - 1)}>{currentPage}</Pagination.Item>


                    <Pagination.Item className={this.state.page === (currentPage + 1) ? "active" : null}onClick={(e) => this.pageChange(Number(e.target.innerText) )}>{(currentPage + 1)}</Pagination.Item>
                    <Pagination.Item className={this.state.page === (currentPage + 2) ? "active" : null}onClick={(e) => this.pageChange(Number(e.target.innerText) )}>{(currentPage + 2)}</Pagination.Item>
                    <Pagination.Item className={this.state.page === (currentPage + 3) ? "active" : null}onClick={(e) => this.pageChange(Number(e.target.innerText) )}>{(currentPage + 3)}</Pagination.Item>
                    <Pagination.Item className={this.state.page === (currentPage + 4) ? "active" : null}onClick={(e) => this.pageChange(Number(e.target.innerText) )}>{(currentPage + 4)}</Pagination.Item>
        <Pagination.Item className={this.state.page === (currentPage + 19) || lastPage === this.state.page ? "active" : null}onClick={(e) => this.pageChange(Number(e.target.innerText))}>{lastPage}</Pagination.Item>
                    <Pagination.Next onClick={(e) => this.pageChange((currentPage + 1))} />
                    <Pagination.Last onClick={(e) => this.pageChange(500)} />
                </Pagination>
                </div>
                
            </Container>
        )
    }
}

export default MovieList
