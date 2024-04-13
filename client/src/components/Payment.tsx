import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"

const Payment = () => {
    const {cart} = useCart()

    const [user, setUser] = useState<string>("")

    useEffect(() => {
        const authorize = async() => {
          const response = await fetch("http://localhost:3001/api/auth/authorize", {
        credentials: "include"
      })
    
      const data = await response.json()
      if (response.status === 200) {
        setUser(data)
      } else {
        setUser("")
      }
        }
        authorize()
      }, [])

    const handlePayment = async() => {
        const response = await fetch("http://localhost:3001/payments/create-checkout-session",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(cart),
          credentials: "include"
        })

        const data = await response.json()
        localStorage.setItem("sessionId", JSON.stringify(data.sessionId))
        window.location = data.url
      }


      return (
    <div>
      <button onClick={handlePayment} disabled={!user}>
      {user ? "Checkout" : "Log in to order"}</button>
    </div>
      )
}

export default Payment