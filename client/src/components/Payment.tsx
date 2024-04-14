import { useCart } from "../context/CartContext";

export const Payment = () => {
  const { cart } = useCart();

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
      <button onClick={handlePayment} className="checkout">
        Köp varukorgen
      </button>
    </>
  );
};
