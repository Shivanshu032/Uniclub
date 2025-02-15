import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"

import { Layout, LoginPage, Dashboard, ClubDetailsPage } from './components/index.js'
import Settings from "./components/Dashboard/Settings.jsx"; // Import Settings Page


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/club-details" element={<ClubDetailsPage />} />
      <Route path="/settings" element={<Settings />} /> 

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
