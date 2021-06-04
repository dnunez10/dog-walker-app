import React from 'react'

class FilterSort extends React.Component{

    render(){
        return(
            <div>
                <br/>
                <select onChange={(e) => this.props.patchWalker(e.target.value)} className="ui selection dropdown">
                {this.props.walkers.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                </select>
            </div>
        )
    }
}

export default FilterSort