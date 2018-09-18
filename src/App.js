import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: ['Drum','Sum', 'Tum']
    }
  }

  changeNameHandler = (event) => {
    this.setState({
      name: [event.target.value, 'Sum', 'Tum']
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Hello I'm A React App</h1>
        <UserInput 
          name={this.state.name[0]}
          changeNames={ this.changeNameHandler }
        />
        <UserOutput 
          name={this.state.name[0]}
        />
        <UserOutput 
          name={this.state.name[1]}
       />
        <UserOutput 
          name={this.state.name[2]}
        />
      </div>
    )
  } 
}

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       person: [
//         { name: 'Fam', age: 26 },
//         { name: 'Gam', age: 25 },
//         { name: 'Ham', age: 24 },
//       ]
//     }
//   }

//   switchNameHandler = (newNamesArray, agesArray = null) => {
//     if (agesArray) {
//       this.setState({
//         person: [
//           { name: newNamesArray[0], age: agesArray[0] },
//           { name: newNamesArray[1], age: agesArray[1] },
//           { name: newNamesArray[2], age: agesArray[2] },
//         ]
//       })
//     }
//     else {
//       this.setState({
//         person: [
//           { name: newNamesArray[0], age: 1 },
//           { name: newNamesArray[1], age: 2 },
//           { name: newNamesArray[2], age: 3 },
//         ]
//       })
//     }
//   }

//   changeNameHandler = (event) => {
//     this.setState({
//       person: [
//         { name: event.target.value, age: 1 },
//         { name: event.target.value, age: 2 },
//         { name: event.target.value, age: 3 },
//       ]
//     })
//   }


//   render() {
//     return (
//       <div className="App">
//         <h1>Hello I'm A React App</h1>
//         <UserInput />
//         <UserOutput />
//         <button
//           onClick={this.switchNameHandler.bind(this, ["Bub", "Lub", "Cub"])}
//         >Switch All Names</button>
//         <Person
//           name={this.state.person[0].name}
//           age={this.state.person[0].age}
//         />
//         <Person
//           name={this.state.person[1].name}
//           age={this.state.person[1].age}
//           changeName={this.changeNameHandler}
//         > Newtonian Physics  </Person>
//         <Person
//           name={this.state.person[2].name}
//           age={this.state.person[2].age}
//           // switchName={ this.switchNameHandler.bind(this, ['Cring', 'Ming', 'Ting'], [6,7,8]) }
//           switchName={() => this.switchNameHandler(['Cring', 'Ming', 'Ting'], [6, 7, 8])}
//         />
//       </div>
//     )
//   }
// }