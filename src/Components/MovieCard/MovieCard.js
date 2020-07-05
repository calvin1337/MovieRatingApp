import React, { Component } from 'react'
import { Col } from "react-bootstrap"
import StarRating from './StarRating/StarRating'
// import MovieTags from './MovieTags/MovieTags'
import "./MovieCard.css";

export class MovieCard extends Component {
    
    render() {
        let type = ""
        if(this.props.type === "rating"){
        type = <StarRating rating={this.props.rating}/>
        } else type = <button className="btn btn-secondary" onClick={(e) => this.props.watchList(this.props.id)}>Add To Watch List</button>

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
                        
                        {type}
                        
                    </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default MovieCard
