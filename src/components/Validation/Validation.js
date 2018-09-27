import React from 'react';

const validation = (props) => {

    let length;
    if (props.inputLength > 5) {
        length = (
            <div>
                <p>Text long enough</p>
            </div>
        )
    } 
    else if (props.inputLength <= 5 && props.inputLength > 0) {
        length = (
            <div> 
                <p>Text too short</p>
            </div>
        )
    }
    else {
        length = (
            <div>
                <p>Please enter some text</p>
            </div>
        )
    }

    return(
        <div>
            <p>Validation Here</p>
            <p>{props.inputLength}</p>
            { length }
        </div>
    )
}

export default validation;