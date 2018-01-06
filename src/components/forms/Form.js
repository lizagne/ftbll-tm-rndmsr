import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addPlayer(this.state);
        this.setState({ name: '' });
    }

    render() {

        return (
            <div className="container">

                <div className="input-group">

                    <form onSubmit={ this.onSubmit }>

                        <input 
                            className="input"
                            type="text" 
                            placeholder="Enter player's name..." 
                            value={ this.state.name }
                            maxLength={ 20 }
                            minLength={ 3 } 
                            onChange={ event => this.setState({ name: event.target.value }) }/>

                        <button className="btn btn-primary button btn-md"
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