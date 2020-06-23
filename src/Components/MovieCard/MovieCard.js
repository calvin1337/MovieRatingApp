import React, { Component } from 'react'
import { Col } from "react-bootstrap"
import StarRating from './StarRating/StarRating'
import MovieTags from './MovieTags/MovieTags'
import "./MovieCard.css";

export class MovieCard extends Component {
    render() {
        return (
            <Col md="4">
                 <div className="movie-card">
                    <div className="movie-header">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg" alt="" />
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                        <h2>Iron Man (2008)</h2>
                    </div>
                    <div className="movie-info">
                        <StarRating rating="100"/>
                        <MovieTags />
                    </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default MovieCard
