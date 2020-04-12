import React from 'react';
import Card from '../card/Card';
import './cardList.css'

const CardList = ({Robots}) => {
	// let robolCardList = [];
	// Robots.forEach((robot) => robolCardList.push(<Card props={robot}/>));
	let robolCardList = Robots.map((robot, i) => <Card key={i} props={robot}/>);
	return(
		<div className="CardList m4">
			{robolCardList}
		</div>
		);
}

export default CardList;