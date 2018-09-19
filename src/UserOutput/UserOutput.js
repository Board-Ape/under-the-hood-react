import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.first}</p>
            <p>{props.last}</p>
            <button onClick={props.deleteName}>Delete Name</button>
        </div>
    )
}

export default userOutput;