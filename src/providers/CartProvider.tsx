import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";
//using randomUUID to generate unique identifier for each product
import { randomUUID } from 'expo-crypto';


type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
    total: number;
};

const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {},
    updateQuantity: () => {},
    total: 0
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Product, size: CartItem['size']) => {
        //if already in cart, increment quantity
        //im just reusing the update quantity function from the bottom to increment quantity
        const existingItem = items.find(item => item.product === product && item.size === size);

        if(existingItem){
            updateQuantity(existingItem.id, 1);
            return;
        }


        const newCarItem: CartItem ={
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1,
        };

        setItems([newCarItem, ...items]);
    };

//updateQuantity
const updateQuantity = (itemId: string, amount: -1 | 1) => {
    //to increment the quantity of the item in the cart by pressing plus and minus
    const updatedItems = items.map((item) => 
        item.id !== itemId 
            ? item 
            : {...item, quantity: item.quantity + amount }
    ).filter((item) => item.quantity > 0)
    setItems(updatedItems);
};

//whenever the quantity is added to the cart the total of the product will increase 
const total = items.reduce(
    (sum, item) => 
        (sum += item.product.price * item.quantity), 
    0
);

return (
        <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);