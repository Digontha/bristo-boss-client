import { Link } from "react-router-dom";
import image from "../assets/others/authentication.gif"
import imageBG from "../assets/others/authentication.png"

const Login = () => {
    const BG = {
        backgroundImage: `url(${imageBG})`
    }
    const handleLogin = (e) => {
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
    }
    return (
        <>
            <div className="hero min-h-screen " style={BG}>
                <div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold underline">Login In</h1>
                    </div>
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <img src={image} alt="" />
                        </div>
                        <div className="w-full">
                            <form onSubmit={handleLogin} className="card-body">
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
                                    <button className="btn btn-neutral btn-outline">Login</button>
                                </div>
                            </form>
                            <div  className="text-center">
                                <p>Haven't any account? please <Link to="/register" className="text-purple-800 font-semibold">Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;