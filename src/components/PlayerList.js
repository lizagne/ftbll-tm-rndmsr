import React, { Component } from 'react';
import xBtn from "../images/xbutton.svg";
import XButton from "./XButton";

class PlayerList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          	<li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default PlayerList;