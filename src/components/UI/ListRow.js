import './ListRow.css';
import { useState } from 'react';
const ListRow = props => {
    if(props.quantity === '0'){
        var status = false;
    }else{
        var status = true;
    }
    return (
        <div className={`listrow ${props.className}`}>
            <div className='element'>{props.id}</div>
            <div className='element'>{props.mname}</div>
            <div className='element'>Rs.{props.price}</div>
            <div className='element'>{props.quantity}</div>
            <div className='element'><button type="button" className="btn add">+Add</button></div>
            <div className='element'><button type="button" className="btn delete">Delete</button></div>
            {<div className='element'><button type="button" className="btn sell" disabled={status ? '' : 'disabled'}>Sell</button></div>}
            {status && <div className='element' style={{color:'green'}}>In Stock</div>}
            {!status && <div className='element' style={{color:'red'}}>Out of Stock</div>}
        </div>
    );
}
export default ListRow;