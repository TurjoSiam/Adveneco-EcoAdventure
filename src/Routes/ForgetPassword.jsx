import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {

    const { forgetPassword } = useContext(AuthContext);


    const location = useLocation();
    const emailValue = location.state?.revalue;


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');

        forgetPassword(email)
            .then(() => {
                console.log('reset email sent');
                toast.success('Reset email sent', {
                    position: "bottom-right",
                    className: 'foo-bar'
                })
                window.open('https://mail.google.com', '_blank')
            })
            .catch((error) => {
                console.log('ERROR', error.message);
            })
    }


    return (
        <form className="card-body w-11/12 md:w-8/12 lg:w-4/12 mx-auto my-10 bg-gradient-to-tr from-orange-200 to-red-200 rounded-2xl" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-5">Reset Password</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" defaultValue={emailValue} name="email" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-tr from-purple-600 to-blue-600 border-none">Reset</button>
            </div>
        </form>
    );
};

export default ForgetPassword;