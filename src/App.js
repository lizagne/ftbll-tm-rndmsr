import React, { Component } from 'react';
import Header from './components/Header';
// import './App.css';
import Form from "./components/Form";
//containers to put in later
// import InputForm from './containers/InputForm';
// import Options from './containers/Options';
// import TeamOutput from '/containers/TeamOutput';
import { connect } from 'react-redux';
import { addPlayerActionCreator } from './actions/ActionCreators';

class App extends Component {

    state = {
        players: []
    }

    render() {
        return (
            <div  className="App">
                <Header />
                <Form addPlayer={ this.props.addPlayer } />
                {/* to put in later
                <InputForm />
                <Options />
                <TeamOutput />
            	*/}

            </div>
        );
    }
}

// export default App;

const mapStateToProps = (state) => {
    return {
        players: state.players,
        teams: state.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (player) => {
            dispatch(addPlayerActionCreator(player));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
