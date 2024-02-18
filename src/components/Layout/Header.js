import './Header.css';
import icon from '../../assets/cart-78-48.png'
const Header = props => {
    return (
        <div className='Maindiv'>
            <div className='title'>
                <h1>MEDStock .in</h1>
            </div>
            <div className='search'>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" className='searchForm'>
                    <input type="search" class="form-control" placeholder="Search from Inventory..." aria-label="Search" spellcheck="false" data-ms-editor="true"/>
                </form>
            </div>
            <div className='login'>
                <div className='loginBox' >
                        <div className='loginPic'>S</div>
                        <div className='h4'>SBA MediCity Ltd</div>
                </div>
            </div>
            <div className='cartBtn'>
                <span>1</span>
                <div className='cartIcon'>
                    <img src={icon} alt='Cart' />
                </div>
            </div>
        </div>
    );
}
export default Header;