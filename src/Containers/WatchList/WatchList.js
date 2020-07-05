import React, { Component } from 'react'

export class WatchList extends Component {


    render() {

        let watchList = this.props.watchList
       watchList = watchList.map(movie => {
            return <h1 style={{margin:"5px"}}>{movie}</h1>
        })
            
        

        return (
            <div>
                {watchList}
            </div>
        )
    }
}

export default WatchList
