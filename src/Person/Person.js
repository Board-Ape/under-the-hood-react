// A component is just a function that returns some JSX

// function person() {
// }

// var person = function() {
// }

// Above are perfecty fine to use but best practice currently

import React from 'react';

const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

export default person;

// Static texts is fine but creating a dynamic component is the goal
// Make sure you output dynamic content with {}

