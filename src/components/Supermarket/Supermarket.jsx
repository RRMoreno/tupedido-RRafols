import React from 'react';
import axios from "axios";
import ProductList from "../ProductList/ProductList";
import Product from "../../models/product";

function Supermarket() {
    let [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        axios.get('/products').then(response => {
            let data = response.data.map(x => {
                return new Product(x);
            });
            setProducts(data);
        });
    }, []);
    return (
        <ProductList products={products}/>
    );
}

export default Supermarket;