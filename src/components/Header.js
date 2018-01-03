//header component holding the logo, the title and subtitle
//stateless component

import React from 'react';
import logo from '../logo.svg';

const Header = () => (
	<div>
        <header>
	        <h1>
            	<img src={ logo } className="App-logo" alt="football-logo" />
            	Ftbll Tm Rndmisr 
            	<img src={ logo } className="App-logo1" alt="football-logo" />
	        </h1>
	        <h2>Pick your teams</h2>
            <p className="lead"> Enter at least 4 names to generate two random teams.</p>
        </header>
    </div>
);

export default Header;