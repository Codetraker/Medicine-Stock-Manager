import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return (
        <div className='backdrop' onClick={props.onCloseBackdrop}></div>
    );
}
const ModalOverlay = props => {
    return (
        <div className='modalOverlays'>
            <div>{props.children}</div>
        </div>
    );
}

const newportal = document.getElementById('overlays');

const Modala = props =>{
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onCloseBackdrop={props.onClose}/> , newportal)};
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, newportal)};
        </>
    );
}
export default Modala;