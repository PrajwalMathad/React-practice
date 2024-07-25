import { useDispatch, useSelector } from "react-redux"
import { setUserName, setPassword, setIsAuthenticated } from "../../store/userReducer";
import Input from "../Input";

function Authentication() {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.userReducer.userName);
    const password = useSelector((state) => state.userReducer.password);

    const login = () => {
        dispatch(setIsAuthenticated());
    }

    const userNameChangeHandler = (event) => {
        dispatch(setUserName(event.target.value));
    }

    const passwordChangeHandler = (event) => {
        dispatch(setPassword(event.target.value));
    }

    return (
        <div className="section">
            <h2 className="section-header">Authentication and User Details: Redux demo</h2>
            <Input label={"User"} value={userName} onChange={userNameChangeHandler} />
            <Input label={"Password"} value={password} onChange={passwordChangeHandler} />
            <button className="btn" onClick={login}>Login</button>
        </div>
    )
}

export default Authentication;