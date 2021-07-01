import './App.css';
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Supermarket from "./components/Supermarket/Supermarket";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";


function App() {

    return (
        <Router>
            <div className="App">
                <NavBar/>
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
                </Switch>
            </div>

        </Router>

    );
}

export default App;
