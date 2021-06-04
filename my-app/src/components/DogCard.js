import React from 'react'
import '../App.css';

class DogCard extends React.Component{

    render(){
        return(
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                    <img src={this.props.dog.image} alt="doggo"/>
                    </div>
                    <div className="extra content">
                    <div className="header">{this.props.dog.name}</div>
                    <div className="breed">
                        {this.props.dog.breed}
                    </div>
                    <div>
                        {this.props.dog.walker_id}
                    </div>
                    <button className="change-walker" onClick={() => this.props.selectDog(this.props.dog)}>Change Walker</button>
                </div>
            </div>
            <br/>
            </div>
        )
    }
}

export default DogCard