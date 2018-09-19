import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.first}</p>
            <p>{props.last}</p>
        </div>
    )
}

export default userOutput;