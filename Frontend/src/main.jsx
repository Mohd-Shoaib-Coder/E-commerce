import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx';
import axios from 'axios';
import {Provider} from "react-redux";
import { store } from './Redux/store.js';


axios.defaults.withCredentials = true; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
   
   
  </StrictMode>,
)
