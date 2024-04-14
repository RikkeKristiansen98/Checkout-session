import { useState } from "react";
import { IUser } from "../models/User";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const handleRegister = async () => {
    const newUser: IUser = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setRegisterStatus("success");
        setEmail("");
        setPassword("");
      } else {
        setRegisterStatus("error");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      setRegisterStatus("error");
    }
  };

  return (
    <div>
      <h2>Registrera</h2>
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
      {registerStatus === "success" && (
        <p style={{ color: "green" }}>Registreringen lyckades.</p>
      )}
      {registerStatus === "error" && (
        <p style={{ color: "red" }}>Registreringen misslyckades. Försök igen.</p>
      )}
      <Link to="/">
        <button>Tillbaka</button>
      </Link>
    </div>
  );
};

export default Register;

