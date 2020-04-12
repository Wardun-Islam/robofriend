import React from 'react';


const Scroll = (props) => {
	return (
		<div class='shadow-5' style={{border:'5px solid #f0a500',margin:'5px', height:'445px', overflowY:'scroll'}}>
			{props.children}
		</div>
	);
}

export default Scroll;