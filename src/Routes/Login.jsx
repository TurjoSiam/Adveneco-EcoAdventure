import { useContext, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Login = () => {

    const navigate = useNavigate();

    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                navigate("/");
                toast.success('Login successful', {
                    position: "bottom-right",
                    className: 'foo-bar'
                })
            })
            .catch(error => {
                console.log('ERROR', error.message);
                toast.error('Something went wrong, please try again', {
                    position: "bottom-right",
                    className: 'foo-bar'
                })
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate("/");
                toast.success('Login successful', {
                    position: "bottom-right",
                    className: 'foo-bar'
                })
            })
            .catch((error) => {
                console.log('ERROR', error);
                toast.error('Something went wrong, try again')
            })
    }

    const handleForgetPassword = () => {
        navigate("/forgetpassword", {state: {revalue: emailRef.current?.value}});
    }



    return (
        <form className="card-body w-4/12 mx-auto my-10" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-5">Login Form</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" ref={emailRef} placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label" onClick={handleForgetPassword}>
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
                <button onClick={handleGoogleLogin} className="btn bg-slate-200"><FaGoogle className="mr-2"></FaGoogle> Login with Google</button>
            </div>
            <h3>Don't have an account? <Link className="underline" to="/register">Register</Link></h3>
        </form>
    );
};

export default Login;