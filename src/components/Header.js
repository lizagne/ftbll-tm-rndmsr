//header component holding the logo, the title and subtitle
//stateless component

import React from 'react';
import logo from '../logo.svg';


const Header = () => (
	<div>
        <header className="App-header">
	        
	        <h1><img src={ logo } className="App-logo" alt="football-logo" />
	        	Ftbll Tm Rndmisr </h1>
	        <h2>Pick your teams</h2>
        </header>
    </div>
);

export default Header;