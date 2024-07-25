import { useContext } from "react";
import { ShoppingContextReducer } from "../../store/shopping-context-reducer";

export default function Product2({ product }) {
    const shoppingReducer = useContext(ShoppingContextReducer);
    return (
        <button className="btn" onClick={() => shoppingReducer.addItemToCart(product.id)}>{product.title}</button>
    )
}