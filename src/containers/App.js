import React from 'react';
import classes from './App.css';
import AnimalContainer from '../components/AnimalContainer/AnimalContainer';

const App = () => {
    return (
        <div className={classes.App}>
            <AnimalContainer />
        </div>
    )
}

export default App;