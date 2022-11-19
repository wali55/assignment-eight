import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className="cart">
            <h2>Selected Items</h2>
            {
                cart.map(item => 
                <h3 key={item}>{item}</h3>
                )
            }
            <button className="chose-one-btn">Chose One for Me</button>
            <button className="chose-again-btn">Chose Again</button>
        </div>
    );
};

export default Cart;