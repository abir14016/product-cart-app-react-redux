import React from 'react';
import Cart from './Cart';
import Bill from './Bill';

const Carts = () => {
    return (
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        <Cart></Cart>
                    </div>
                    <Bill></Bill>
                </div>
            </div>
        </main>
    );
};

export default Carts;