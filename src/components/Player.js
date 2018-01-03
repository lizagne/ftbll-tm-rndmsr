import React, { Component } from 'react';
import '../css/style.css';

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
                <input 
                    className="input" 
                    type="text" 
                    value={ this.props.data.name } 
                    onChange={ event => this.onNameEdit(event, this.props.data) }
                /> :

                <ul className="list-group">
                    <li className="list-group-item">{ this.props.data.name }
                        <div className="buttons">
                            <button 
                                className="btn btn-warning btn-xs" 
                                type="edit" 
                                onClick={ () => { this.toggleEditMode() } }>Edit
                            </button>

                            <button 
                                className="btn btn-danger btn-xs" 
                                onClick= { () => { this.removePlayer(this.props.data) } }>Delete
                            </button> 
                        </div>
                    </li>
                </ul> }  

            </div>
        )
    }
}

export default Player;
