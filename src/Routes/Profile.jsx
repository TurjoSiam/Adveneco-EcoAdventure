import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="mx-auto flex flex-col items-center my-10 font-spinnaker">
            <h2 className="text-3xl font-bold">Welcome '{user.displayName}' to <span className="font-carter">Adveneco</span></h2>

            <div className="w-4/12 pt-24 pb-10 rounded-2xl text-center mt-28 mx-auto bg-gradient-to-tr from-sky-100 to-orange-100 relative">
                <img className="w-40 h-40 -top-20 left-44 rounded-full object-cover absolute" src={user.photoURL} alt="user photo" />
                <h2 className="text-2xl font-bold">{user.displayName}</h2>
                <h2 className="text-gray-500">Official member <i class="fa-solid fa-circle-check text-blue-500"></i></h2>
                <h2 className="text-xl my-7"><i class="fa-solid fa-envelope"></i> {user.email}</h2>
                <Link to="/updateprofile"><button className="btn bg-gradient-to-tr from-orange-500 to-orange-300 hover:bg-gradient-to-tr hover:from-orange-300 hover:to-orange-500">Update Profile</button></Link>
            </div>
        </div>
    );
};

export default Profile;