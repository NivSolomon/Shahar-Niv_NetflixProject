import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from "./store";
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:8080/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
     <StoreProvider>
       <App />
     </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
