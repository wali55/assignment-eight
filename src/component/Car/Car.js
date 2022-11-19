import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Car.css'

const Car = ({car, handleClick}) => {
    return (
        <div className="car">
            <img src={car.img} alt="" />
            <div className="car-info">
                <h3>{car.name}</h3>
                <p>Price: ${car.price}</p>
            </div>
            <button className="btn-cart">
                <p onClick={() => handleClick(car.name)}>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;