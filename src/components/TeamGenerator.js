import React, { Component } from 'react';
import '../css/style.css';

class TeamGenerator extends Component {
    //whenever we want our component to be aware of state, we must set up the constructor with props
    constructor(props){
        super(props)
        
        //then set up the state for this component
        this.state = {
            teams:'',
            display: false
        }
    }

    //event handler for the team generation button
    onClick = () => {
        this.props.generateTeam();
        this.setState({display: true});    
    }

    //this is the event handler for resetting
    onClickClear = () => {
       this.props.resetAll();
       this.setState({ display: false });
    }


    render(){
        let teamListA = this.props.teams;
        let teamListB = this.props.teams;
        
        //these two if statements says go through the array of each team and render the names
        if(teamListA.teams && teamListB.teams !== undefined || null) {
            teamListA = teamListA.teams[0].map((player, idx) => {
            return (<div className="card" key={ idx }><p>{ player.name }</p></div>)
        })
            teamListB = teamListB.teams[1].map((player, idx) => {
            return (<div className="card" key={ idx }><p>{ player.name }</p></div>)
        })
    }

        return(
             <div>
            { this.props.players.length >= 4 ?
                <span className="col-sm-12 teams">
                    <button className="btn btn-danger reset btn-md" onClick={ this.onClickClear }>Reset</button>
                    <button className="teamGen btn btn-primary " onClick={ this.onClick }>Generate Teams</button>
                    <span className="col-sm-6" > 
                    { this.state.display === true ? 
                    <div>
                        <h2 className="teamName">Team A</h2>
                        { teamListA }
                        <h2 className="teamName">Team B</h2>
                        { teamListB }
                    </div> : null }  
                    </span>
                </span> : null }
            </div>
        );
    }
}

export default TeamGenerator;
