import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sham", age: 28 },
      { name: "Mondo", age: 27 },
      { name: "Steph", age: 26 }
    ]
  }

  render() {
    // single root element 
    return (
      <div className="App">
        <h1>I'm a React App!!!</h1>
        <p>This is working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Climbing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // Passing props and content utilizing props and props.children = the content between the tags instead of passed through as properties.
    // Names are hard coded. Let's change that. 

    // Core Concept: props and state are what triggers React to re-render components
  }
}

export default App;
