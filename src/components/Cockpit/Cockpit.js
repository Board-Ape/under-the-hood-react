import React from 'react';
import styling from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = ( props ) => {

    const classes = [];
    let btnClass = '';

    if (props.showCar) {
        btnClass = styling.Red;
    }

    if (props.cars.length <= 2) {
        classes.push( styling.red ); // ['red']
    }
    if (props.cars.length <= 1) {
        classes.push( styling.bold ); // ['red', 'bold']
    }

    return (
        <Aux>
            <p className = { classes.join(' ') } > Your Supercar Awaits....</p >
            <button
                className={ btnClass }
                onClick={ props.show }
            >Click Here To Display Cars</button>
        </Aux>
    );
}

export default cockpit;