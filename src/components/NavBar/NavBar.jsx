import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import  { useCartContext }  from "../Body/Cart/CartContext.js"
import "./NavBar.css"

const NavBar = () => {
	//const del numero al lado del carrito
	const [amount, setAmount] = useState(0)
	//has clicado en el carrito o no?
	const [open, setOpen] = useState(false);
	//traer el cart
	const { cartList, remove, clear, addToCart } = useCartContext();
	//funcion para abrir el navegador al clicar
	const changeOpen = ()=>{
		setOpen(!open)
	}
	//calculadora de cuantos itens hay en el carrito
	useEffect(()=>{
		setAmount(0)
		let partialAmount = 0
		for (let producto of cartList) {
			let partial = (producto.count)
			partialAmount += partial
			}
		setAmount(partialAmount)
	},[cartList, remove, addToCart, clear])
	return (
		<div className="navbar-container">
			<div className="header-navbar">
				<img className="logo" src="https://avatars.githubusercontent.com/u/86751142?v=4" alt="logo" onClick={changeOpen}></img>
				<Link to="/cart" className="cartRow"><img className="cartImg" alt="foto do carrinho" src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE="/><p>{amount}</p></Link>
			</div>
			<nav className={`${open ? "navbar-active" : "navbar"}`}>
				<NavLink to="/" onClick={changeOpen}>Inicio</NavLink>
				<NavLink to="/category/clases" onClick={changeOpen}>Clases</NavLink>
				<NavLink to="/category/teeworld" onClick={changeOpen}>Tee World</NavLink>
				<NavLink to="/category/code" onClick={changeOpen}>Desarollo</NavLink>
			</nav>

		</div>
	)
}

export default NavBar
