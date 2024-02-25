import CartListContext from "./Cart-context";

const CartProvider = props =>{
    const addItemToCart = item =>{};

    const removeItemFromCart = id =>{};
    
    const cartContextValue = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };
    
    return (
        <CartListContext.Provider value={cartContextValue}>
            {props.children}
        </CartListContext.Provider>
    );
}
export default CartProvider;