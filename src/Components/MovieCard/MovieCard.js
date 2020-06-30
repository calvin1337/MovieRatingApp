import React, { Component } from 'react'
import { Col } from "react-bootstrap"
import StarRating from './StarRating/StarRating'
// import MovieTags from './MovieTags/MovieTags'
import "./MovieCard.css";

export class MovieCard extends Component {
    render() {
        return (
            <Col md="6" lg="4" sm="6" xs="12" style={{marginTop:"10px"}}>
                 <div className="movie-card">
                    <div className="movie-header">
                        <img onClick={(e) => this.props.onClick(this.props.id)} src={this.props.image} alt="" />
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                        <h2>{`${this.props.title} (${this.props.date})`} </h2>
                    </div>
                    <div className="movie-info">
                        <StarRating rating={this.props.rating}/>
                        <div className="movie-tags">
                       
                        </div>
                        
                    </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default MovieCard
