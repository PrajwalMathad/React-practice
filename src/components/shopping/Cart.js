import { createPortal } from 'react-dom';
import { useRef, forwardRef, useImperativeHandle, useContext } from "react";
import { ShoppingContext } from '../../store/shopping-context';

const CartModal = forwardRef(function Cart(props, ref) {
    const { items } = useContext(ShoppingContext);
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return createPortal(
        <dialog id='modal' className='dialog' ref={dialog}>
            <h2>Cart</h2>
            <p>Cart opened using forward ref and useImperativeHandle hook</p>
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
})

export default CartModal;