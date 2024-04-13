import {createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Notfound } from './pages/Notfound';
import { Layout } from './pages/Layout';
import { Confirmation } from './components/Confirmation';
import { Payment } from './components/Payment';
import Register from './components/Register';

export const Router = createBrowserRouter(
    [
        {
          path: '/',
          element: <Layout />,
          errorElement: <Notfound />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
                path: '/Payment',
                element: <Payment />
              },
            {
              path: '/Confirmation',
              element: <Confirmation />
            },
            {
              path: '/Register',
              element: <Register />
            }
          ]
        }
      ]
    );