import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Navigation.css"
export class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation
