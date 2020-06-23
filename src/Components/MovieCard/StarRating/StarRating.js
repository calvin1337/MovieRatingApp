import React, { Component } from 'react'
import "./StarRating.css";

export class StarRating extends Component {
    render() {
        return (
            <div className="movie-rating">
            <div class="star-ratings-sprite">
                <span style={{width:`${this.props.rating}%`}} class="star-ratings-sprite-rating"></span>
            </div>
            </div>
        )
    }
}

export default StarRating
