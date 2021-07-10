import './App.css';
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Supermarket from "./components/Supermarket/Supermarket";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartItemsDetails from "./components/CartItemsDetails/CartItemsDetails";
import CartPage from "./components/CartPage/CartPage";
import CartProvider from "./components/CartProvider/CartProvider";


function App() {


    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/restaurants">
                                <Restaurants/>
                            </Route>
                            <Route path="/supermarket">
                                <Supermarket/>
                            </Route>
                            <Route path="/details/:id">
                                <RestaurantDetails/>
                            </Route>
                            <Route path="/product/:id">
                                <ProductDetails/>
                            </Route>
                            <Route path="/cart">
                                <CartPage/>
                            </Route>
                        </Switch>

                         <CartItemsDetails/>
                    </div>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
