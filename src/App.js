import './App.css';
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Supermarket from "./components/Supermarket/Supermarket";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartItemsDetails from "./components/CartItemsDetails/CartItemsDetails";
import CartProvider from "./providers/CartProvider/CartProvider";
import {Grid} from "@material-ui/core";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Checkout from "./components/Checkout/Checkout";
import CheckoutProvider from "./providers/CheckoutProvider/CheckoutProvider";


function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <NavBar />

                    <Grid container>
                        <Grid container xs={12} md={9} justify={"flex-end"}>
                            <Grid item xs={12} md={9}>
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/home" />
                                    </Route>
                                    <Route exact path="/home">
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
                                    <Route path="/checkout">
                                        <CheckoutProvider>
                                            <Checkout/>
                                        </CheckoutProvider>
                                    </Route>
                                    <Route path="/whoWeAre">
                                        <WhoWeAre/>
                                    </Route>
                                </Switch>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CartItemsDetails/>
                        </Grid>
                    </Grid>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
