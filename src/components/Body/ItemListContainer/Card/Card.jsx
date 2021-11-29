import React from 'react'
import "./Card.css"
import {Link} from 'react-router-dom'

function Card(props) {
	return (
		<div className="card">
			<div className="cardHeader">
	          {props.name}
	        </div>
	        <div className="cardBody">
	          <img src={props.image} alt={`imagen del product `+props.name}/>
	        </div>
	        <div className="cardPrice">
	          UYU {props.price}
	        </div>
	        <Link to={`/item/${props.id}`} className="detalle">Detalle</Link>

		</div>
	)
}

export default Card
