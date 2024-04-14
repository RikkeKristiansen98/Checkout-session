import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Layout } from './pages/Layout.tsx'
import CartProvider from './context/CartContext.tsx'
import { router } from './Router.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <CartProvider>
     <Layout />
     </CartProvider>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
