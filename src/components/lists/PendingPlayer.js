import React from 'react';

const PendingPlayer = props => {
  if (props.name) {
    return (
      <li className="pending">
        <span>
          { props.name }
        </span>
      </li>
    );
  }
  return null;
};

export default PendingPlayer;
