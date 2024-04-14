import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handlePayment = async () => {
    console.log("Cart data:", cart);

    const response = await fetch(
      "http://localhost:3001/payments/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    localStorage.setItem("sessionId", JSON.stringify(data.sessionId));
    window.location = data.url;
  };

  return (
    <>
      <div>
        {cart.length === 0 ? (
          <div>
            <p>Din varukorg är tom.</p>
            <Link to="/">Tillbaka till startsidan</Link>
          </div>
        ) : (
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
                    >
                      Ta bort produkt
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button onClick={handlePayment} className="checkout">
            Betala
          </button>
        )}
      </div>
    </>
  );
};
