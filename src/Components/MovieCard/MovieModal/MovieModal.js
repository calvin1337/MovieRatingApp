import React, { Component } from 'react'
import "./MovieModal.css"

export class MovieModal extends Component {

    


   
    
    render() {
        
        let movieImage = ""
        let movieTitle = ""
        let movieRelease = ""

        if(this.props.movie !== ""){
            movieImage = this.props.movie.image
            movieTitle = this.props.movie.title
            movieRelease = this.props.movie.release
        }

       

        return (
            <div  onClick={(e) => this.props.toggleModal(e)} style={this.props.show === true ? {display:"block"} : null} className="movie-modal">
                    <div className="modal-box">
                    <div class="MovieModalImage"><img src={movieImage} alt="Movie Poster" /></div>
                    <div class="MovieModalInfo">
                    <h1>{movieTitle}</h1>
                    <h6>{movieRelease} | Action / Thriller | 1h 23m</h6>
                    </div>
                    </div>
                    
                
            </div>
        )
    }
}

export default MovieModal
