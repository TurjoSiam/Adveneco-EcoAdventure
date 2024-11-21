import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png"


const Footer = () => {
    return (
        <footer className="footer flex flex-col items-center bg-slate-200 text-base-content rounded md:p-10 p-5 font-spinnaker">
            <div className="w-full md:px-5 lg:px-40 flex flex-col md:flex-row items-center justify-between">
                <Link to="/"><div className="flex items-center">
                    <img className="w-24" src={logo} alt="photo" />
                    <span className="hidden md:block text-3xl font-carter">Adveneco</span>
                </div></Link>
                <div className="md:space-y-5">
                    <nav className="flex items-center gap-5">
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About us</Link>
                        <Link to="/contactus">Contact us</Link>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com">
                                <i className="fa-brands fa-facebook text-3xl"></i>
                            </a>
                            <a href="https://www.twitter.com">
                                <i className="fa-brands fa-twitter text-3xl"></i>
                            </a>
                            <a href="https://www.youtube.com">
                                <i className="fa-brands fa-youtube text-3xl"></i>
                            </a>
                            <a href="https://www.discord.com">
                                <i className="fa-brands fa-discord text-3xl"></i>
                            </a>

                        </div>
                    </nav>
                </div>
            </div>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Turjo Siam</p>
            </aside>
        </footer>
    );
};

export default Footer;