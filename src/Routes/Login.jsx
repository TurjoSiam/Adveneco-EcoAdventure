import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log('ERROR', error.message);
        })
    }



    return (
        <form className="card-body w-4/12 mx-auto my-10" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-5">Login Form</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
                <button className="btn bg-slate-200"><FaGoogle className="mr-2"></FaGoogle> Login with Google</button>
            </div>
            <h3>Don't have an account? <Link className="underline" to="/register">Register</Link></h3>
        </form>
    );
};

export default Login;