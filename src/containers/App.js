import React, { Component } from 'react';
import './App.css';
import Cars from '../components/Cars/Cars';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor() {
        super()
        this.state = {
            cars: [
                { id: 123, name: 'Bugatti', year: '2018' },
                { id: 456, name: 'Ferrari', year: '2017' },
                { id: 789, name: 'Lamborghini', year: '2016'}
            ],
            showCar: false
        }
    }

    toggleShowCarHandler = () => {
        const show = this.state.showCar;

        this.setState({
            showCar: !show
        });
    }

    updateCarNameHandler = ( event, id ) => {

        const carIndex = this.state.cars.findIndex(car => {
            return car.id === id
        });

        const newCar = {
            ...this.state.cars[carIndex]
        };
        newCar.name = event.target.value;

        const updateCars = [...this.state.cars];
        updateCars[carIndex] = newCar;

        this.setState({
            cars: updateCars
        })
    }

    deleteCarHandler = (carIndex) => {
        const cars = [...this.state.cars];
        cars.splice(carIndex, 1);
        this.setState({
            cars: cars
        })
    }

    render() {
        let cars = null;

        if ( this.state.showCar ) {
            cars = (
                <div>
                    <Cars
                        cars={this.state.cars}  
                        delete={this.deleteCarHandler}
                        changed={this.updateCarNameHandler} 
                    />
                </div>
            )  
        }

        return (
            <div className='App'>
                <Cockpit 
                    cars={this.state.cars}
                    show={this.toggleShowCarHandler}
                />
                { cars }
            </div>
        )
    }
}

export default (App);



// =========================================
// =========== Project - 2 =================
// =========================================

// import Validation from './Validation/Validation';
// import CharComp from './CharComp/CharComp';

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             inputText: '',
//             inputTextLength: ''
//         }
//     }

//     inputChangeHandler = (event) => {
//         this.setState({
//             inputText: event.target.value,
//             inputTextLength: event.target.value.length
//         })
//     }

//     deleteCharacterHandler = (id) => {
//         const text = this.state.inputText.split('');
//         text.splice(id, 1);
//         const updatedText = text.join('');

//         this.setState({
//             inputText: updatedText,
//             inputTextLength: updatedText.length
//         })
//     }

//     render() {
//         const characters = this.state.inputText.split('').map((char, index) => {
//             return (
//                 <CharComp
//                     key={ index }
//                     letter={ char }
//                     delete={ () => this.deleteCharacterHandler(index) }
//                 />
//             )
//         })

//         return(
//             <div className='App'>   
//                 <input 
//                     placeholder='Type Here'
//                     value={this.state.inputText}
//                     onChange={this.inputChangeHandler}
//                 />
//                 <Validation
//                     inputLength={this.state.inputTextLength}
//                 />
//                 { characters }
//             </div>
//         )
//     }
// }

// export default App;

// =========================================
// =========== Project - 1 =================
// =========================================

// import Car from './Car/Car';

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             cars: [
//                 { id: 123, name: 'Bugatti', year: '2018' },
//                 { id: 456, name: 'Ferrari', year: '2017' },
//                 { id: 789, name: 'Lamborghini', year: '2016'}
//             ],
//             showCar: false
//         }
//     }

//     toggleShowCarHandler = () => {
//         const show = this.state.showCar;

//         this.setState({
//             showCar: !show
//         });
//     }

//     updateCarNameHandler = ( event, id ) => {

//         // Find the index that matches the id
//         const carIndex = this.state.cars.findIndex(car => {
//             return car.id === id
//         });

//         // Match found index to car that you want
//         const newCar = {
//             ...this.state.cars[carIndex]
//         };
//         // Take that specific car and update value to event
//         newCar.name = event.target.value;

//         // Create a copy of the state
//         const updateCars = [...this.state.cars];
//         // Update the copy of state with the target 
//         updateCars[carIndex] = newCar;

//         this.setState({
//             cars: updateCars
//         })
//     }

//     deleteCarHandler = (carIndex) => {
//         const cars = [...this.state.cars];
//         cars.splice(carIndex, 1);
//         this.setState({
//             cars: cars
//         })
//     }

//     render() {
 
//         let cars = null;
//         if (this.state.showCar) {
//             cars = (
//                 <div>
//                     { this.state.cars.map((car, index) => {
//                         return <Car
//                             key={ car.id }
//                             name={ car.name }
//                             year={ car.year }
//                             delete={ () => this.deleteCarHandler(index) }
//                             updateCarName= { (event) => this.updateCarNameHandler(event, car.id) }
//                         />
//                     })
//                     }
//                 </div>
//             )
//         }

//         return(
//             <div className="App">
//                 <h1>Your Supercar Awaits....</h1>
//                 <button onClick={ this.toggleShowCarHandler }>Click Here To Display Cars</button>
//                 { cars }
//             </div>
//         )
//     }
// }

// export default App;