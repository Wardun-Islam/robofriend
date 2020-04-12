import React from 'react'
import './Input.css'

let Input = ({onTextChange, onButtonClick}) =>{
	return(
		  <div className="al">
   			 <input id="name" className="input-reset ba b--black-20 pa2 mb2 dib" type="text" onChange={onTextChange} placeholder="Find Robots"/>
			  <div className="ph3">
				  <button className="ph3 ba1 pv2 bg-purple" onClick={onButtonClick}>Button Text</button>
				</div>
  		  </div>
	);
}

export default Input;