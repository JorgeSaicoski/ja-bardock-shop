import app from "../../../data/firebase/firebase.js"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(app);

	// traer la lista de productos
	async function getOrder(db) {
	  const orders = collection(db, 'orders');
	  const ordersSnapshot = await getDocs(orders);
	  ordersSnapshot.docs.forEach(doc => buyerList.push(doc.data()));
	  return buyerList
	}
	getOrder(db)

	//lista de productos para exportacion
	let buyerList = []

	//promesa para tener cargar la lista
	export const getFetch = new Promise((resolve, reject)=>{
	  setTimeout(()=>{
	  resolve(buyerList)
	},1500)})

	export const buyersListName = []
	