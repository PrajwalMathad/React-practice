import { useRef, useState } from "react";
import Cart from "./Cart";
import Cart2 from "./Cart2";
import ShoppingContextProvider from "../../store/shopping-context";
import { DUMMY_PRODUCTS } from "./dataStore";
import Product from "./Product";
import ShoppingContextReducerProvider from "../../store/shopping-context-reducer";
import Product2 from "./Product2";

function Shopping() {
    const [cartModalOpen, setCartModalopen] = useState(false);
    const cartRef = useRef();

    const onCartOpen = () => {
        cartRef.current.open();
    }

    const onCart2Open = () => {
        setCartModalopen(true);
    }

    const onCart2Close = () => {
        setCartModalopen(false);
    }

    return (
        <>
            <ShoppingContextProvider>
                <div className="section">
                    <Cart ref={cartRef} />
                    <h2 className="section-header">Context API: Shopping cart</h2>
                    {
                        DUMMY_PRODUCTS.map(product => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                    <button className="btn cart-btn" onClick={onCartOpen}> Cart </button>
                </div>
            </ShoppingContextProvider>
            <ShoppingContextReducerProvider>
            <div className="section">
                    <Cart2 open={cartModalOpen} close={onCart2Close}/>
                    <h2 className="section-header">Context API with useReducer: Shopping cart</h2>
                    {
                        DUMMY_PRODUCTS.map(product => {
                            return (
                                <Product2 key={product.id} product={product} />
                            )
                        })
                    }
                    <button className="btn cart-btn" onClick={onCart2Open}> Cart </button>
                </div>
            </ShoppingContextReducerProvider>
        </>
    )
}

export default Shopping;