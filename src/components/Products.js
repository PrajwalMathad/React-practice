import { useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }

    return (
        <div className="section">
            <h2 className="section-header">Products: React Router</h2>
            <button className="btn" onClick={navigateToHome}>Home</button>
        </div>
    )
}

export default Products;