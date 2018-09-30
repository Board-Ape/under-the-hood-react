import React, { Component } from 'react';
import './Car.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';


class Car extends Component {
    render() {
        return(
            <Aux>
                <button onClick={ this.props.delete }>Delete</button>
                <h2>Supercar: { this.props.name }</h2> 
                <h3>Built-in: { this.props.year }</h3>
                <input 
                    type='text' 
                    value={ this.props.name } 
                    onChange={ this.props.updateCarName }
                />
            </Aux>
        )
    }
}

export default WithClass(Car, 'Car');