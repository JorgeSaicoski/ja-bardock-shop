import React from 'react'
import { useParams } from 'react-router-dom'
import productList from "../../../data/ProductList.js"
import Card from "./Card/Card.jsx"
import "./ItemContainer.css"



const ItemListContainerCategory = () => {
	//encontrar la pagina
	const {category} = useParams()

	//encontrar la categoria y filtrar
	const detail = productList.filter((prod) => prod.category === category)



	return (
	    <div className="ItemListContainer">
			{detail.map(prod=> <Card id={prod.id} name={prod.name} image={prod.image} price={prod.price} /> )}
		</div>

	)
}

export default ItemListContainerCategory
