import { useDispatch, useSelector } from "react-redux";
import { incremenet, decremenet, reset } from "../store/counterReducer";


function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counterReducer.counter);
    const incrementCounter = () => {
        dispatch(incremenet());
    }

    const decrementCounter = () => {
        dispatch(decremenet());
    }

    const resetCounter = () => {
        dispatch(reset());
    }

    return (
        <div className="section">
            <h2 className="section-header">Counter: Redux demo</h2>
            <section className="counter">{counter}</section>
            <button className="btn cart-btn" onClick={incrementCounter}> Increment </button>
            <button className="btn cart-btn" onClick={decrementCounter}> Decrement </button>
            <button className="btn" onClick={resetCounter}> Reset </button>
        </div>
    )
}

export default Counter;