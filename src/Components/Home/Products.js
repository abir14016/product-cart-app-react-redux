import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector((state) => state.home);
    return (
        <div className="productContainer" id="lws-productContainer">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;