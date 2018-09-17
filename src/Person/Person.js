import React, { Component } from 'react';

const person = (props) => {
    return (
        <div onClick={props.switchName}>
            <p>My name is {props.name} {props.children}</p>
            <p>I am {props.age} years old</p>
        </div>
    )
}

export default person;