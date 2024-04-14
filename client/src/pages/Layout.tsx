import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

export const Layout = () => {
  return (
    <>
      <CartProvider>
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
};
