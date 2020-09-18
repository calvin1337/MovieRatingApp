import React, { Component } from 'react'

export class WatchedBefore extends Component {
    render() {
        let seen = ""
        if(this.props.seen === true){
          seen = (<div className="seenBefore">
                <h4>Seen Before</h4>
            </div>)
        }
        if(this.props.seen !== true){
            seen = (
                <div className="notSeen">
                    <h4>First Time Watching</h4>
                </div>
            )
        }
        return (
            <div>
                {seen}
            </div>
        )
    }
}

let seenBefore = {
    border: "1px solid black"
    
}

export default WatchedBefore
