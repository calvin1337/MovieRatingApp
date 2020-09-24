import React, { Component } from 'react'
import { Col } from "react-bootstrap"
import StarRating from './StarRating/StarRating'
import WatchedBefore from "./WatchedBefore"
import "./MovieCard.css";

export class MovieCard extends Component {
    
    render() {
        let type = ""
        let dateRelease = ""
        let date = this.props.date
        dateRelease = date.split("-").reverse().join("/")
        
        if(this.props.type === "rating"){
        type = (
            <div>
            <StarRating rating={this.props.rating}/>
            <WatchedBefore seen={this.props.seen}/>
            
            </div>)
          
        } if(this.props.type === "watchList") {
            type = <button className="btn btn-secondary" onClick={(e) => this.props.watchList(this.props.id)}>Add To Watch List</button>
        } if(this.props.type === "watch") {
            type = (
            <div style={{display:"flex", flexDirection:"column"}}>
                <StarRating  rating={this.props.rating}/>
                <button onClick={(e) => this.props.watched(this.props.id)}  style={{marginTop:"10px"}} className="btn btn-secondary">Watched</button>
                <button onClick={(e) => this.props.remove(this.props.id)} style={{marginTop:"10px"}} className="btn btn-danger">Remove</button>
            </div>
                
            )
        }

        

        return (
            <Col md="6" lg="4" sm="6" xs="12" style={{marginTop:"10px"}}>
                 <div className="movie-card">
                    <div className="movie-header">
                        <img onClick={(e) => this.props.onClick(this.props.id)} src={this.props.image} alt="" />
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                        <h2>{this.props.title} </h2>
                        <h4>Release: {dateRelease}</h4>
                        <h4>Watched: {this.props.watchedDate}</h4>
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
