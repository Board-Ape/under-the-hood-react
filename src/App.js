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
        { first: 'Sam', last: 'Singer' },
        { first: 'Ken', last: 'Chan' },
        { first: 'Eve', last: 'Tang'}
      ],
      showUserOuput: false
    }
  }

  changeNameHandler = (event) => {
    this.setState({
      name: [event.target.value, 'Sum', 'Tum']
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
              key={index}
              deleteName={ this.deletePersonHandler.bind(this, index) }
              first={names.first}
              last={names.last}
            />
          }) }
        </div> 
      )
    }

    return(
      <div className="App">
        <h1>Hello I'm A React App</h1>
          <UserInput 
            first={this.state.name[0].first}
            last={this.state.name[0].last}
            changeNames={ this.changeNameHandler }
            toggleShow={ this.toggleUserInputHandler }
          />
        { userOutput }
      </div>
    )
  } 
}

export default App;