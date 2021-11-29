import React from 'react'
import "./Card.css"


function Card(props) {
	return (
		<div className="cardAdmin">
			<div className="cardAdminHeader">
	          {props.name}
	        </div>
	        <div className="cardAdminBody">
	          <p>{props.email}</p>
	          <p>phone: {props.phone}</p>
	        </div>
	    </div>
	)
}

export default Card