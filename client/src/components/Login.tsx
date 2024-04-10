import { useState } from "react";
import { IUser } from "../models/User";

interface LoginProps {
  setUser: (user: IUser | null) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage("Wrong password/email, try again");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login error:", error);
      setUser(null);
      setErrorMessage("Login failed, please try again later");
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
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Log In</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
