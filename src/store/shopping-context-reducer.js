import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../components/shopping/dataStore";

export const ShoppingContextReducer = createContext({
    items: [],
    addItemToCart: () => { }
});

function shoppingCartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];
        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
                id: action.payload,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }

        return {
            items: updatedItems,
        };

    }
    return state;
}

export default function ShoppingContextReducerProvider({ children }) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer,
        {
            items: []
        });

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart
    }
    function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id
        });
    }

    return (
        <ShoppingContextReducer.Provider value={ctxValue} >
            {children}
        </ShoppingContextReducer.Provider>
    )
}
