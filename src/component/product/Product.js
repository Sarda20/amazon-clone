import React, { useEffect, useState } from 'react';
import { addDb, getStoredCart } from '../../utilities/fakedb';
import Buy from '../buy/Buy';
import Cart from '../cart/Cart';
import './Product.css'
const Product = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setdisplayProduct] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setdisplayProduct(data);
            });
    }, [])

    useEffect(() => {
        if (products.lenght) {
            const savedCart = getStoredCart();
            const storedCart = [];

            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])

    const handleClick = (product) => {
        const newcart = [...cart, product];
        setCart(newcart);
        addDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setdisplayProduct(matchedProduct);
    }
    return (
        <div>
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder="Search Product" />
            </div>
            <div className='container'>
                <div className='product-container'>
                    {
                        displayProduct.map(product => <Buy key={product.key} product={product} handleClick={handleClick}></Buy>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Product;