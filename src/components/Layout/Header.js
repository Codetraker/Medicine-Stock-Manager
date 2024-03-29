import './Header.css';
import icon from '../../assets/cart-78-48.png';
import { useContext } from 'react';
import CartContext from '../../context/Cart-context';


const Header = props => {
    const ctxCart = useContext(CartContext);

    const numberofitemCart = ctxCart.items.reduce((currNum, item)=>{
        return currNum + item.quantity;
    }, 0);

    return (
        <div className='Maindiv'>
            <div className='title'>
                <h1>MEDStock .in</h1>
            </div>
            <div className='search'>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 searchForm" role="search">
                    <input type="search" className="form-control" placeholder="Search from Inventory..." aria-label="Search" data-ms-editor="true"/>
                </form>
            </div>
            <div className='login'>
                <div className='loginBox' >
                        <div className='loginPic'>S</div>
                        <div className='h4'>SBA MediCity Ltd</div>
                </div>
            </div>
            <div className='cartBtn' onClick={props.onShow}>
                <span>{numberofitemCart}</span>
                <div className='cartIcon'>
                    <img src={icon} alt='Cart' />
                </div>
            </div>
        </div>
    );
}
export default Header;