import { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] =useState([])

  function addToCart(items){
    setCartList([
            ...cartList,
            items
        ])
    }

    function remove(id){
        setCartList(cartList.filter((prod) => prod.id !== id))
    }
    const clear =()=>{
      setCartList([])
    }




    return (
        <CartContext.Provider value={{
            cartList,
            remove,
            clear,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
