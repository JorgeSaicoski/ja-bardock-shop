import React, { useState, useEffect } from "react"
import  {getFetch} from "../../../data/ProductList.js"
import  { useCartContext }  from "../Cart/CartContext.js"
import { Link, useParams } from 'react-router-dom'
import "./ItemDetail.css"


const ItemDetail = () => {
	//setar productList corretamente
	const [productList, setProductList] = useState([])
	useEffect(()=>{
		getFetch.then((datos)=>setProductList(datos))
	})

	//const para separar el iten
	const [detail, setDetail] = useState()
	//id seleccionado
	const {id} = useParams()
	// traer el cart
	const { cartList, remove, addToCart } = useCartContext()
	//const para verificar si ya hay en el carrito o no
	const [inCart, setInCart] = useState(false)
	//preparar el contador
	const [count, setCount] = useState(1)
	//const para mostrar o no el botton de eliminar los productos
	const [already, setAlready] = useState(false)
	//encontrar en el carrito (si hay) el product
	const older = cartList.find((prod) => prod.id === id)
	//const para decir se encontró o no el product
	const [ready, setReady] = useState(false)
	//funcion para esperar encontrar el product
	function thisIsReady(){
		setReady(true)
	}
	//encontrar el iten seleccionado
	useEffect(() => {
		setDetail(productList.find((prod) => prod.id === id))
		setTimeout(thisIsReady,3000)
	},[productList,id])
	//dejar que el cliente elija cuantos
	const take = ()=> {if (count>1) {
		setCount(count-1)
	}}
	const add = ()=> {if (count<20) {
			setCount(count+1)
	}else{
		alert("Las turmas son de hasta 20 personas. Pasaste del limite")
	}}
	//boton para remover el product
	const removeAll =()=>{
		remove(id)
	}
	useEffect(() => {
    if (cartList.find((prod) => prod.id === id)){
			setAlready(true)
		}else{
			setAlready(false)
		}
  },[cartList, id]);

	//boton para agregar al carrito
	const putInCart = ()=>{
		setInCart(true)
		if (cartList.find((prod) => prod.id === id)){
			detail.count = count + older.count

		} else{
			detail.count=count
			addToCart(detail)
		}
		if (detail.count > 20){
			alert("Las turmas son de hasta 20 personas. Pasaste del limite")
			detail.count = 20

		}
	}

	return (
		<div>
			{ready===(true) ?
				<div key={ detail.id }>
					<h2>Producto: {detail.name}</h2>
					<h4>Description:</h4>
					<p>{detail.description}</p>
				</div>

				:
				<div className="containerLoad">
					loading
					<div className="loading"></div>
				</div>
			}
			{
					inCart===(true)?
					<div> Agregado </div>
					:
					<div className="buttonShop"><button onClick={take}>-</button>{count}<button onClick={add}>+</button></div>
			}
			{
				inCart === (true) ?
					<Link to="/cart" className="divAddShopButton">Ir al Carrito</Link>
					:
					<button className="divAddShopButton" onClick={putInCart}>Agrega al carrito</button>
			}
			{already === (true) ?
				<div> Ya tenes en el carrito. Queres sacarlos? <button onClick={removeAll}> Si, saca los! </button></div>
				:
				<div> Todavia no tenes este iten en el carrito </div>
			}

		</div>
	)
}

export default ItemDetail
