import React from 'react'
import WalkerCard from './WalkerCard'

class Walkers extends React.Component{
    
    render(){

        return(
            <div>
                {this.props.walkers.map(walker => <WalkerCard key={walker.id} walker={walker}/>)}
            </div>
        )
    }
}

export default Walkers