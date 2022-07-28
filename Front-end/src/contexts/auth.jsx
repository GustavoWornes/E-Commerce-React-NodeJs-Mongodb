/* import { useNavigate } from 'react-router-dom' */
import { createContext, useState, useEffect, useContext } from "react";
/* eslint-disable */
/* import { useNavigate } from "@reach/router" */
import {utils} from "../utils/"
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
        console.log("carrinho de compras", cart)
        const cartLocal = localStorage.getItem('cart')
        if (cartLocal) {
            setCart(JSON.parse(cartLocal))
        }
        console.log("carrinho de compras", cart)
    }, [])
    const removeToCart = (productId) => {
        setCart(old => {
            const newCart = {}
            Object.keys(old).forEach(id => {
                if (id !== productId) {
                    newCart[id] = old[id]
                }
            })
            totalPurchase(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    const addToCart = (product) => {
        setCart((old) => {
            let quantity = 0

            if (old[product._id]) {
                quantity = old[product._id].quantity
            }


            const newCart = {
                ...old,
                [product._id]: {
                    quantity: quantity + 1,
                    product,

                },
            }
            totalPurchase(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    const changeQtd = (productId, newQtd) => {
        setCart(old => {
            const newCart = {}

            Object.keys(old).forEach(id => {
                if (id === productId) {
                    old[id].quantity = newQtd
                }

                newCart[id] = old[id]


            })
            totalPurchase(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }
    const totalPurchase = (objet) => {
        const total = []

        Object.keys(objet).forEach(id => {
            total.push((objet[id].product.precoProduto * objet[id].quantity))


        })
        const initialValue = 0;
        const sumWithInitial = total.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        console.log(sumWithInitial)
        utils.setTotal(sumWithInitial)
      


    }

    return (
        <CartContext.Provider value={{ authenticated: Boolean(user), loading, cart, addToCart, removeToCart, changeQtd}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}