import { Link ,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>

        <hr />

        <Outlet />

        <hr />
        </>
    )
}
export default Layout;