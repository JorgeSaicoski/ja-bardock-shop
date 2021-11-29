
import './App.css';
import ItemListContainer from "./components/Body/ItemListContainer/ItemListContainer.jsx"
import ItemListContainerCategory from "./components/Body/ItemListContainer/ItemListContainerCategory.jsx"
import ItemDetail from "./components/Body/ItemDetail/ItemDetail.jsx"
import Cart from "./components/Body/Cart/Cart.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import CartContextProvider from "./components/Body/Cart/CartContext.js"
import AdminPage from "./components/Body/AdminPage/AdminPage.jsx"
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <div className="App-body">
            <Routes>
              <Route path="/category/:category" exact element={<ItemListContainerCategory/>}></Route>
              <Route path="/" exact element={<ItemListContainer/>}></Route>
              <Route path="/cart" exact element={<Cart/>}></Route>
              <Route path="/item/:id" exact element= {<ItemDetail/>}></Route>
              <Route path="/admin" exact element= {<AdminPage/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
