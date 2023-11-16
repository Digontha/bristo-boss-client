import { Link, useNavigate } from "react-router-dom";
import image from "../assets/others/authentication.gif"
import imageBG from "../assets/others/authentication.png"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const BG = {
        backgroundImage: `url(${imageBG})`
    }

    const { createUser, UpdateProfile } = useContext(AuthContext)
const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, image, email, password);

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                UpdateProfile(name, image)
                    .then(() => { })
                    .catch(err => { console.log(err) })
                    navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <div className="hero min-h-screen " style={BG}>
                <div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold underline">Register In</h1>
                    </div>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img src={image} alt="" />
                        </div>
                        <div className="w-full">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral btn-outline">Register</button>
                                </div>
                            </form>
                            <div className="text-center">
                                <p>Haven an account? please <Link to="/login" className="text-purple-800 font-semibold">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;