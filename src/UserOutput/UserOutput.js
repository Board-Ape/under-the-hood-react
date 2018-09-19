import React from 'react';

const userOutput = (props) => {
    return (
        <div onClick={props.showTitle}>
            <p>{props.name}</p>
            <p>Paragraph 2</p>
        </div>
    )
}

export default userOutput;