import './App.css';
import AddForm from './components/AddForm/AddForm';
import Header from './components/Layout/Header';

function App() {
  return (
    <>
      <Header />
      <AddForm />
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