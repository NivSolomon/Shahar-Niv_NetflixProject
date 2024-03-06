import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from "./store";
import axios from 'axios';
import { Provider } from "react-redux";


// axios.defaults.baseURL = 'http://localhost:8080/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <App />
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
