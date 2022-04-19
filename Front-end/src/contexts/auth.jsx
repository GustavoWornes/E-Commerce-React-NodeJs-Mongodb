/* import { useNavigate } from 'react-router-dom' */
import { createContext, useState, useEffect, useContext } from "react";

import { api, createSession } from "../../src/Services/services";
import { utils } from "../utils/index";
/* import { useNavigate } from "@reach/router" */

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('userLocalStore')
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)
        console.log("carrinho de compras",cart)
        const cartLocal = localStorage.getItem('cart')
        if(cartLocal){
            setCart(JSON.parse(cartLocal))
        }
        console.log("carrinho de compras",cart)
    }, [])
 
    const addToCart = (product)=>{
        setCart((old)=>{
            
          const newCart = {
            ...old,
            [product._id]:
            
                product
            
            
          }
          localStorage.setItem('cart', JSON.stringify(newCart))
          return newCart    
        })
    }
   
    return (
        <CartContext.Provider value={{ authenticated: Boolean(user), loading, cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}