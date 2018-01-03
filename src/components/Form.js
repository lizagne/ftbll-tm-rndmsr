import React, { Component } from 'react';
import '../css/style.css';

class Form extends Component {

    state = {
        name: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(this.state);
        this.setState({ name: '' });
    }

    render() {
        return (
            <div className="container">

                <div className="input-group">

                    <form onSubmit={ this.handleSubmit }>

                        <input 
                            className="input"
                            type="text" 
                            placeholder="Enter player's name..." 
                            value={ this.state.name } 
                            onChange={ event => this.setState({ name: event.target.value }) }/>

                        <button 
                            className="btn btn-primary button btn-md"
                            type="submit" 
                            disabled={ !this.state.name }>Add player
                        </button>
                    </form>

                </div>

            </div>
        )
    }
}

export default Form;