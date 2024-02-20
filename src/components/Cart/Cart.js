import Modala from '../UI/Modal';
import './Cart.css';

const Cart = props =>{
    return(<Modala onClose={props.onHide}>
        <div className='total'>
            <span>Total Amount</span>
            <span>₹ 0.00</span>
        </div>
        <div className='buttonCart'>
            <div><button className='btn orderbtn'>Order</button></div>
            <div><button className='btn closebtn' onClick={props.onHide}>Close</button></div>
        </div>
    </Modala>
)};
export default Cart;