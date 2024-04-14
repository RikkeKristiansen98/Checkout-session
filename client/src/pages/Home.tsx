import { useEffect, useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { IUser } from "../models/User";
import Products from "../components/Products";
import { Link } from "react-router-dom";

export const Home = () => { 
  const [user, setUser] = useState<IUser | null>(null);

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

  return (
    <>
      {user ? (
        <Logout setUser={setUser} />
      ) : (
        <Login setUser={setUser} /> 
      )}<Link to="/register">
      <button>Registrera dig</button>
    </Link>
    <Link to="/cart">
      <button>Varukorg</button>
    </Link>
          <Products />
    </>
  );
};