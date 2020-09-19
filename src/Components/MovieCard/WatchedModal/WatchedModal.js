import React, { Component } from 'react'
import "./watchedModal.css"

export class WatchedList extends Component {

    changedHandler = () => {
       
    }
    submitRating = (e) => {
        e.preventDefault();
        let rating = document.getElementById("ratingInput").value
        let seen = ""
        if(document.getElementById("checkboxInput1").checked){
            seen = true
        } else if (document.getElementById("checkboxInput2").checked){
            seen = false
        }
        
        this.props.submitForm(rating, this.props.movie.id, this.props.movie.key, seen)
    }
    render() {
        return (
            <div onClick={(e) => this.props.toggleModal(e)} id={this.props.showForm === true ? "showForm" : null} className="watched-modal">
                <div className="watched-box">
                    
                    <form className="inputForm" >
                    <h2>{this.props.movie.title}</h2>
                        <label className="firstLabel" htmlFor="rating"><span>Rating / 10</span></label>
                        <input type="text" id="ratingInput"></input>
                        <label className="firstLabel" htmlFor="rating"><span>Have you seen this film before</span></label>
                        <div className="radioCheckbox">
                            <div>
                                <input type="radio" id="checkboxInput1" name="seen" value="true"></input>
                                <label htmlFor="true">Yes</label>
                            </div>
                            <div>
                                <input checked type="radio" id="checkboxInput2" name="seen" value="false"></input>
                                <label htmlFor="false">No</label>
                            </div>
                            
                        </div>
                        
                        
                        <button onClick={(e) => this.submitRating(e)} type="submit" style={{marginTop: "10px"}} className="btn btn-secondary">Submit rating and add to list</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default WatchedList
