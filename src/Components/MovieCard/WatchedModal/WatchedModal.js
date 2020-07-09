import React, { Component } from 'react'
import "./watchedModal.css"

export class WatchedList extends Component {

    changedHandler = () => {
       
    }
    submitRating = (e) => {
        e.preventDefault();
        let rating = document.getElementById("ratingInput").value
        this.props.submitForm(rating, this.props.id)
    }
    render() {
        return (
            <div onClick={(e) => this.props.toggleModal(e)} id={this.props.showForm === true ? "showForm" : null} className="watched-modal">
                <div className="watched-box">
                    
                    <form className="inputForm" >
                        <label htmlFor="rating"><span>Rating / 10</span></label>
                        <input type="text" id="ratingInput"></input>
                        <button onClick={(e) => this.submitRating(e)} type="submit" style={{marginTop: "10px"}} className="btn btn-secondary">Submit rating and add to list</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default WatchedList
