import { IUser } from "../models/User";


interface LogoutProps {
  setUser: (user: IUser | null) => void;
}

const Logout = ({ setUser }: LogoutProps) => {
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.status === 200) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
};

export default Logout;
