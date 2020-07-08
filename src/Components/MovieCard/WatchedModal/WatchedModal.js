import React, { Component } from 'react'
import "./watchedModal.css"

export class WatchedList extends Component {

    changedHandler = () => {
        let changedRating = document.getElementById("ratingInput").value
       
    }

    render() {
        return (
            <div onClick={(e) => this.props.toggleModal(e)} id={this.props.showForm === true ? "showForm" : null} className="watched-modal">
                <div className="watched-box">
                    <div className="inputForm">
                    <label for="rating"><span>Rating / 10</span></label>
                    <input onChange={this.changedHandler} type="text" id="ratingInput"></input>
                    <button style={{marginTop: "10px"}} className="btn btn-secondary">Submit rating and add to list</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WatchedList
