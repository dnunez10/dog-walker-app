import './App.css';
import React from 'react'
import Form from './components/Form'
import Dogs from './components/Dogs'
import FilterSort from './components/FilterSort'

class App extends React.Component {

  state = {
    dogs: [],
    walkers: [],
    selectedDog: null
  }

  componentDidMount(){
  fetch("http://localhost:9393/dogs")
  .then(res => res.json())
  .then(data => this.setState({
    dogs: data.dogs, 
    walkers: data.walkers}))
  //.then(console.log)
  }

  postDog = dogObj => {
    //console.log(dogObj)
    let configObj = {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(dogObj)
    }
    fetch('http://localhost:9393/dogs', configObj)
    .then(res => res.json())
    .then(data => {
      this.setState({
        dogs: [...this.state.dogs, data.dog]
      })
    })
    // .then(console.log)
  }

  selectDog = dog => {
    this.setState({
      selectedDog: dog
    })
  }

  patchWalker = (walker) => {
    console.log(walker)
    let updateWalker = {walker_id: walker}
    let reqPackage = {
      headers: {"Content-Type":"application/json"},
      method: "PATCH",
      body: JSON.stringify(updateWalker)
    }

    fetch(`http://localhost:9393/dogs/${this.state.selectedDog.id}`, reqPackage)
    .then(res => res.json())
    .then(updateDog => {
      this.setState({
        dogs: this.state.dogs.map(dog => dog.id === updateDog.dog.id ? updateDog.dog : dog)
      })
    })
  }


  render(){
  return (
    <div>
      <Form walkers={this.state.walkers} postDog={this.postDog}/>
      {/* <Walkers walkers={this.state.walkers}/> */}
      <br/>
      <Dogs selectDog={this.selectDog} dogs={this.state.dogs}/>
      <FilterSort patchWalker={this.patchWalker} walkers={this.state.walkers} selectDog={this.selectDog}/>
    </div>
  );
  }
}

export default App;
