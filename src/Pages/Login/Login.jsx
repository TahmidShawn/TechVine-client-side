import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const { logIn, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        logIn(email, password)
            .then((result) => {
                console.log(result);
                toast.success('Successfully Logged In!');
                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                if (err.message === 'IncorrectEmail') {
                    toast.error('Email does not match')

                } else if (err.message === 'IncorrectPassword') {
                    toast.error('Password does not match')

                } else {
                    toast.error('Email and Password does not match')
                }
            })

    }

    const handleGoogleLogin = () => {

        googleLogin()
            .then(() => {
                toast.success('google login successfully done')
                navigate(location?.state ? location.state : '/')
            })
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-10'>Login</h2>
            <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 mt-10">
                <form onSubmit={handleLogIn} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <h2 className="mt-1">Do not have an account?  <span><Link className="text-blue-800 font-bold ml-1" to='/register'>Register</Link></span> </h2>
                    <h2 className="mt-3">Or</h2>
                    <div className="flex items-center">
                        <h2 className="">LogIn with -</h2>
                        <Link>
                            <button onClick={handleGoogleLogin} className="flex items-center gap-2 font-bold btn btn-outline ml-2"> Google</button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;