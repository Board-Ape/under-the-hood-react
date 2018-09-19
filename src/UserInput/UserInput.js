import React from 'react';

const userInput = (props) => {
    return (
        <div> 
            <input
                type="text"
                value={ props.name }
                onChange={ props.changeNames }
            />
        </div>
    )
}

export default userInput;