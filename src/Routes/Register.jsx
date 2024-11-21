import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {

    const navigate = useNavigate();

    const { createNewUser, profileUpdateWhenLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if(!regexPassword.test(password)){
            toast.error('Password must have an uppercase a lowercase and at least 6 characters', {
                position: "bottom-right",
                className: 'foo-bar'
            })
            return;
        }

        createNewUser(email, password)
        .then(result => {
            console.log(result);
            e.target.reset();
            profileUpdateWhenLogin({
                displayName: name, photoURL: photo
            })
            .then(() => {
                navigate("/");
                toast.success('Welcome to Adveneco', {
                    position: "bottom-right",
                    className: 'foo-bar'
                })
            })
            .catch((error) => {
                console.log('ERROR', error.message);
            })
        })
        .catch(error => {
            console.log('ERROR', error.message);
        })

        
    }


    return (
        <form className="card-body w-11/12 md:w-8/12 lg:w-4/12 mx-auto my-10 bg-gradient-to-tr from-orange-200 to-red-200 rounded-2xl" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-5">Registration Form</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="url" placeholder="photo url" name="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-tr from-purple-600 to-blue-600 border-none">Register</button>
            </div>
            <h3>Already have an account? <Link className="underline" to="/login">Login</Link></h3>
        </form>
    );
};

export default Register;