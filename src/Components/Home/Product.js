import React from 'react';
import { addToCart } from '../../redux/home/action';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/shoppingCart/action';

const Product = ({ product }) => {
    const { id, name, category, price, quantity, imageURL } = product;
    const carts = useSelector((state) => state.carts);

    console.log(carts)

    const nextCartId = (carts) => {
        const maxId = carts.reduce((maxId, cart) => Math.max(cart.id, maxId), -1);
        return maxId + 1;
    }
    const dispatch = useDispatch();

    const newProduct = {
        id: nextCartId(carts),
        key: id,
        name: name,
        category: category,
        price: parseInt(price),
        quantity: 1,
        imageURL: imageURL
    }

    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId));
        dispatch(addProductToCart(productId, newProduct));
    }

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={imageURL} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{name}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
                </div>
                <button
                    disabled={quantity <= 0}
                    onClick={() => handleAddToCart(id)}
                    className="lws-btnAddToCart">Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;