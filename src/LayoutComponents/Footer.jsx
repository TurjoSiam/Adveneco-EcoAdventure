import { Link } from "react-router-dom";
import logo from "../../src/assets/logo.png"
import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


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
                            <a href="https://www.facebook.com/tur.jo.9275">
                            <FaFacebook className="text-3xl"></FaFacebook>
                            </a>
                            <a href="https://x.com/SiamTurjo">
                                <FaTwitter className="text-3xl"></FaTwitter>
                            </a>
                            <a href="https://www.youtube.com/@turjosiam">
                                <FaYoutube className="text-3xl"></FaYoutube>
                            </a>
                            <a href="https://discord.com/channels/1254673307735691376/1254683037342498847">
                                <FaDiscord className="text-3xl"></FaDiscord>
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