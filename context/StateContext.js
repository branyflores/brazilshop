import React, { createContext, useContext, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';




const Context = createContext();

export const StateContext = ({children}) => {
const [showCart, setShowCart] = useState (false);
const [cartItems, setCartItems] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const [totalQuantities, setTotalQuantities] = useState(0);
const [qty, setQty] = useState(1);

let foundProduct;
let index;

const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    if (checkProductInCart) {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity );
    setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

    const updatedCartItems =  cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
        } 
    })

    setCartItems(updatedCartItems);
    } else {
        product.quantity = quantity;
        setCartItems([...cartItems, {...product}]);
    }
    toast.success(`${qty} ${product.name} added to your cart.`)
}

const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id ===
        id);

        if(value === 'inc') {
        setCartItems([...cartItems, {...foundProduct, quantity:
         foundProduct.quantity + 1} ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)  
        setTotalQuantities(prevTotalQuantity => prevTotalQuantity + 1)

        } else if(value === 'dec') {
            setCartItems([...cartItems, {...foundProduct, quantity:
                foundProduct.quantity - 1} ]);
               setTotalPrice((prevTotalPrice) => prevTotalPrice -  foundProduct.price)  
               setTotalQuantities(prevTotalQuantity => prevTotalQuantity - 1)

        }
             
         
    
    }

const incQty = () => {
    setQty((prevQty) => prevQty + 1);
}
 
const decQty = () => {
    setQty((prevQty) => {
        if (prevQty - 1 < 1 ) return 1;

        return prevQty - 1;
 });
}

return(
    <Context.Provider
    value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        onAdd,
        incQty,
        decQty,
        toggleCartItemQuantity
    }}
    >
    {children}
    </Context.Provider>


    )
}


export const useStateContext = () => useContext (Context);