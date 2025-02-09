import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Router } from 'lucide-react'
import CreateTrip from './create-trip/index.jsx'
import Header from  './components/ui/custom/Header.jsx'
import { Toaster } from './components/ui/sonner.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },{
    path: "/create-trip",
    element: <CreateTrip />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Toaster/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
