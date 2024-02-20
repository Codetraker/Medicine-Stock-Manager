import Card from '../UI/Card';
import './AddForm.css'

const AddForm = props => {
    return (
        <Card className="addForm">
            <div className="heading">
                <h4>+ Add New Inventory</h4>
            </div>
            <form className='form'>
                <div className='idDiv'> 
                    {/* <label htmlFor="oid" className="form-label">Medicine Id:</label> */}
                    <input type="number" class="form-control" id="oid" placeholder='Enter Id ...' />
                </div>
                <div className='nameDiv'>
                    {/* <label htmlFor="name" className="form-label">Medicine Name:</label> */}
                    <input type="text" class="form-control" id="name" placeholder='Enter Medicine Name ...' />
                </div>
                <div className='priceDiv'>
                    {/* <label htmlFor="price" className="form-label">Price:</label> */}
                    <input type="number" class="form-control" id="price" placeholder='Enter Price/item ...'/>
                </div>
                <div className='quantDiv'>
                    {/* <label htmlFor="quantity" className="form-label">Quantity:</label> */}
                    <input type="number" class="form-control" id="quantity" placeholder='Quantity...' />
                </div>
                <div className='button'>
                    <button type="button" class="btn btn-success">+Add New</button>
                </div>
            </form>
        </Card> 
        
    );
};
export default AddForm;