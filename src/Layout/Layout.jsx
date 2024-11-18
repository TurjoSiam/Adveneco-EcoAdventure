import { Outlet } from "react-router-dom";
import Footer from "../LayoutComponents/Footer";
import Header from "../LayoutComponents/Header";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;