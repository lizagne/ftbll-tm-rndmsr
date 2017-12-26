//header component holding the logo, the title and subtitle
//stateless component

import React from 'react';
import logo from '../logo.svg';


const Header = () => (
	<div>
        <header className="App-header">
	        <img src={ logo } className="App-logo" alt="football-logo" />
	        <h1>Ftbll Tm Rndmisr </h1>
	        <h2>Pick your teams</h2>
        </header>
    </div>
);

export default Header;