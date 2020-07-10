import React, { Component } from 'react'
import "./MovieModal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons';

export class MovieModal extends Component {

    


   
    
    render() {
        
        let movieImage = ""
        let movieTitle = ""
        let movieRelease = ""
        let rating = ""
        let imbd = ""
        
        let disc = ""

        if(this.props.movie !== ""){
            movieImage = this.props.movie.image
            movieTitle = this.props.movie.title
            movieRelease = this.props.movie.release
            rating = (this.props.movie.rating / 10 )
            imbd = (this.props.movie.imbd / 10 )
            
            disc = this.props.movie.disc
        }

        if(this.props.tmbd === "true"){
            movieImage = `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`
            movieTitle = this.props.movie.title
            rating = "N/A"
            movieRelease = this.props.movie.release_date
            imbd = this.props.movie.vote_average
            
            disc = this.props.movie.overview
        }

       

        return (
            <div  onClick={(e) => this.props.toggleModal(e)} id={this.props.show === true ? "show" : null} className="movie-modal">
                    <div className="modal-box">
                    <div className="MovieModalImage"><img src={movieImage} alt="Movie Poster" /></div>
                    <div className="MovieModalInfo">
                    <button className="closeBtn" id="close">
                     <FontAwesomeIcon onClick={() => this.props.closeBtn()}  icon={faTimes} size="1x"/> </button>
                    <h1>{movieTitle}</h1>
                            <h6>{movieRelease}</h6>
                            <p>{disc}</p>
                            <div className="modalRating">
                            <h5><strong>My Rating: </strong>{rating} / 10</h5>
                            <h5><strong>IMBD Rating: </strong>{imbd} / 10 </h5> 
                            </div>
                            
                            
                            
                    </div>
                    </div>
                    
                
            </div>
        )
    }
}

export default MovieModal
