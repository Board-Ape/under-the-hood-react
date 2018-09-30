import React, {Component} from 'react';

class UserInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }
    
    handleInputChange = (event) => {
        this.setState ({
            input: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.input} 
                    onChange={(event) => this.handleInputChange(event)}
                />
                <p>{ this.state.input }</p>
            </div>
        )
    }
}

export default UserInput;