import React, { useState, useEffect } from "react"
import {getFetch} from "../../../data/ProductList.js"
import Card from "./Card/Card.jsx"
import "./ItemContainer.css"


const ItemListContainer = () => {
	const [productList, setProductList] = useState([])
	useEffect(()=>{
		getFetch.then((datos)=>setProductList(datos))
	})

	return (
		<div className="ItemListContainer">
			{productList.map(prod=> <Card id={prod.id} name={prod.name} image={prod.image} price={prod.price} /> )}
		</div>
	)
}

export default ItemListContainer
