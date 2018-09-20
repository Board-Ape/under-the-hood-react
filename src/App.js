import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

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

        // Find the index that matches the id
        const carIndex = this.state.cars.findIndex(car => {
            return car.id === id
        });

        // Match found index to car that you want
        const newCar = {
            ...this.state.cars[carIndex]
        };
        // Take that specific car and update value to event
        newCar.name = event.target.value;

        // Create a copy of the state
        const updateCars = [...this.state.cars];
        // Update the copy of state with the target 
        updateCars[carIndex] = newCar;

        this.setState({
            cars: updateCars
        })
    }

    deleteCarHandler = (carIndex) => {
        console.log('Hey')
        const cars = [...this.state.cars];
        cars.splice(carIndex, 1);
        this.setState({
            cars: cars
        })
    }

    render() {
 
        let cars = null;
        if (this.state.showCar) {
            cars = (
                <div>
                    { this.state.cars.map((car, index) => {
                        return <Car
                            key={ car.id }
                            name={ car.name }
                            year={ car.year }
                            delete={ () => this.deleteCarHandler(index) }
                            updateCarName= { (event) => this.updateCarNameHandler(event, car.id) }
                        />
                    })
                    }
                </div>
            )
        }

        return(
            <div className="App">
                <h1>Your Supercar Awaits....</h1>
                <button onClick={ this.toggleShowCarHandler }>Click Here To Display Cars</button>
                { cars }
            </div>
        )
    }
}

export default App;