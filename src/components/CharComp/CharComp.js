import React from 'react';

const charComp = (props) => {
    const styles = {
        charComp: {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }
    }

    return(
        <div 
            style={styles.charComp}
            onClick={props.delete}
        >
           <p>{props.letter}</p>
        </div>
    )
}

export default charComp;