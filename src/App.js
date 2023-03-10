import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos"

function App() {
  const [cart, setCart] = React.useState([]);
  const [favourited, setFavourited] = React.useState([]);

  
  function addToCart(id, url) {
    setCart((prevCart) => {
      return [...prevCart, {id: id, url: url}]
    })
  }

  return (
    <main>
      <Header cart={cart}/>

      <Routes>
        <Route 
          exact 
          path="/" 
          element={<Photos
          cart={cart}
          addToCart={(id, url) => addToCart(id, url)} 
          setFavourited={setFavourited} 
          favourited={favourited}/>}
        />
          <Route path="/Cart" element={<Cart 
            cart={cart} 
            setCart={setCart}/>}
          />
      </Routes>
    </main>
  )
}

export default App;
