import React from 'react';
import Products from './Products';
import AddProduct from './AddProduct';
// import '../Output.css';

const Home = () => {
    return (
        <main className="py-16">
            <div className="productWrapper">
                <Products></Products>
                <div>
                    <AddProduct></AddProduct>
                </div>
            </div>
        </main>
    );
};

export default Home;