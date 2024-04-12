export const Payment = () => {

const handlePayment = async () => {
    const response = await fetch("http://localhost:3001/payments/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify([{
        product: "price_1P3EnLFbdLADhBwOFMT7FcPx",
            quantity: 1
      },
      {
        product: "price_1P3EixFbdLADhBwOqepIeZWJ",
        quantity: 3
    }
  ])
 })
  const data = await response.json()
  localStorage.setItem("sessionId", JSON.stringify(data.sessionId))
window.location = data.url 
 } 
return (
 <>
<button onClick={handlePayment}>Ge mig pengar</button>
</>
  )}