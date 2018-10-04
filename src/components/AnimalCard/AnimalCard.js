import React from 'react';
import classes from './AnimalCard.css';

const animalCard = (props) => {

    return props.animals.map((animal, index) => {
        return (
            <div 
                className={classes.AnimalCard} 
                key={animal.id}
                onClick={() => props.delete(index)}
                
            >
                <h1>{ animal.name }</h1>
                <h2>{ animal.age }</h2>
            </div>
        )
    })
}

export default animalCard;