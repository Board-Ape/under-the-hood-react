import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // single root element 
    return (
      <div className="App">
        <h1>I'm a React App!!!</h1>
        <p>This is working!</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
    // return React.createElement('div', null, 'h1', 'I\'m a React App!!!');
    // Will need to call React.createElement to call again.

    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'I\'m a React App!!!'));
    // Far too cumbersome, This is what it compiles to
    // Looks like HTML but is JavaScript in the end.
  }
}

export default App;
