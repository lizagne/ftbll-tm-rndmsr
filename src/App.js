import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import MultiInput from "./components/MultiInput";
//containers to put in later
// import InputForm from './containers/InputForm';
// import Options from './containers/Options';
// import TeamOutput from '/containers/TeamOutput';

class App extends Component {
    render() {
        return (
            <div  className="App">
                <Header />
                <MultiInput />
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
