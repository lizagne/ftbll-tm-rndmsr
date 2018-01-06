import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

class Form extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            formErrors: { name: '' },
            nameValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.match(/^[a-zA-Z][a-zA-Z0-9 \-']+$/);
        fieldValidationErrors.name = nameValid ? '' : ' can only include, letters, numbers, hyphens and apostrophes';
        break;

      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                  }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid});
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

                        <FormErrors formErrors={ this.state.formErrors } />

                            <label htmlFor="name">Team Player Name</label>

                            <input
                                type="text" required 
                                className="form-control input"
                                name="name"
                                placeholder="Enter player's name..." 
                                value={ this.state.name }
                                maxLength={ 20 }
                                minLength={ 3 } 
                                onChange={ this.handleUserInput }/>

                        <button className="btn btn-primary button btn-md"
                            type="submit" 
                            disabled={ !this.state.formValid }>Add player
                        </button>

                    </form>

                </div>

            </div>
        )
    }
}

export default Form;