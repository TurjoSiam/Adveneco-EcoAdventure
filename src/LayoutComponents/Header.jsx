import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../src/assets/logo.png"
import Tippy from "@tippyjs/react";

const Header = () => {

    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/");
    }

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('sign out successfully');
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutus">About us</NavLink></li>
        <li><NavLink to="/contactus">Contact us</NavLink></li>
        {
            user && <>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/updateprofile">Update Profile</NavLink></li>
            </>
        }
    </>


    return (
        <div className="navbar bg-base-100 md:5 lg:px-20 mx-auto font-spinnaker sticky top-0 z-50 bg-[#ffffffaa] backdrop-blur-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center cursor-pointer" onClick={handleLogo}>
                    <img className="w-14" src={logo} alt="logo" />
                    <span className="hidden md:block text-3xl font-carter">Adveneco</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ?
                        <>
                            <Tippy content={<span className="py-1 px-2 rounded-lg text-white bg-[#000000a2]">{user.displayName}</span>}>
                                <img className="w-10 h-10 object-cover rounded-full mr-2" src={user?.photoURL} alt="user photo" />
                            </Tippy>
                            <a onClick={handleSignOut} className="btn ease-in duration-300 bg-gradient-to-tr from-orange-500 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500">Logout</a>
                        </>
                        :
                        <Link className="btn ease-in duration-300 bg-gradient-to-tr from-orange-500 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500" to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;