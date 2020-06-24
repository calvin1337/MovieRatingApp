import React, { Component } from 'react'

export class MovieTags extends Component {
    render() {
        return (
            
            <span className="tag">{this.props.name}</span>
               
            
        )
    }
}

export default MovieTags
