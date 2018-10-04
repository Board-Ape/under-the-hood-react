import React, {Component} from 'react';
import Aux from '../Aux/Aux';

class UserInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        },
        this.inputElement = React.createRef();
    }

    componentDidMount () {
        console.log('This component mounted')
        this.inputElement.current.focus();
    }
    
    handleInputChange = (event) => {
        this.setState ({
            input: event.target.value
        });
        this.props.change(event);
    }

    render() {
        return (
            <Aux>
                <input
                    ref={this.inputElement}
                    placeholder='Input Text Here'
                    value={this.state.input} 
                    onChange={(event) => this.handleInputChange(event)}
                />
                <p>{ this.state.input }</p>
            </Aux>
        )
    }
}

export default UserInput;