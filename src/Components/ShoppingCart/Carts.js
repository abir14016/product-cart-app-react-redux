import React from 'react';
import Cart from './Cart';
import Bill from './Bill';
import { useSelector } from 'react-redux';

const Carts = () => {
    const carts = useSelector((state) => state.carts);
    console.log(carts);
    return (
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Carts</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        {
                            carts.length <= 0 ? <h2>Shopping cart is empty</h2> : carts.map(cart => <Cart
                                key={cart.id}
                                cart={cart}
                            ></Cart>)
                        }
                    </div>
                    <Bill></Bill>
                </div>
            </div>
        </main>
    );
};

export default Carts;