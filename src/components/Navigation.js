import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
    return (
        <header>
            <nav>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/users">Users</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;