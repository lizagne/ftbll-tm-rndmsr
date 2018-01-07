import React, { Component } from 'react';
import Form from './forms/Form';
import TeamList from './lists/TeamList';
import TeamGenerator from './lists/TeamGenerator';
import Header from './globals/Header';
import MainContent from './globals/MainContent';
import Footer from './globals/Footer';

// import { CSSTransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';

import { 
    addPlayerActionCreator, 
    editPlayerActionCreator, 
    generateTeamActionCreator, 
    deletePlayerActionCreator, 
    reset } from '../actions/ActionCreators';

class App extends Component {

    state = {
        players: [],
        isEditing: false
    }

    toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

    render() {
        return (
            <div className="App">

                <div className="col-sm-6 col-sm-offset-3">
                    <Header />
                </div> 
                
                <div>    
                    <Form addPlayer={ this.props.addPlayer } />
                </div>   

                <div className="col-sm-12">
                    <MainContent />
                </div>    

                <div className="col-md-12">
                    <div className="col-md-4">
                        <TeamList
                            players={ this.props.players } 
                            addPlayer={ this.props.addPlayer } 
                            toggleEditingAt={ this.toggleEditingAt }
                            editPlayer={ this.props.editPlayer } 
                            deletePlayer={this.props.deletePlayer } 
                        />
                    </div>

                    <div className="col-md-8">
                        <TeamGenerator
                            generateTeam={ this.props.generateTeam } 
                            teams={ this.props.teams } 
                            players={ this.props.players } 
                            resetAll={ this.props.resetAll }
                        />
                    </div>
                </div>

                <div className="col-sm-12">
                    <Footer />
                </div>     
                            
            </div>
        );
    }
}


//MapStateToProps and mapDispatchToProps for the entire app goes here rather than in separate files.

const mapStateToProps = state => {
    return {
        players: state.players,
        teams: state.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: player => {
            dispatch(addPlayerActionCreator(player));
        },
        editPlayer: player => {
            dispatch(editPlayerActionCreator(player));
        },
        deletePlayer: player => {
            dispatch(deletePlayerActionCreator(player));
        },
        generateTeam: () => {
          dispatch(generateTeamActionCreator());
        },
        resetAll: () => {
          dispatch(reset());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);