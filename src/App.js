import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React from "react";
import axios from "axios";
import Restaurant from "./models/restaurant";

function App() {
    let [restaurants, setRestaurants] = React.useState([]);
    React.useEffect(() => {
        axios.get('/restaurant').then(response => {
            let data = response.data.map(x => {
                return new Restaurant(x);
            });
            setRestaurants(data);
        });
    }, []);
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer restaurants={restaurants}/>
        </div>
    );
}

export default App;
