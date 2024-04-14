import { Payment } from "../components/Payment";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <div>
        <ul>
          {cart.map((product) => (
            <div key={product.product.id}>
              <h3>{product.product.name}</h3>
              <div>
                <img
                  src={product.product.images[0]}
                  alt={product.product.name}
                  style={{ width: "80px" }}
                />
                <div>
                  <p>
                    {product.quantity} st -{" "}
                    {product.product.default_price.unit_amount / 100} SEK
                  </p>
                  <button
                    onClick={() => removeFromCart(product.product)}
                  >Ta bort produkt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>

        <Payment />
      </div>
    </>
  );
};