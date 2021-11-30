import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import app from "../../../data/firebase/firebase.js"
import { collection, getFirestore, setDoc, doc } from "firebase/firestore";
import  { useCartContext }  from "./CartContext.js"
import "./Cart.css"





const Cart = () => {
	// traer el cart
	const { cartList, remove, addToCart, clear } = useCartContext()
	//entrar en repositorio
	const db = getFirestore(app);
	//entrar en la coleccion
	const newOrder = doc(collection(db, "orders"));
	//formulario de contacto del comprador
	const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })
    //valor total de la compra (puede ser repasada ao cartContexto)
    const [total, setTotal]  = useState(0)
    //no encontré otra soluccion para la subida de dados (que no era acepta sin una subida nula). Entonces, el review para confirmar que va tener la primera subida
    const [review, setReview] = useState(false)
    //const para check si el carrito esta vazio
    const[cartClear, setCartClear] = useState(true)
    //funcion para calcular calcular valor total de la compra y si es 0 enviar el cliente a comprar mas.
    useEffect(() => {
		let calculation = 0
		for (let producto of cartList) {
			const partial =(producto.price * producto.count)
			calculation += partial
			}
		setTotal(calculation)
		if(calculation===0){
			setCartClear(true)
		}
		else {
			setCartClear(false)
		}
	},[remove, clear, addToCart, cartList]);

	const send = ()=>{

		setTimeout(1500)
		setDoc(doc(collection(db, "cartViews")), {cartList})
		setReview(true)


		}

	//mobilidad del form
	const handleChange=(e)=>{
       setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //boton de compra
    const buy = ()=>{

    	//creacion de una orden en firebase con id
	    let orden = {}
			orden.buyer = formData
	 	    orden.total = total
			orden.date = new Date()
			orden.items = cartList.map(cartItem => {
			    const id = cartItem.id;
			    const name = cartItem.name;
			    const price = cartItem.price * cartItem.count;
			    const count = cartItem.count
			    return {id, name, price, count}
 			})
			console.log(orden)
 		setDoc(newOrder, orden);
		alert("Tu id de compra es: "+newOrder.id+" en 7 dias entraremos en contacto")
 		}

	return (
		<div className="container-cart">
		{ cartClear === (true)?
			<div className="column">
				<p>Tu carrito esta vacio! Anda eligir algo para comprar!</p>
				<NavLink to="/">Inicio</NavLink>
				<NavLink to="/category/clases">Clases</NavLink>
				<NavLink to="/category/teeworld">Tee World</NavLink>
				<NavLink to="/category/code">Desarollo</NavLink>
			</div>
			:
			<div>	{
					review === (true)?
						<div className="send-form">
							<p>Llene el formulario para que entremos en contacto.</p>
							<p>La confirmacion de las clases/servicios seran realizadas por e-mail.</p>
							<p>No pierda tu numero de confirmacion</p>
							<form onSubmit={buy} onChange={handleChange}>
								<input type='text' name='name' placeholder='name' value={formData.name} required/>
								<input type='text' name='phone'placeholder='tel' value={formData.phone} required/>
								<input type='email' name='email'placeholder='email' value={formData.email} required/>
								<input type="submit" value="Confirmar"/>
							</form>
						</div>
						:
						<div>
							<p>Revisa tu carrito</p>
							<div className="rowTitle"><p>Nombre del Product</p><p>Cantidade</p><p>Precio por Persona</p></div>
							{cartList.map(prod=>
								<div>
									<Link to={`/item/${prod.id}`} className="row"><p>{prod.name}</p><p>{prod.count}</p><p>{prod.price}</p></Link>
									<div className="rowTitle"></div>
								</div> )}
							<div className="rowTitle"><p>Total a Pagar</p><p>UYU</p><p>{total}</p></div>
							<button onClick={clear}>Limpar</button>
							<button onClick={send}>esta correcto</button>
						</div>
				}
			</div>
		}
		</div>
	)
}

export default Cart
