import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm} from '@fortawesome/free-solid-svg-icons'

export class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="logoContainer">
                <span>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} /></span>
                </div>
                <ul>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        / 
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        / 
                    </li>
                    <li>
                        <Link to="/contact">Reviews</Link>
                    </li>
                   
                </ul>
            </nav>
        )
    }
}

export default Navigation
