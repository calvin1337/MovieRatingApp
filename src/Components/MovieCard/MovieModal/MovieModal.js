import React, { Component } from 'react'
import "./MovieModal.css"

export class MovieModal extends Component {

    


   
    
    render() {
        
        let movieData = ""

        if(this.props.movie !== ""){
            movieData = 
            (<div className="modal-box">
            <h1>{this.props.movie.title}</h1>
            </div>)
        }

       

        return (
            <div  onClick={(e) => this.props.toggleModal(e)} style={this.props.show === true ? {display:"block"} : null} className="movie-modal">
                    {movieData}
                
            </div>
        )
    }
}

export default MovieModal
