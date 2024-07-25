import { useContext } from "react";
import { ShoppingContext } from "../../store/shopping-context";

export default function Product({ product }) {
    const shoppingCartContext = useContext(ShoppingContext);
    return (
        <button className="btn" onClick={() => shoppingCartContext.addItemToCart(product.id)}>{product.title}</button>
    )
}