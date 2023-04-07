import React, { useState } from 'react';
import { addProduct } from '../../redux/home/action';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = () => {
    const products = useSelector((state) => state.products);

    const nextProductId = (products) => {
        const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
        return maxId + 1;
    }

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const dispatch = useDispatch();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleImageURL = (e) => {
        setImageURL(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const newProduct = {
        id: nextProductId(products),
        name: name,
        price: price,
        category: category,
        quantity: quantity,
        imageURL: imageURL
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(newProduct));
        setName('');
        setCategory('');
        setImageURL('');
        setPrice('');
        setQuantity('');
    }
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form onSubmit={handleSubmit} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input
                        onChange={handleName}
                        value={name}
                        className="addProductInput"
                        id="lws-inputName" type="text"
                        required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input
                        onChange={handleCategory}
                        value={category}
                        className="addProductInput"
                        id="lws-inputCategory" type="text"
                        required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input
                        onChange={handleImageURL}
                        value={imageURL}
                        className="addProductInput"
                        id="lws-inputImage" type="text"
                        required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input
                            onChange={handlePrice}
                            value={price}
                            className="addProductInput"
                            type="number" id="lws-inputPrice"
                            required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input
                            onChange={handleQuantity}
                            value={quantity}
                            className="addProductInput"
                            type="number" id="lws-inputQuantity"
                            required />
                    </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;