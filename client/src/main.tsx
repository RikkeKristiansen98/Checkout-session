import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router.tsx'
import { CartProvider } from './context/CartContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <CartProvider>
     </CartProvider>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
