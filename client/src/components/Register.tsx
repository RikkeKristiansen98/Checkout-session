import { useState } from "react";
import { IUser } from "../models/User";


const Register = () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const newUser: IUser = {
      email,
      password
    };
  
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
  
      if (response.ok) {
        console.log("User registered successfully!");
        // Återställ formuläret efter lyckad registrering
        setEmail("");
        setPassword("");
      } else {
        console.error("Registration failed!");
        // Hantera felregistrering här
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Hantera fel vid HTTP-anrop här
    }
  };  

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrera dig</button>
    </div>
  );
};

export default Register;
