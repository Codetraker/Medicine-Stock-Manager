import { useContext, useRef } from 'react';
import FormListContext from '../../context/FormList-context';

import Card from '../UI/Card';
import './AddForm.css'

const AddForm = props => {
    const {addProdHandler} = useContext(FormListContext);


    const medId = useRef('');
    const medName = useRef('');
    const medPrice = useRef('');
    const medQuant = useRef('');
    
    const submitHandler = (event) =>{
        event.preventDefault();
        const newItem = {
            id : medId.current.value ,
            name : medName.current.value ,
            price : medPrice.current.value ,
            quantity : medQuant.current.value
        }
        addProdHandler(newItem);

        medId.current.value = '';
        medName.current.value = '';
        medPrice.current.value = '';
        medQuant.current.value = '';
    }
    
    return (
        <Card className="addForm">
            <div className="heading">
                <h4>+ Add New Inventory</h4>
            </div>
            <form className='form' onSubmit={submitHandler}>
                <div className='idDiv'> 
                    {/* <label htmlFor="oid" className="form-label">Medicine Id:</label> */}
                    <input ref={medId} type="number" className="form-control" id="oid" placeholder='Enter Id ...' min={0} required />
                </div>
                <div className='nameDiv'>
                    {/* <label htmlFor="name" className="form-label">Medicine Name:</label> */}
                    <input ref={medName} type="text" className="form-control" id="name" placeholder='Enter Medicine Name ...' required />
                </div>
                <div className='priceDiv'>
                    {/* <label htmlFor="price" className="form-label">Price:</label> */}
                    <input ref={medPrice} type="number" className="form-control" id="price" placeholder='Enter Price/item ...' min={1} required/>
                </div>
                <div className='quantDiv'>
                    {/* <label htmlFor="quantity" className="form-label">Quantity:</label> */}
                    <input ref={medQuant} type="number" className="form-control" id="quantity" placeholder='Quantity...' min={0} required />
                </div>
                <div className='button'>
                    <button type="submit" className="btn btn-success">+Add New</button>
                </div>
            </form>
        </Card> 
        
    );
};
export default AddForm;