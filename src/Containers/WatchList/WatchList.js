import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import {Row} from "react-bootstrap"


import axios from "axios"

export class WatchList extends Component {

    state = {
        movies: [],
        watchList: this.props.watchList,
        loaded: false,
        search: ""
    }

   componentDidMount() {
        this.loadWatchList()
    }

    

    loadWatchList = () => {
        if(this.props.watchList.length > 0){
            const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
        let movies = []
        for(var i = 0; i < this.state.watchList.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${this.state.watchList[i]}?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                movies.push(res.data)
                })
        }
        this.setState({movies: movies}, () => {
            this.loaded()
        })
        }
        
    }

    loaded = () => {
        this.setState({loaded:true})
    }
    render() {

        let movie = this.state.movies
        let view = ""
        if(this.props.watchList.length > 0 && this.state.loaded){
            movie.map(movie => {
            return <h1>{movie.title}</h1>
            })
        } else view = <h1>No Data yet</h1>
        
    
        

        return (
            <React.Fragment>
            <header  style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
            <h1>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} />  </h1> 
            <p>These are some movies I plan on watching soon!</p>
            </header>
            <div className="movieContainer pt-50">
                    <Row>
                        
                        {view}

                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default WatchList
