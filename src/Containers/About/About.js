import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import {Container} from "react-bootstrap"

export class About extends Component {
    render() {
        return (
            <React.Fragment>
            <header  style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"center"}}>
            <h1>Calvin's Movie Ratings <FontAwesomeIcon icon={faFilm} />  </h1> 
            <p>A personal project for tracking movies I've watched</p>
            </header>
            <Container className="aboutContent">
                <h2>What is this project?</h2>
        <p>I decided to make this project so I could track and rate movies I watched during the COVID lockdown</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sint aliquid culpa quae ex porro, dolor ipsum debitis et libero?</p>
        <h2>Tell Me More</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nemo! Nam, incidunt rem. Nobis quisquam suscipit vitae quasi dolore, ratione porro dolor accusamus! Veritatis delectus ab recusandae quibusdam? Laborum, facilis velit aliquam mollitia magnam excepturi consequatur natus id doloribus quasi!</p>
        <h2>Methods used</h2>
        <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate officiis repellat vero quasi animi rerum quam neque! Pariatur maiores praesentium vitae porro atque fugit natus exercitationem eius ratione quaerat adipisci, quam magnam autem vero tenetur quos nesciunt at! Deleniti nesciunt soluta quae repellat, dolore eligendi neque repellendus non velit sit quas, officiis ut enim perspiciatis nobis consequatur sequi dicta nisi cupiditate praesentium, voluptate voluptatibus. Earum exercitationem repellat veritatis at.</p>
            </Container>
            </React.Fragment>
        )
    }
}

export default About
