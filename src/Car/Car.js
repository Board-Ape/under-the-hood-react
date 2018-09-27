import React from 'react';
import Radium from 'radium';
import './Car.css';


const car = ( props ) => {
    // Pseudo selectors are different 
    // Must use special component from Radium
    const style = {
        'media (min-width: 500px)': {
            width: '450px',
        }
    }


    return(
        <div className='Car' style={style}>
            <button onClick={ props.delete }>Delete</button>
            <h2>Supercar: { props.name }</h2> 
            <h3>Built-in: {props.year}</h3>
            <input 
                type='text' 
                value={ props.name } 
                onChange={ props.updateCarName }
            />
        </div>
    )
}

export default Radium(car);
