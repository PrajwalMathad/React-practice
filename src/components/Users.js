import { useLoaderData, useNavigate } from "react-router-dom";
import { getUsers } from '../httpService';

function Users() {
    const users = useLoaderData();
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }

    return (
        <div className="section">
            <h2 className="section-header">Users: React Router loader</h2>
            <div>
                {users.length && users.map(user => {
                    return (
                        <div className="user">{user.name + ", " + user.email}</div>
                    )
                })}
            </div>
            <button className="btn" onClick={navigateToHome}>Home</button>
        </div>
    )
}

export async function usersLoader() {
    try {
        const userData = await getUsers();
        return userData;
    } catch (err) {
        console.log(err);
    }
}

export default Users;