import { useContext } from 'react';
import Modala from '../UI/Modal';
import './Cart.css';
import CartContext from '../../context/Cart-context';
import CartItem from './CartItem';
import FormListContext from '../../context/FormList-context';

const Cart = props =>{
    const cartCtx = useContext(CartContext);
    const {updateQuantity} = useContext(FormListContext);

    const total = cartCtx.totalAmount.toFixed(2);
    const hasItem = cartCtx.items.length >0;
    
    const cartAddHandler = (item) =>{
        cartCtx.addItem({...item,quantity:1});
        updateQuantity(item.id, -1);
    };
    const cartRemoveHandler = (id) =>{
        cartCtx.removeItem(id);
        updateQuantity(id, 1);
    };
    const orderHandler = () =>{
        cartCtx.clearCart();
    };

    const cartItem = (
        <div className='cartUl'>
            {cartCtx.items.map((item)=>(
                <CartItem 
                key={item.id} 
                name={item.name} 
                price={item.price} 
                quantity={item.quantity} 
                onRemove={cartRemoveHandler.bind(null,item.id)} 
                onAdd={cartAddHandler.bind(null,item)}
                />
            ))}
        </div>
    );

    return(<Modala onClose={props.onHide}>
        {cartItem}
        <div className='total'>
            <span>Total Amount</span>
            <span>₹{total}</span>
        </div>
        <div className='buttonCart'>
            {hasItem && <div><button className='btn orderbtn' onClick={orderHandler}>Order</button></div>}
            <div><button className='btn closebtn' onClick={props.onHide}>Close</button></div>
        </div>
    </Modala>
)};
export default Cart;