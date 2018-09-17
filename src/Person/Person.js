import React, { Component } from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person" onClick={props.switchName}>
            <p>My name is {props.name} {props.children}</p>
            <p>I am {props.age} years old</p>
            <input
                type="text"
                onChange={props.changeName}
                placeholder={props.name}
            />
        </div>
    )
}

export default person;