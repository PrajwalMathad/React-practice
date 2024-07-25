import { createPortal } from 'react-dom';
import { useContext, useEffect, useRef } from "react";
import { ShoppingContextReducer } from '../../store/shopping-context-reducer';

function CartModal2({ open, close }) {
    const { items } = useContext(ShoppingContextReducer);
    const dialogRef = useRef()

    useEffect(() => {
        if(open) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [open]);
    
    const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return createPortal(
        <dialog id='modal' className='dialog' ref={dialogRef} onClose={close}>
            <h2>Cart 2</h2>
            <p>Cart opened using useEffect and the state for opening and closing modal</p>
            {items.length ?
                <>
                    <ul>
                        {items.map(item => {
                            return (
                                <div style={{ fontWeight: "bold" }}>
                                    <span style={{ color: "blueviolet" }}>{item.name}:</span>
                                    <span>{" " + item.quantity}</span>
                                </div>
                            )
                        })}
                    </ul>
                    <span>Total: {total.toFixed(2)}</span>
                </>
                : <p>Cart is emplty!</p>}

            <form method="dialog" id="modal-actions">
                <button className='btn close-btn'>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}

export default CartModal2;