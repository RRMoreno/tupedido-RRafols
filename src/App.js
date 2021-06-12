import './App.css';
import Header from "./components/header/NavBar";
import HelloWorld from "./components/HelloWorld/HelloWorld";

function App() {
    const name = 'Roxana';
  return (
    <div className="App">
      <Header/>
        <HelloWorld name={name}/>
    </div>
  );
}

export default App;
