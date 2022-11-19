import React from 'react';
import './Car.css'

const Car = ({car}) => {
    return (
        <div className="car">
            <img src={car.img} alt="" />
            <h3>{car.name}</h3>
        </div>
    );
};

export default Car;