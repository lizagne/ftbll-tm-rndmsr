import React, { Component } from 'react';
import Form from './Form';
import TeamList from './TeamList';
import TeamGenerator from './TeamGenerator';
import Header from './Header';
import Test from './Test.js';

import '../css/style.css';

import { connect } from 'react-redux';

import { 
    addPlayerActionCreator, 
    editPlayerActionCreator, 
    generateTeamCreator, 
    deletePlayerCreator, 
    reset } from '../actions/ActionCreators';

class App extends Component {

    state = {
        players: []
    }

    render() {
        return (
            <div className="App">

                <div className="col-sm-12">

                    <Header />

                    <Form addPlayer={this.props.addPlayer} />

                    <TeamList 
                        players={ this.props.players } 
                        addPlayer={ this.props.addPlayer } 
                        editPlayer={ this.props.editPlayer } 
                        deletePlayer={this.props.deletePlayer } 
                    />
                    </div>

                    <div className="col-sm-4">

                    <TeamGenerator  
                        generateTeam={ this.props.generateTeam } 
                        teams={ this.props.teams } 
                        players={ this.props.players } 
                        resetAll={ this.props.resetAll }
                    />
                </div>
            </div>
        );
    }
}


/////////   dispatching        //////////

const mapStateToProps = state => {
    return {
        players: state.players,
        teams: state.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: (player) => {
            dispatch(addPlayerActionCreator(player));
        },
        editPlayer: (player) => {
            dispatch(editPlayerActionCreator(player));
        },
        deletePlayer: (player) => {
            dispatch(deletePlayerCreator(player));
        },
        generateTeam: () => {
          dispatch(generateTeamCreator());
        },
        resetAll: () => {
          dispatch(reset());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
