
import './Cart.css'

const Cart = ({cart, choseForMe, choseAgain}) => {

    return (
        <div className="cart">
            <h2>Selected Items</h2>
            {
                cart.map(item => 
                <h3 key={item}>{item}</h3>
                )
            }
            <button onClick={() => choseForMe(cart)} className="chose-one-btn">Chose One for Me</button>
            <button onClick={choseAgain} className="chose-again-btn">Chose Again</button>
        </div>
    );
};

export default Cart;