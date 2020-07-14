import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

export class Navigation extends Component {

    state = {
        toggle:false
    }

    navToggle = () => {
        if(this.state.toggle === false){
            let nav = document.getElementById("navbar")
            nav.classList.add("showNav")
            this.setState({toggle:true})
        }
        if(this.state.toggle === true){
            let nav = document.getElementById("navbar")
            nav.classList.remove("showNav")
            this.setState({toggle:false})
        }
    }

    componentDidMount(){
        document.addEventListener("mousedown", this.handleClick, false )
    }

    componentWillUnmount(){
        document.removeEventListener("mousedown", this.handleClick, false)
    }


    handleClick = (e) => {
        console.log(e.target)
        let button = document.getElementById("toggler")
        if(this.node.contains(e.target) && e.target !== button){
            return;
        } 

        this.navToggle()
    }
    
    render() {
        let toggle = ""

            if(this.state.toggle === false){
                toggle = faBars
            }
    
            if(this.state.toggle === true){
                toggle = faTimes
            }

        return (
            
    
            <nav ref={node => this.node = node } id="navbar">
                <div id="toggler" className="navbar-toggler">
                <button  onClick={() => this.navToggle()} className="navbar-toggler">
                    <FontAwesomeIcon  icon={toggle} />
                    </button>
                </div>
                <div className="logoContainer">
                

                <span>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} /></span>
                </div>
                <div className="linkContainer">
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
                        <Link to="/Reviews">Reviews</Link>
                    </li>
                    <li>
                        /
                    </li>
                     <li>
                        <Link to="/movielist">Movie List</Link>
                    </li>
                    <li>
                        /
                    </li>
                     <li>
                        <Link to="/watchlist">Watch List</Link>
                    </li>
                   
                </ul>
                
                </div>
                <div  className="navDropDown">
                    <div className="dropDown">
                    <span>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} /></span>
                <ul>
                    
                    <li>
                        <Link to="/" onClick={() => this.navToggle()}>Home</Link>
                    </li>
                   
                    <li>
                        <Link to="/about" onClick={() => this.navToggle()}>About</Link>
                    </li>
                    
                    <li>
                        <Link to="/Reviews" onClick={() => this.navToggle()}>Reviews</Link>
                    </li>
                    
                     <li>
                        <Link to="/movielist" onClick={() => this.navToggle()}>Movie List</Link>
                    </li>
                    
                     <li>
                        <Link to="/watchlist" onClick={() => this.navToggle()}>Watch List</Link>
                    </li>
                   
                </ul>
                    </div>
                
                </div>
            </nav>
        )
    }
}

export default Navigation
