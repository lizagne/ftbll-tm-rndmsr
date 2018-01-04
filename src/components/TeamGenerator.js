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
        if(teamListA.teams && teamListB.teams !== null) {
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
                <section className="col-sm-12 teams">

                    <span>
                        <button className="btn btn-primary teamGen" onClick={ this.onClick }>Generate Teams</button>
                        <button className="btn btn-danger reset" onClick={ this.onClickClear }>Clear Names</button>
                    </span>
                    <span className="col-sm-12" > 
                    { this.state.display === true ? 

                    // <h2>Your Teams</h2>
                    <div className="teamOutput">

                        <div>
                            <h2 className="teamName">Team A</h2>
                            <div>{ teamListA }</div>
                        </div>


                        <div>
                            <h2 className="teamName">Team B</h2>
                            <div>{ teamListB }</div>
                        </div>

                    </div> : null }  

                    </span>
                </section> : null }
            </div>
        );
    }
}

export default TeamGenerator;