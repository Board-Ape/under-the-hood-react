import React, { Component } from 'react';
import Car from './Car/Car';

class Cars extends Component {
    render() {
        return this.props.cars.map((car, index) => {
            return <Car
                key={car.id}
                name={car.name}
                year={car.year}
                delete={() => this.props.delete(index)}
                updateCarName={(event) => this.props.changed(event, car.id)}
            />
        });
    }
} 

export default Cars;