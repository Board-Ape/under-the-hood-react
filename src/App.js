import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: [
        { id: 123, first: 'Sam', last: 'Singer' },
        { id: 456, first: 'Ken', last: 'Chan' },
        { id: 789, first: 'Eve', last: 'Tang'}
      ],
      showUserOuput: false
    }
  }

  changeNameHandler = ( event, id ) => {
    const personIndex = this.state.name.findIndex(person => {
      return person.id === id
    });

    const person = {
      ...this.state.name[personIndex]
    };
    
    // Alternatively 
    // const person = {Object.assign({}, this.state.name[personIndex])}

    person.first = event.target.value;

    const persons = [...this.state.name];
    name[personIndex] = person;

    this.setState({
      name: persons
    })
  }

  toggleUserInputHandler = () => {
    const doesShow = this.state.showUserOuput;
    
    this.setState({
      showUserOuput: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // This is a pointer to the original STATE
    // Poor practice, so create a copy with the slice() method
    const names = this.state.name.slice();
    // OR
    // const names = [...this.state.name];
    names.splice(personIndex, 1);

    this.setState({
      name: names
    })
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '2px solid blue'
    };

    let userOutput = null;

    if (this.state.showUserOuput) {
      userOutput = (
        <div>
          { this.state.name.map((names, index) => {
            return <UserOutput
              key={names.id}
              deleteName={ this.deletePersonHandler.bind(this, index) }
              first={names.first}
              last={names.last}
            />
          }) }
        </div> 
      )
    }

    let userInput = null;

    if (this.state.showUserOuput) {
      userInput = (
        <div>
          { this.state.name.map((names, index) => {
            return <UserInput
              first={names.first}
              last={names.last}
              changeNames={(event) => this.changeNameHandler(event, names.id)}
            />
          })
          }
        </div>
      )
    }

    return(
      <div className="App">
        <h1 onClick={this.toggleUserInputHandler}>Hello I'm A React App</h1>
        { userInput }
        { userOutput }
      </div>
    )
  } 
}

export default App;