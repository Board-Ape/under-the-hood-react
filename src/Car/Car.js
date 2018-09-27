import React from 'react';
import './Car.css';


const car = ( props ) => {
    const randomNum = Math.random();
    if (randomNum > .7) {
        throw new Error("Something went wrong")
    }
    return(
        <div className='Car'>
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

export default car;