import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Router } from 'lucide-react'
import CreateTrip from './create-trip/index.jsx'
import Header from  './components/ui/custom/Header.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import Viewtrip from './view-trip/[tripId]/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },{
    path: "/create-trip",
    element: <CreateTrip />
  },{
    path:'/view-trip/:tripId',
    element:<Viewtrip/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Toaster/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
