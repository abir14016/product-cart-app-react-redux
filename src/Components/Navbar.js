import React, { useState } from 'react';
import logoImage from '../../src/images/logo.png';
import Home from './Home/Home';
import Carts from './ShoppingCart/Carts';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const carts = useSelector((state) => state.carts);
    const cartQuantity = carts.reduce((total, cart) => parseInt(total) + parseInt(cart.quantity), 0);
    const [showHome, setShowHome] = useState(true);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

    const handleHome = () => {
        setShowHome(true);
        setShowShoppingCart(false);
    }

    const handleShoppingCart = () => {
        setShowHome(false);
        setShowShoppingCart(true);
    }

    return (
        <div>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="/">
                        <img src={logoImage} alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <button onClick={handleHome} className="navHome" id="lws-home"> Home </button>
                        <button onClick={handleShoppingCart} className="navCart" id="lws-cart">
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{cartQuantity}</span>
                        </button>
                    </div>
                </div>
            </nav>
            {showHome && <Home></Home>}
            {showShoppingCart && <Carts></Carts>}
        </div>
    );
};

export default Navbar;