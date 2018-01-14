import React, { Component } from 'react';

class Player extends Component {

    state = {
        // name: name,
        isEditing: false,
    }

    //call this event handler if the Edit button is clicked on the player component
    toggleEditMode = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }
     
    onNameEdit = (event, player) => {
        player.name = event.target.value;
        this.props.editPlayer(player);
        this.setState({ name: '' });
    }

    removePlayer = player => {
        this.props.deletePlayer(player);
    }

    render() {
        return (
            <div className="">
                { this.state.isEditing === true ? 
                <div>    
                    <input 
                        className="input" 
                        type="text" 
                        minLength={ 3 }
                        maxLength={ 20 }
                        value={ this.props.data.name } 
                        onChange={ event => this.onNameEdit(event, this.props.data) }
                    /> 
                    <div className="buttons">
                        <button 
                            className="btn btn-warning btn" 
                            type="edit"
                            onClick={ () => { this.toggleEditMode() } }><i className="fa fa-pencil" aria-hidden="true"></i> Save
                        </button>

                        <button 
                            className="btn btn-danger btn" 
                            onClick= { () => { this.removePlayer(this.props.data) } }><i className="fa fa-trash" aria-hidden="true"></i> Delete
                        </button> 
                    </div>
                </div>    

                :

                <ul className="list-group">
                    <li className="list-group-item">{ this.props.data.name }
                        <div className="buttons">
                            <button 
                                className="btn btn-warning btn" 
                                type="edit" 
                                onClick={ () => { this.toggleEditMode() } }><i className="fa fa-pencil" aria-hidden="true"></i> Edit
                            </button>

                            <button 
                                className="btn btn-danger btn" 
                                onClick= { () => { this.removePlayer(this.props.data) } }><i className="fa fa-trash" aria-hidden="true"></i> Delete
                            </button> 
                        </div>
                    </li>
                </ul> }  

            </div>
        )
    }
}

export default Player;