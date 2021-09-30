import React from 'react';
import { addDb, removeDB } from '../../utilities/fakedb';
import './Buy.css'
import Rating from 'react-rating';
const Buy = (props) => {
    const { name, seller, img, wholePrice, stock, key, star } = props.product;


    const handleRemove = key => {
        removeDB(key);
    }
    return (
        <div className='show-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='name'>{name}</h3>
                <p>by: {seller}</p>
                <h5>$ {wholePrice}</h5>
                <p>Only {stock} left in stock-order soon</p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button className='purchase-btn' onClick={() => props.handleClick(props.product)}>Add to Cart</button>
                <button onClick={() => handleRemove(key)}>Remove</button>
            </div>
        </div >
    );
};

export default Buy;