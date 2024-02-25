import './App.css';
import AddForm from './components/AddForm/AddForm';
import Cart from './components/Cart/Cart';
import FormList from './components/Layout/FormList';
import Header from './components/Layout/Header';
import { useState } from 'react';
import FormListProvider from './context/FormListProvider';



function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showCart = () => {
    setIsCartShow(true);
  }
  const hideCart = () => {
    setIsCartShow(false);
  }
 
  return (
    <FormListProvider>
      {isCartShow && <Cart onHide={hideCart}/>} 
      <Header onShow={showCart}/>
      <AddForm />
      <FormList />
    </FormListProvider>
  );
}

export default App;


