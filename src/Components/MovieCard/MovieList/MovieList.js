import React, { Component } from 'react'
import {Col} from "react-bootstrap"
import StarRating from "../StarRating/StarRating"
import WatchedBefore from '../WatchedBefore'

export class MovieList extends Component {
    render() {
        return (
            <Col style={{marginTop:"5px"}} className="col-12">
            <div onClick={(e) => this.props.onClick(this.props.id)} className="movieList">
                <h2 style={{width:"70%"}}  >{this.props.title}</h2>
                <WatchedBefore width={this.props.width} seen={this.props.seen}/>
                <StarRating rating={this.props.rating} />
            </div>
            </Col>
        )
    }
}

export default MovieList
