import React, { Component } from 'react'
import "./SearchBar.css"

export class SearchBar extends Component {
    render() {
        return (
            <div className="movieSearch box-shadow">
            <input onChange={(e) => this.props.updateSearch(e)} value={this.props.value} type="text" placeholder="Search" name="Search" />
            </div>
        )
    }
}

export default SearchBar
