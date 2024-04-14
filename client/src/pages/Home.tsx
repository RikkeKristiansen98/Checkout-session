import { useEffect, useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { IUser } from "../models/User";
import { Link } from "react-router-dom"; 
import Products from "../components/Products";

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
      <h1>HOME</h1>
      <Products />
      {user ? (
        <Logout setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
     <Link to="/register">
        <button>Registrera dig här</button>
      </Link>
    </>
  );
};