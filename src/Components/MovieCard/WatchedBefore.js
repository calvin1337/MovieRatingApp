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
        if(this.props.seen === true && this.props.width === "sameWidth"){
            seen = (<div className="seenBefore">
                  <h4 style={{width:"139px", display:"block", textAlign:"center"}}>Seen Before</h4>
              </div>)
          }
          if(this.props.seen !== true && this.props.width === "sameWidth"){
            seen = (
                <div className="notSeen">
                    <h4 style={{display:"block", textAlign:"center"}}>First Time Watching</h4>
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



export default WatchedBefore
