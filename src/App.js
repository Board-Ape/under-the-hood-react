import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  constructor() {
    super()
    this.state = {
      person: [
        {name: 'Fam', age: 26},
        {name: 'Gam', age: 25},
        {name: 'Ham', age: 24},
      ]
    }
  }

  render() {
    return(
      <div className="App">
        <h1>Hello I'm A React App</h1>
        <Person 
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person 
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        > Newtonian Physics  </Person>
        <Person 
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    )
  } 
}

export default App;