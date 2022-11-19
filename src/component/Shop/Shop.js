import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setCars(data));
    }, [])

    const handleClick = (name) => {
        if(cart.indexOf(name) === -1){
            const newCart = [...cart, name];
            setCart(newCart); 
        }
    }

    const choseForMe = (name) => {
        const newCart = [];
        newCart.push(name[name.length - 1]);
        setCart(newCart);
    }

    const choseAgain = () => {
        const newCart = [];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                cars.map((car) => <Car
                car={car}
                handleClick={handleClick}
                key={car.id}
                ></Car>)
               }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                choseForMe={choseForMe}
                choseAgain={choseAgain}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;