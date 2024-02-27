import { useEffect, useReducer } from "react";
import CartListContext from "./Cart-context";


const defaultCartState = {
    items :[],
    totalAmount:0
};
const cartReducer = (state,action) => {
    if (action.type === 'ADD') {
        const existingItem = state.items.find(item => item.id === action.item.id);
        let updatedItems;
        if (existingItem) {
            updatedItems = state.items.map(item =>
                item.id === action.item.id ? { ...item, quantity: item.quantity + action.item.quantity } : item
            );
        } else {
            updatedItems = state.items.concat(action.item);
        }
        const updatedAmount = state.totalAmount + action.item.price * action.item.quantity;
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }
    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        if (existingItemIndex !==-1) {
            const existingItem = state.items[existingItemIndex];
            let updatedItems;
            if (existingItem.quantity === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            } else {
                updatedItems = state.items.map(item =>
                    item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            const updatedAmount = state.totalAmount - existingItem.price;
            return {
                items: updatedItems,
                totalAmount: updatedAmount
            };
        }
    }
    if(action.type === 'CLEAR'){
        return defaultCartState;
    }
    
    return defaultCartState;
}
const CartProvider = props =>{
    const storedCartData = JSON.parse(localStorage.getItem('cart'));
    const initialCartState = storedCartData ? storedCartData : defaultCartState;
    
    const [cartState, dispatchCartAction] = useReducer(cartReducer,initialCartState);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState));
    }, [cartState]);

    const addItemToCart = item =>{
        dispatchCartAction({type: 'ADD', item:item});
    };

    const removeItemFromCart = id =>{
        dispatchCartAction({type: 'REMOVE',id:id});
    };
    const clearItemFromCart = () => {
        dispatchCartAction({ type: 'CLEAR' });
    };

    const cartContextValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart: clearItemFromCart
    };
    
    return (
        <CartListContext.Provider value={cartContextValue}>
            {props.children}
        </CartListContext.Provider>
    );
}
export default CartProvider;