import React, { Component } from 'react'
import "./StarRating.css";

export class StarRating extends Component {
    render() {
        return (
            <div className="movie-rating">
            <div className="star-ratings-sprite">
                <span style={{width:`${this.props.rating}%`}} className="star-ratings-sprite-rating"></span>
            </div>
            </div>
        )
    }
}

export default StarRating
