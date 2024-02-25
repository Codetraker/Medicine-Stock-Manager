import './ListRow.css';
import { useContext, useState } from 'react';
import FormListContext from '../../context/FormList-context';

const ListRow = props => {
    const [quantity, setQuantity] = useState(1);

    const ctxContext = useContext(FormListContext);
    
    const quantChangeHandler = (event) => {
        setQuantity(event.target.value);
    };
    const stockAddHandler = () => {
        ctxContext.updateQuantity(props.id,parseInt(quantity));
        setQuantity(1);
    };
    const deleteItemHandler = () =>{
        ctxContext.deleteItem(props.id);
    };
    const sellItemHandler = () =>{
        ctxContext.sellItem(props.id,parseInt(quantity));
        setQuantity(1);
    };

    const status = parseInt(props.quantity) > 0;
    const price = Number(props.price).toFixed(2);
    
    return (
        <div className={`listrow ${props.className}`}>
            <div className='element'>{props.id}</div>
            <div className='element'>{props.mname}</div>
            <div className='element'>Rs.{price}</div>
            <div className='element'>{props.quantity}</div>
            <div className='element'><button type="button" className="btn add" onClick={stockAddHandler}>+Add</button></div>
            <div className='element'><button type="button" className="btn delete" onClick={deleteItemHandler}>Delete</button></div>
            {<div className='element'><button type="button" className="btn sell" disabled={status ? '' : 'disabled'} onClick={sellItemHandler}>Sell</button></div>}
            <div className='element'>
                <input type="number" className="form-control" id="quantityToSellAdd" value={quantity} min='1' onChange={quantChangeHandler} />
            </div>
            {status && <div className='element' style={{color:'green'}}>In Stock</div>}
            {!status && <div className='element' style={{color:'red'}}>Out of Stock</div>}
        </div>
    );
}
export default ListRow;