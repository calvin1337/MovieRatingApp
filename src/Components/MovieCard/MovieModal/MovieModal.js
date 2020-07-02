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

        if(this.props.movie !== ""){
            movieImage = this.props.movie.image
            movieTitle = this.props.movie.title
            movieRelease = this.props.movie.release
            rating = (this.props.movie.rating / 10 )
        }

       

        return (
            <div  onClick={(e) => this.props.toggleModal(e)} id={this.props.show === true ? "show" : null} className="movie-modal">
                    <div className="modal-box">
                    <div class="MovieModalImage"><img src={movieImage} alt="Movie Poster" /></div>
                    <div class="MovieModalInfo">
                    <button className="closeBtn" id="close">
                     <FontAwesomeIcon onClick={() => this.props.closeBtn()}  icon={faTimes} size="1x"/> </button>
                    <h1>{movieTitle}</h1>
                    <h6>{movieRelease} | 1h 23m</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt et aliquam quaerat nisi minima similique voluptas, pariatur tempore fugiat repellendus saepe provident iusto quam deleniti esse repudiandae voluptates exercitationem natus! Totam ipsam et illo dolore nemo officia dicta blanditiis?</p>
                    <h5>IMBD Rating: </h5>
                             <h5>My Rating: {rating} / 10</h5>
                    </div>
                    </div>
                    
                
            </div>
        )
    }
}

export default MovieModal
