import app from "./firebase/firebase.js"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


//entrar en lo repositorio
const db = getFirestore(app);

// traer la lista de productos
async function getProducts(db) {
  const products = collection(db, 'productos');
  const productosSnapshot = await getDocs(products);
  productosSnapshot.docs.forEach(doc => productList.push(doc.data()));
  return productList
}
getProducts(db)

//lista de productos para exportacion
let productList = []

//promesa para tener cargar la lista
export const getFetch = new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve(productList)
},1500)})
export default productList
