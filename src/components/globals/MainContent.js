//This is the static content.

import React from 'react';

const MainContent = () => (
	<div>
	    <div className="col-lg-4 col-lg-offset-1 col-sm-12 left">
	        <h3>Build your team:</h3>
	        <p className="main"> You can edit or delete a player.</p>
	    </div>

	    <div className="col-md-6 right">
	        <h3>Your teams will appear here:</h3>
	        <p className="main">Shuffle by pressing 'Generate Teams' again.</p>
	    </div>

	</div>    
);

export default MainContent;