import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector((state) => state.products);
    return (
        <div className="productContainer" id="lws-productContainer">
            {
                products.length <= 0 ? <h2>No product found. But you can add</h2> :
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
            }
        </div>
    );
};

export default Products;