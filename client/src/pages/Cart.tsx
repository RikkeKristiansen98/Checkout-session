import Payment from "../components/Payment"
import { useCart } from "../context/CartContext"

const Cart = () => {

const {cart} = useCart()
    return (
        <>
        <h3>Kundvagn</h3>
        <div>
            {cart.map((item, index) => (
                <div key={index}>
                    <h3>{item.product.name}</h3>
                        <img src={item.product.images[0]} alt={item.product.name} />
                    <p>Price: {item.product.default_price.unit_amount / 100} SEK</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
            <Payment/>
        </div>
        </>
    )
}

export default Cart