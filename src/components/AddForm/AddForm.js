import Card from '../UI/Card';
import './AddForm.css'

const AddForm = props => {
    return (
        <Card className="addForm">
            <div className="heading">
                <h4>Add New Inventory</h4>
            </div>
            <form className='form'>
                <label htmlFor="oid" className="form-label">Medicine Id:</label>
                <input type="number" class="form-control" id="oid" />
                <label htmlFor="name" className="form-label">Medicine Name:</label>
                <input type="text" class="form-control" id="name" />
                <label htmlFor="quantity" className="form-label">Quantity:</label>
                <input type="number" class="form-control" id="quantity" />
                <label htmlFor="price" className="form-label">Price:</label>
                <input type="number" class="form-control" id="price" />
            </form>
        </Card> 
        
    );
};
export default AddForm;