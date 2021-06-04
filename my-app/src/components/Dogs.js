import React from 'react'
import DogCard from './DogCard'

class Dogs extends React.Component{
    
    
    render(){
        return(
            <div className="ui three column grid">
                {this.props.dogs.map(dog => <DogCard selectDog={this.props.selectDog} key={dog.id} dog={dog}/>)}
                {/* {this.props.walkers.map(walker => <DogCard key={walker.id} walker={walker}/>)} */}
            </div>
        )
    }
}

export default Dogs