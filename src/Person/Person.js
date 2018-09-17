import React, { Component } from 'react';

const person = (props) => {
    return (
        <div>
            My name is {props.name} {props.children}
        </div>
    )
}

export default person;