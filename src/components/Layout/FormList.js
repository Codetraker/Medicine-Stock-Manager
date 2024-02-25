import { useContext } from 'react';
import FormListContext from '../../context/FormList-context';

import Card from '../UI/Card';
import ListRow from '../UI/ListRow';
import './FormList.css';


const FormList = props =>{
    const ctxProduct = useContext(FormListContext);
    
    return (
        <Card className='formlistMain'>
            <div className='formH4'>
                <h4>Inventory</h4>
            </div>
            <div className='headingList'>
                <div className='element'>ID</div>
                <div className='element'>Medicine Name</div>
                <div className='element'>Price/item</div>
                <div className='element'>Quantity</div>
                <div className='element'>Action</div>
                <div className='element'>Sell/Add</div>
                <div className='element'>Status</div>
            </div>
            {ctxProduct.product.length===0 ? (
                <div className='formBodyEmpty'>No item to display. Stock is empty.....</div>
            ) : (
                ctxProduct.product.map((item) => (
                    <ListRow key={item.id} id={item.id} mname={item.name} price={item.price} quantity={item.quantity} />
                ))
            )}
        </Card>
    );
}
export default FormList;