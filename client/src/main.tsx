import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Layout } from './pages/Layout.tsx'
import { Router } from './Router.tsx'
import { CartProvider } from './context/CartContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <CartProvider>
     <Layout />
     </CartProvider>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
