import { CartProvider } from "react-use-cart";
import "./App.css";
// import Cart from "./Components/Cart";
import Home from "./Pages/Home";

import Nav from "./Pages/Nav";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
        <Nav />
      </CartProvider>
    </>
  );
}

export default App;
