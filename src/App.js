import React, { Component } from 'react';
import Header from './components/Header';
// import './App.css';
import Form from "./components/Form";
//containers to put in later
// import InputForm from './containers/InputForm';
// import Options from './containers/Options';
// import TeamOutput from '/containers/TeamOutput';

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

export default App;
