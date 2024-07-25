import { useDispatch, useSelector } from "react-redux"
import { setIsAuthenticated } from "../../store/userReducer";

function Profile() {
    const userName = useSelector((state) => state.userReducer.userName);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setIsAuthenticated());
    }
    
    return(
        <div className="section">
            <h2 className="section-header">Authentication and User Details: Redux demo</h2>
            <section className="counter">This is {userName}</section>
            <button className="btn" onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile;