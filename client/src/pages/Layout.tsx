import { Outlet } from "react-router-dom";

export const Layout = () => {

    return (
      <>
        <header>
        </header>
        <main>
          <div>
            <Outlet />
          </div>
        </main>
        <footer>
          <div>
          </div>
        </footer>
      </>
    );
  };
  