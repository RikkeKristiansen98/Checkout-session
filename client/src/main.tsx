import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router.tsx'
import { Layout } from './pages/Layout.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
