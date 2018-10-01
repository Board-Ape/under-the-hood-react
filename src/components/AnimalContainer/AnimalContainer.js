import React, {Component} from 'react';
import UserInput from '../UserInput/UserInput';
import AnimalCard from '../AnimalCard/AnimalCard';
import Aux from '../Aux/Aux';

class AnimalContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animals: [
                { id: 123, name: 'Cheetah', age: 12 },
                { id: 345, name: 'Bison', age: 35 },
                { id: 567, name: 'Gazelle', age: 8 }
            ],
            title: 'Animal'
        }
    }

    updateTitleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    deleteCardHandler = (id) => {
        const copyState = [...this.state.animals];
        copyState.splice(id, 1)
        this.setState({
            animals: copyState
        })
    }

    render() {
        return (
            <Aux>
                <h1>The {this.state.title} Kingdom</h1>
                <UserInput
                    title={this.state.title}
                    change={this.updateTitleHandler}
                />
                <AnimalCard
                    animals={ this.state.animals }
                    delete={ this.deleteCardHandler }
                />
            </Aux>
        )
    }
}

export default AnimalContainer;