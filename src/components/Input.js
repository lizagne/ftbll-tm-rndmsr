import React, { Component } from 'react';

class Input extends Component {
	
	render() {
		return (
		<div>
			<input 
				placeholder="Enter your team mate..."
				className="input"/>
			<input
				type="submit"
				className="submitBtn"
				value="Add"/>
		</div>
		)
	}
	
};

export default Input;