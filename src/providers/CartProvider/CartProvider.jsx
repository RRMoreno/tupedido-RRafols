import React, {useState} from 'react';

export const CartContext = React.createContext({
    cartItems: [],
    addItem: (item) => {
    },
    decreaseItem: (item) => {
    },
    removeItem: (item) => {
    },
    setQuantity: (item, amount) => {
    },
    showCart: false,
    setShowCart: (value)=>{},
    emptyCart: ()=>{}
});
function CartProvider(props) {
    const {children} = props;
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    function addItem(item) {
        const copy = [...cartItems];
        const existent = copy.find(x => x.item.id === item.id);
        if (existent) {
            existent.quantity += 1;
            setCartItems(copy);
        } else {
            setCartItems([...cartItems, {item: item, quantity: 1}]);
        }
    }

    function decreaseItem(item) {
        const copy = [...cartItems];
        const existent = copy.find(x => x.item.id === item.id);
        if (existent) {
            existent.quantity -= 1;
            if (existent.quantity === 0) {
                removeItem(item);
            } else {
                setCartItems(copy);
            }
        }
    }

    function removeItem(item) {
        const copy = [...cartItems];
        const index = copy.findIndex(x => x.item.id === item.id);
        if (index !== -1) {
            copy.splice(index, 1);
            setCartItems(copy);
        }
    }

    function setQuantity(item, amount) {
        const existent = cartItems.find(x => x.item.id === item.id);
        if (existent) {
            existent.quantity = amount;
        } else {
            setCartItems([...cartItems, {item: item, quantity: amount}]);
        }
    }
    function shouldShowCart(show){
        setShowCart(show);
    }

    function emptyCart(){
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            removeItem: removeItem,
            setQuantity: setQuantity,
            decreaseItem: decreaseItem,
            addItem: addItem,
            showCart: showCart,
            setShowCart: shouldShowCart,
            emptyCart: emptyCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;