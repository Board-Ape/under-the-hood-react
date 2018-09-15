import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Sham", age: 28 },
      { name: "Mondo", age: 27 },
      { name: "Steph", age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // DONT DO THIS: this.state.persons[0].name = 'Maximillian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Gonzo", age: 27 },
        { name: "Dan", age: 26 }
      ]
    })
  }
  // Not actively calling use HANDLER

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Shamu", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "Dan", age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I'm a React App!!!</h1>
        <p>This is working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Shamulian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Samil')}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        >My Hobbies: Climbing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

// Ability to pass methods through as props along with state.

// Utilize bind() or an anonymous arrow function 
// Maybe more efficient to use bind() rather than the arrow function

// Creating a manual typed respnse for passing this and updating state

// Inline styling is possible but you may use an external stylesheet as well

export default App;
