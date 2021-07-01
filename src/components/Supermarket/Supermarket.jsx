import React from 'react';
import ProductList from "../ProductList/ProductList";
import Product from "../../models/product";
import {getFirestore} from "../../firebase";

function Supermarket() {
    let [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("products");
        itemCollection.get().then(querySnapshot => {
            if (querySnapshot.empty) {
                setProducts([]);
            } else {
                const prods = querySnapshot.docs.map(prod => {
                    return new Product(prod.data());
                });
                setProducts(prods);
            }
        })
    }, []);
    return (
        <ProductList products={products}/>
    );
}

export default Supermarket;