import React, { Component } from 'react'
import {Container} from "react-bootstrap"
import SearchBar from '../../Components/SearchBar/SearchBar'

export class Homepage extends Component {
    render() {
        return (
            <Container>
                <div style={{textAlign:"center", paddingTop:"50px"}}>
                    <h1>Calvin's Movie Ratings</h1>
                </div>
                <SearchBar />
            </Container>
        )
    }
}

export default Homepage
