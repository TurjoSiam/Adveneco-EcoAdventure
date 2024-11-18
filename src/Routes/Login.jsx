import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <form className="card-body w-4/12 mx-auto my-10">
            <h1 className="text-3xl font-bold mb-5">Login Form</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
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