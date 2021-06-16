import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {Restaurants} from "./api/restaurants";

function App() {
    const restaurants = Restaurants;
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer restaurants={restaurants}/>
        </div>
    );
}

export default App;
