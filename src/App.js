import './App.css';
import AddForm from './components/AddForm/AddForm';
import Cart from './components/Cart/Cart';
import FormList from './components/Layout/FormList';
import Header from './components/Layout/Header';
import { useState } from 'react';

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCart = () => {
    setIsCartShow(true);
  }
  const hideCart = () => {
    setIsCartShow(false);
  }
  return (
    <>
      {isCartShow && <Cart onHide={hideCart}/>} 
      <Header onShow={showCart}/>
      <AddForm />
      <FormList />
    </>
  );
}

export default App;


// // <uniquifier>: Use a uniquifier for the class name
// // <weight>: Use a value from 100 to 900

// .montserrat-<uniquifier> {
//   font-family: "Montserrat", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }