import React, { Component } from 'react';
import Car from './Car/Car';

class Cars extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('Inside WillReceiveProps', nextProps)

    }

    // Will not effect the DOM but will behind the scene if hardcoded
    // Can save performance here if you do not update
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Inside shouldComponentReceiveProps', nextProps, nextState)
        return nextProps.cars !== this.props.cars;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('Inside componentDidUpdate')
    }

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