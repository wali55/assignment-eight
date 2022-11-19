import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <h2>Selected Items</h2>
            <button className="chose-one-btn">Chose One for Me</button>
            <button className="chose-again-btn">Chose Again</button>
        </div>
    );
};

export default Cart;