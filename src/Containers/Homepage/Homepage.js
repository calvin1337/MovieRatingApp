import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"
import SearchBar from '../../Components/SearchBar/SearchBar'
import MovieCard from '../../Components/MovieCard/MovieCard'
import MovieData from "../../MovieData";

export class Homepage extends Component {
    render() {

        return (

            <Container>
                <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                    <h1>Calvin's Movie Ratings</h1>
                </div>
                <SearchBar />
                <div className="movieContainer pt-50">
                    <Row>
                        
                        {
                            MovieData.map(movie => (
                                <MovieCard title={movie.title} date={movie.release} image={movie.image} rating={movie.rating} tags={movie.tags} />
                            ))
                        }

                    </Row>
                </div>
            </Container>
        )
    }
}

export default Homepage
