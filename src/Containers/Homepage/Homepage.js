import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"
import SearchBar from '../../Components/SearchBar/SearchBar'
import MovieCard from '../../Components/MovieCard/MovieCard'
import MovieData from "../../MovieData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faBars} from '@fortawesome/free-solid-svg-icons'

export class Homepage extends Component {

    state = {
        search: "",
        view: "grid"
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value})
    }

    changeView = (e) => {
        let view = e
        this.setState({view: view})
    }

    render() {
            let filteredMovie = MovieData.filter(
                (movie) => {
                    return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            )

            if(!isNaN(this.state.search)){
                filteredMovie = MovieData.filter(
                    (movie) => {
                        return movie.release.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                    }
                )
            }
        
            let view = ""

            if(this.state.view === "grid"){
               view = filteredMovie.map(movie => (
                    <MovieCard title={movie.title} date={movie.release} image={movie.image} rating={movie.rating} tags={movie.tags} />
                ))
            }

            if(this.state.view === "list"){
                view = <h1>List view</h1>
            }
            

        return (

            <Container>
                <div style={{textAlign:"center", paddingTop:"50px", paddingBottom:"50px"}}>
                    <h1>Calvin's Movie Ratings</h1>
                </div>
                <SearchBar updateSearch={(e) => this.updateSearch(e)} />
                <div className="viewTypeContaner">

                    <button className={this.state.view === "grid" ? "active" : null} onClick={(e) => this.changeView("grid")}>
                    <FontAwesomeIcon icon={faTh} />
                    </button>
                    <button className={this.state.view === "list" ? "active" : null} onClick={(e) => this.changeView("list")}>
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                    
                </div>
                <div className="movieContainer pt-50">
                    <Row>
                        
                        {view}

                    </Row>
                </div>
            </Container>
        )
    }
}

export default Homepage
