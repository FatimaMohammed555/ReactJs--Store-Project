
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route , Link } from 'react-router-dom';
import CartIcon from "./Components/CartIcon";
import  Home  from './Pages/Home';
import  Carts  from './Pages/Carts';
import  Products  from './Pages/Products';
import ProductDetails from "./Pages/ProductDetails"
 import store  from "./Store/store";
import { Provider } from "react-redux";


 function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">Store</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/carts">Carts</Link>
      </li>
    </ul>
  </div>
<CartIcon />
</nav>

<Route exact path="/" component={Home}  />
<Route exact path="/carts" component={Carts}  />
<Route exact path="/products" component={Products}  />
<Route exact path="/products/:id" component={ProductDetails}  />



    </BrowserRouter>
  )
}

function AppwithStore()
{
  return <Provider store={store}>
<App/>
  </Provider>
}

  export default AppwithStore;