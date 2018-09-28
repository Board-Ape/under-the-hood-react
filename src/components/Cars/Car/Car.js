import React, { Component } from 'react';
import './Car.css';


class Car extends Component {
    render() {
        return(
            <div className='Car'>
                <button onClick={ this.props.delete }>Delete</button>
                <h2>Supercar: { this.props.name }</h2> 
                <h3>Built-in: { this.props.year }</h3>
                <input 
                    type='text' 
                    value={ this.props.name } 
                    onChange={ this.props.updateCarName }
                />
            </div>
        )
    }
}

export default Car;