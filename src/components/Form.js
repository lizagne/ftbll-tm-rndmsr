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
                            type="text" 
                            className="input" 
                            placeholder="Enter player's name..." 
                            value={ this.state.name } 
                            onChange={ event => this.setState({ name: event.target.value }) }/>

                        <button 
                            type="submit" 
                            className="btn btn-primary button btn-md" 
                            disabled={ !this.state.name }>Add player
                        </button>
                    </form>

                </div>

            </div>
        )
    }
}

export default Form;