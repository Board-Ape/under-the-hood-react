// A component is just a function that returns some JSX

// function person() {
// }

// var person = function() {
// }

// Above are perfecty fine to use but best practice currently

import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>    
    )
}

export default person;

// Static texts is fine but creating a dynamic component is the goal
// Make sure you output dynamic content with {}

