import { useState } from "react";
import FormListContext from "./FormList-context";

const FormListProvider = props => {
    const [product, setProduct] = useState([]);
    
    const addProdHandler = (newItem) =>{
        setProduct([...product,newItem]);
    }

    const updateQuantity = (itemId,quantity) =>{
        setProduct((prev)=>
            prev.map((item)=>
                item.id === itemId ? {...item, quantity: parseInt(item.quantity)+quantity} : item
            )
        );
    };
    const quantityCheck = (prevQuant,newquant)=>{
        if(parseInt(prevQuant) >= newquant ){
           return (parseInt(prevQuant)-newquant);
        }else{
            alert("Stock is not Avalilable");
            return (parseInt(prevQuant));
           
        }   
    };
    const sellItem = (itemId,quantity) =>{
        setProduct((prev)=>
            prev.map((item)=>
                item.id === itemId ? {...item, quantity:quantityCheck(item.quantity,quantity) } : item
            )
        );
    };
    const deleteItem = (itemId) =>{
        setProduct((prev)=>(
            prev.filter((item)=>item.id !== itemId)
        ));
    };

    return (
        <FormListContext.Provider value={{product,addProdHandler,updateQuantity,deleteItem,sellItem}}>
            {props.children}
        </FormListContext.Provider>
    );
};
export default FormListProvider;