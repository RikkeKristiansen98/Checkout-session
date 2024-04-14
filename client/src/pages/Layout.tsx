import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

export const Layout = () => {

    return (
      <>
          <CartProvider>
        <header>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
        </footer>
        </CartProvider>
      </>
    );
  };
  