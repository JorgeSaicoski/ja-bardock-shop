import React, { useState, useEffect } from "react"
import {getFetch, buyersListName} from "./orders.js"
import Card from "./Card/Card.jsx"


const AdminPage = () => {
	const [ready, setReady] = useState(false)
	const [buyerList, setBuyerList] = useState([])
	//funcion para traer los compradores y separar sus nombres/contatos
	useEffect(()=>{
		getFetch.then((datos)=>setBuyerList(datos))
		.then(buyerList.forEach(element => buyersListName.push(element.buyer)));
	})
	//funcion para esperar encontrar los compradores
	function thisIsReady(){
		setReady(true)
	}
	useEffect(() => {
		setTimeout(thisIsReady,3000)
	},[])


	return (
		<div className="ItemListContainer">
		{ ready===(true)?
			<div className="cardAdminContainer">
				{buyersListName.map(prod=> <Card name={prod.name} email={prod.email} phone={prod.phone} /> )}
			</div>
			:
			<div className="containerLoad">
				loading
				<div className="loading"></div>
			</div>

		}
		</div>
	)
}

export default AdminPage
