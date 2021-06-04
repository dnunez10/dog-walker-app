import React from 'react'


export default class Form extends React.Component{
    state = {
        name: '',
        breed: '',
        image: '',
        // walker_id: ''
    }

    handleChange = e => {
        let name = e.target.name
        this.setState({
        [name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.postDog(this.state)
      }

    renderOptions = () => {
        return this.props.walkers.map(w => <option key={w.id} value={w.id}>{w.name}</option>)
    }


    render(){
        return(
            <div className="ui inverted segment">
                <form onSubmit={this.handleSubmit} className="ui inverted form">
                    <div className="three fields">
                    <div className="field">
                        <label>Dog's Name</label>
                        <input onChange={this.handleChange} name="name" placeholder="Name" type="text"/>
                    </div>
                    <div className="field">
                        <label>Breed</label>
                        <input onChange={this.handleChange} name="breed" placeholder="Breed" type="text"/>
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input onChange={this.handleChange} name="image" placeholder="Image URL" type="text"/>
                    </div>
                    </div>
                    <select onChange={this.handleChange} name="walker_id" className="ui selection dropdown">
                        {this.renderOptions()}
                    </select>
                    <br/>
                    <button type="submit" className="ui submit button">Submit</button>                    
                </form>
            </div>
            
        )
    }
}