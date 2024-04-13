/*import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { IProduct } from "../components/Products";

interface ICartItem {
    product: IProduct,
    quantity: number
}

interface ICartContext {
    cart: ICartItem[],
    addToCart: (product: IProduct) => void
}

const initialValues = {
    cart: [],
    addToCart: () => {}
}

const CartContext = createContext<ICartContext>(initialValues)
export const useCart = () => useContext(CartContext)

const CartProvider = ({children}: PropsWithChildren) => {
    const [cart, setCart] = useState<ICartItem[]>(() => {
        const lsData = localStorage.getItem("cart")
        return lsData ? JSON.parse(lsData) : []
    })

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: IProduct) => {
        const cloneCart = [...cart]

        const productAlreadyExists = cloneCart.find(item => item.product.id === product.id)

        if (productAlreadyExists) {
            productAlreadyExists.quantity++
            setCart(cloneCart)
        } else {
            setCart([...cart, {product, quantity: 1}])
        }
    }


    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider */