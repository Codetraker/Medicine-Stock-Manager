import Card from '../UI/Card';
import ListRow from '../UI/ListRow';
import './FormList.css';

const FormList = props =>{
    
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
                <div className='element'>Status</div>
            </div>
            {/* <div className='formBodyEmpty'>No item to display. Stock is empty.....</div> */}
            <ListRow id='6567' mname='pentoprazol-30' price='120.00' quantity='100' />
            <ListRow id='9578' mname='raboprazol-30' price='129.99' quantity='0' />
        </Card>
    );
}
export default FormList;