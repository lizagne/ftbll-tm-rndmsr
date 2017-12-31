import React, { Component } from 'react';

class MultiInput extends Component {
	constructor() {
		super();

		//set up the initial state, as a key value pair, an array of objects
		this.state = {
			teamplayers: [{ name: '' }], 
		};
	}
  
  	handleTeamplayerNameChange = idx => evt => {
  		//set up the new object of teamplayers
	    const newTeamplayers = this.state.teamplayers.map((teamplayer, sIdx) => {

	    	if (idx !== sIdx) {
	    		return teamplayer;
	    	}
	   		return { ...teamplayer, name: evt.target.value };
    });
    
    this.setState({ teamplayers: newTeamplayers });
  }
  
  handleSubmit = evt => {
    evt.preventDefault(); //prevent the default action of the Browser
    this.setState({ teamplayers: this.state.teamplayers.concat([{ name: '' }]) });
	// need to sort this out so that it goes to the next input on enter;
  }
  
  handleAddTeamplayer = () => {
    this.setState({ teamplayers: this.state.teamplayers.concat([{ name: '' }]) });
  }
  
  //set up the remove team player handler
  handleRemoveTeamplayer = idx => () => {
    this.setState({ teamplayers: this.state.teamplayers.filter((s, sidx) => idx !== sidx) });
  }
  
  render() {    
    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Add up to 10 players</h3>
        { this.state.teamplayers.map((teamplayer, idx) => (
          <div key={ idx }>
            <input
              	type="text"
              	placeholder={`Team Player #${idx + 1}'s name`}
              	value={ teamplayer.name }
              	onChange={ this.handleTeamplayerNameChange(idx) }
            />
            <button type="button" onClick={ this.handleRemoveTeamplayer(idx) } className="small">x</button>
          </div>
        ))}
        <button type="button" onClick={ this.handleAddTeamplayer } className="btn-info addBtn">Add Team Player</button>
        
      </form>
    )
  }
}

export default MultiInput;