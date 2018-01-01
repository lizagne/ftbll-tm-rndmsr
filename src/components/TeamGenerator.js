import React, { Component } from 'react';
import '../css/style.css';

class TeamGenerator extends Component {
    constructor(props){
        super(props)
    
        this.state={
            teams:'',
            show: false
        }
    }

    onClickReset = () => {
       this.props.resetAll();
       this.setState({ show: false });
    }

    handleClick = () => {
        this.props.generateTeam();
        this.setState({show: true});    
    }

    render() {
        let teamListA = this.props.teams
        let teamListB = this.props.teams

      
        if(this.props.teams.teams !== undefined || null) {
            teamListA = this.props.teams.teams[0].map((player, index) => {
            return (<div className="card" key={ index }><p>{ player.name }</p></div>)
        })
            teamListB = this.props.teams.teams[1].map((player, index) => {
            return (<div className="card" key={ index }><p>{ player.name }</p></div>)
        })
    }

        return(
            <div className="col-sm-12 teams">
                <div>
                { this.props.players.length >= 10 ?
                    <span>
                        <button className="btn btn-danger reset btn-md" onClick={ this.onClickReset }>Reset</button>
                        <button className="teamGen btn btn-primary " onClick={ this.handleClick }>Generate Teams</button>
                    </span> : null }
                </div>    

                <div className="row team-output">
                    <span className="col-sm-6" >
                        { this.state.show === true && this.props.players !== undefined ? 
                            <h2 className="teamName">Team A</h2> : null }
                        { teamListA }
                    </span>

                    <span className="col-sm-6">
                        { this.state.show === true ? <h2 className="teamName">Team B</h2> : null }
                        { teamListB }
                    </span>
                </div>
            </div>
        );
    }
}

export default TeamGenerator;

