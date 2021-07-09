import './App.css';
import NavBar from "./components/NavBar/NavBar";
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Supermarket from "./components/Supermarket/Supermarket";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import {CartContext} from "./context/cartContext";
import CartItemsDetails from "./components/CartItemsDetails/CartItemsDetails";
import CartPage from "./components/CartPage/CartPage";


function App() {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(null);

    const handleClick = () => {
        setShowCart(!showCart);
    };

    function addItem(item) {
        const copy = [...cartItems];
        const existent = copy.find(x => x.item.id === item.id);
        if (existent) {
            existent.quantity += 1;
            setCartItems(copy);
        } else {
            setCartItems([...cartItems, {item: item, quantity: 1}]);
        }
    }

    function decreaseItem(item) {
        const copy = [...cartItems];
        const existent = copy.find(x => x.item.id === item.id);
        if (existent) {
            existent.quantity -= 1;
            if (existent.quantity === 0) {
                removeItem(item);
            } else {
                setCartItems(copy);
            }
        }
    }

    function removeItem(item) {
        const copy = [...cartItems];
        const index = copy.findIndex(x => x.item.id === item.id);
        if (index !== -1) {
            copy.splice(index, 1);
            setCartItems(copy);
        }
    }

    function setQuantity(item, amount) {
        const existent = cartItems.find(x => x.item.id === item.id);
        if (existent) {
            existent.quantity = amount;
        } else {
            setCartItems([...cartItems, {item: item, quantity: amount}]);
        }
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            removeItem: removeItem,
            setQuantity: setQuantity,
            decreaseItem: decreaseItem,
            addItem: addItem
        }}>
            <Router>
                <div className="App">
                    <NavBar onCartClick={handleClick}/>
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

                        {showCart && <CartItemsDetails/>}
                    </div>
                </div>
            </Router>
        </CartContext.Provider>

    );
}

export default App;
