import React from 'react';
import ProductCard from "../ProductCard/ProductCard";


export default function ProductList(props) {

    const {products} = props;

    return (
        <div className='list-container'>
            {products.map((product, index) => {
                return <ProductCard key={index} product={product}/>
            })}
        </div>
    );
}
