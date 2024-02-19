import Card from '../UI/Card';
import './FormList.css';

const FormList = props =>{
    
    return (
        <Card className='formlistMain'>
            <div className='formH4'>
                <h4>Inventory</h4>
            </div>
            <div className='formBodyEmpty'>No item to display. Stock is empty.....</div>
        </Card>
    );
}
export default FormList;