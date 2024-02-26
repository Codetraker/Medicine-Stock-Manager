import './CartItem.css';
const CartItem = props =>{
   
    return (
        <li className="cartLi">
            <div className="detail">
                <h4>{props.name}</h4>
                <span>₹ {props.price}.00</span>
            </div>
            <div className="btns">
                <button onClick={props.onRemove} className='lightBtn'>−</button>
                <div className='quantity'><span className='span'>x{props.quantity}</span></div>
                <button onClick={props.onAdd} className='lightBtn'>+</button>
            </div>
        </li>
    );
}
export default CartItem;