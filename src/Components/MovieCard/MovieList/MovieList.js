import React, { Component } from 'react'
import {Col} from "react-bootstrap"
import StarRating from "../StarRating/StarRating"

export class MovieList extends Component {
    render() {
        return (
            <Col style={{marginTop:"5px"}} className="col-12">
            <div className="movieList">
                <h2>{`${this.props.title} (${this.props.date})`} </h2>
                <StarRating rating={this.props.rating} />
            </div>
            </Col>
        )
    }
}

export default MovieList
