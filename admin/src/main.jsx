// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter} from "react-router-dom"
import {AuthContextProvider} from "./Context/AuthContext.jsx"
import{ AdminContextProvider} from "./Context/AdminContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
    <AdminContextProvider>
    <App />
    </AdminContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  
)
