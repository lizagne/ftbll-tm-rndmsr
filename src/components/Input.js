import React, { Component } from 'react';
import PlayerList from './PlayerList';

class Input extends Component {
	constructor(props) {
	    super(props);

	    this.state = { items: [], text: '' };

	    this.onChange = this.onChange.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
  	}

  	onChange(e) {
    	this.setState({ text: e.target.value });
  	}

  	onSubmit(e) {
	    e.preventDefault();
	    if (!this.state.text.length) {
	      return;
	    }
	    const newItem = {
	      text: this.state.text,
	      id: Date.now()
	    };
	    this.setState(prevState => ({
	      items: prevState.items.concat(newItem),
	      text: ''
	    }));
  	}

  	render() {
    	return (
    		<div>
	      		<div className="playerForm">
	        		<h3>Player's Name:</h3>
	        		<form onSubmit={ this.onSubmit }>
	          		<input
	          			type="text"
	          			maxLength="20"
	          			minLength="1"
	            		onChange={ this.onChange }
	            		value={ this.state.text }
	            		placeholder="Enter a player's name..."
	          		/>
	          		<button className="submitBtn">
	            		{ this.state.items.length <= 9 ? "Add #" + (this.state.items.length + 1) : 'Done' }
	          		</button>
	        		</form>
	      		</div>

	      		<div className="playerList">
	      		<h3> Your Team Players: </h3>
	      		<PlayerList items={ this.state.items } />
	      		</div>

      		</div>
    	);
  	}
}

export default Input;

//I think the ternary here needs to be an if statement because I want to make the button disabled as well as change the word inside.

