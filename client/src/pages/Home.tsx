import { useEffect, useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";

interface User {
  email: string;
  // Add more user properties if needed
}

export const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authorize = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/auth/authorize", {
          credentials: "include"
        });

        if (response.status === 200) {
          const userData = await response.json();
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
      {user ? (
        <Logout setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </>
  );
};
