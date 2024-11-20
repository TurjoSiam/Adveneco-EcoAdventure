import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const UpdateProfile = () => {

    const navigate = useNavigate();

    const { profileUpdate } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get('name');
        const photo = form.get('photo');

        console.log(typeof name, typeof photo);

        profileUpdate({
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('profile updated');
                navigate("/profile");
                toast.success('Profile updated successfully', { 
                    position: "bottom-right",
                    className: 'foo-bar'
                })
            })
            .catch((error) => {
                console.log('ERROR', error.message);
            })
    }



    return (
        <form className="card-body w-4/12 mx-auto my-10" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-5">User Profile Update</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="url" placeholder="photo url" name="photo" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Update Profile</button>
            </div>
        </form>
    );
};

export default UpdateProfile;