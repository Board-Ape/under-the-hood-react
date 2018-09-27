import React from 'react';
import Car from './Car/Car';

const cars = (props) => props.cars.map( (car, index) => {
    return <Car
        key={car.id}
        name={car.name}
        year={car.year}
        delete={() => props.delete(index)}
        updateCarName={(event) => props.changed(event, car.id)}
    />
});

export default cars;