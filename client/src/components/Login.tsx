import { useEffect, useState } from "react";
import { IUser } from "../models/User";

interface LoginProps {
  setUser: (user: IUser | null) => void;
}

const Login = ({ setUser }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const authorize = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/auth/authorize", {
          credentials: "include"
        });

        if (response.status === 200) {
          const userData = await response.json() as IUser;
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error authorizing user:", error);
        setUser(null);
      }
    };

    authorize();
  }, []);
  const login = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 200) {
        const userData = await response.json();
        setUser(userData);
        setErrorMessage("");
      } else {
        setUser(null);
        setErrorMessage("Fel email eller lösenord, forsök igen");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login error:", error);
      setUser(null);
      setErrorMessage("Kunne inte logga in");
    }
  };

  return (
    <div>
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
      <button onClick={login}>Log In</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
