import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/Global.css";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <CartProvider>
  <WishlistProvider>
    <App />
  </WishlistProvider>
</CartProvider>
);
