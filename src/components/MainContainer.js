import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function MainContainer() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default MainContainer;