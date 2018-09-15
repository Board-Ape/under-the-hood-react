import React from 'react';
import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>    
    )
}

// Utilize these components as frequently as possible to keep code 
// readable and easy to test.

// Most state is not updated through components.

export default person;