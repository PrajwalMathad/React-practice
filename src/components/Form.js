import { useState, useCallback } from "react";
import Input from "./Input";
import Toast from "./Toast";
import classes from './Form.module.css';

function Form(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);

    console.log("Form rendered");
    const handleToast = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }

    const nameChangeHandler = useCallback((event) => {
        setName(event.target.value);
    }, [])

    const emailChangeHandler = useCallback((event) => {
        setEmail(event.target.value);
    }, [])

    return (
        <div className="section">
            <h2 className="section-header">Form: memo and useCallBack</h2>
            {/* Toast will be rendered in another div outside this component using portals.  */}
            <p>Inputs are re-rendered only if the input/props are changed. The state setters are handled using useCallback thus form compoenent will be 
                re-rendered but the Input will be re-rendered only for the one whose value changes.
            </p>
            {showToast && <Toast message="Portal example. Toast is here!" />}
            <Input label={"Name"} value={name} onChange={nameChangeHandler} />
            <Input label={"Email"} _invalid={!email} value={email} onChange={emailChangeHandler} />
            <button className={classes.btn} onClick={handleToast}>Submit</button>
        </div>
    )
}

export default Form;